import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../src/components/header";
import { globalStyles, main } from "../../styles/mystyles";
import { useEffect, useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import BatteryIcon from "../../src/components/BatteryIcon";

export type RootStackParamList = {
  Call_robot_T1: { uuid: string };
};

export default function Home({ route }: { route: any }) {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // รับ uuid จากหน้าแรก (Screen1) แบบไม่มีการ Hardcode ค่าสำรอง
  const uuid = route?.params?.uuid;

  // สร้าง State สำหรับเก็บข้อมูลที่ดึงมาจาก API
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [buildingNum, setBuildingNum] = useState("Project Name");
  const [robotNumber, setRobotNumber] = useState("...");
  const [taskStatus, setTaskStatus] = useState("...");
  const [power, setPower] = useState("0%");

  // ฟังก์ชันดึงข้อมูล
  const fetchData = useCallback(async () => {
    try {
      // ถ้าไม่มี UUID ส่งมา ให้หยุดโหลดและยกเลิกการดึงข้อมูล
      if (!uuid) {
        console.error(
          "UUID is missing! Please select a robot from the main screen.",
        );
        setLoading(false);
        return;
      }

      // 1. ดึงข้อมูลหุ่นยนต์รายละเอียดเชิงลึก
      const robotRes = await fetch(`http://10.0.2.2:3000/api/robots/${uuid}`);
      const robotJson = await robotRes.json();
      const robotData = robotJson.data || robotJson;

      if (robotData) {
        if (robotData.number) setRobotNumber(robotData.number);
        if (robotData.taskStatus) setTaskStatus(robotData.taskStatus);
        if (robotData.power !== undefined) {
          setPower(`${Math.round(parseFloat(robotData.power))}%`);
        }
      }

      // 2. ดึงข้อมูลแผนที่ทั้งหมด เพื่อเอามาเทียบหา buildingNum
      const mapsRes = await fetch("http://10.0.2.2:3000/api/maps");
      const mapsJson = await mapsRes.json();
      let mapsList = [];
      if (Array.isArray(mapsJson)) mapsList = mapsJson;
      else if (mapsJson && Array.isArray(mapsJson.data))
        mapsList = mapsJson.data;
      else if (mapsJson && mapsJson.data && Array.isArray(mapsJson.data.list))
        mapsList = mapsJson.data.list;

      // 3. จับคู่ mapUuid เพื่อหาชื่อตึก
      if (robotData && robotData.mapUuid) {
        const matchedMap = mapsList.find(
          (m: any) => m.mapUuid === robotData.mapUuid,
        );
        if (matchedMap && matchedMap.buildingNum) {
          setBuildingNum(matchedMap.buildingNum);
        } else {
          setBuildingNum("demo_CPF"); // Fallback
        }
      } else {
        setBuildingNum("demo_CPF"); // Fallback
      }
    } catch (error) {
      console.error("Error fetching robot details:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [uuid]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // ฟังก์ชันเมื่อมีการ Pull to Refresh
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, [fetchData]);
  return (
    <View style={globalStyles.container}>
      {/* ----- HEADER-----*/}
      <Header />

      {/* ----- CONTENT-----*/}
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0a60ff" />
          <Text style={{ marginTop: 10 }}>Loading data...</Text>
        </View>
      ) : (
        <>
          <Text style={main.textheader}>{buildingNum}</Text>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            refreshControl={
              // ดึงข้อมูลใหม่เมื่อ Pull to Refresh
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <View
              style={[
                globalStyles.ios,
                globalStyles.android,
                {
                  flex: 1,
                  backgroundColor: "#ffffffff",
                  marginHorizontal: 20,
                  marginTop: 20,
                  // ส่วนที่ 1: เว้นระยะด้านล่างเผื่อ TabBar ที่เป็น absolute position เพื่อไม่ให้ TabBar ทับเนื้อหา
                  marginBottom: 100 + Math.max(insets.bottom, 0), // เกิดเป็นค่าลบขึ้นมา ให้ใช้ 0 แทน
                  borderRadius: 30,
                },
              ]}
            >
              {/* header cart */}
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: 20,
                  marginTop: 10,
                  justifyContent: "space-between",
                  alignItems: "center",
                  //backgroundColor: "#000000",
                }}
              >
                <Text
                  style={[globalStyles.defaulttextstyles, { fontSize: 20 }]}
                >
                  {robotNumber}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: "#80A0FF",
                      borderRadius: 12,
                      paddingHorizontal: 15,
                      paddingVertical: 2,
                      marginRight: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {taskStatus}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      columnGap: 10,
                    }}
                  >
                    <BatteryIcon
                      battery={power}
                      taskStatus={taskStatus}
                      style={{ width: 20 }} // ปรับขนาดตามความต้องการของหน้านี้
                    />
                    <Text style={globalStyles.defaulttextstyles}>{power}</Text>
                  </View>
                </View>
              </View>
              {/* click to map */}
              <Text
                style={[
                  globalStyles.defaulttextstyles,
                  { fontSize: 12, alignSelf: "center", marginTop: 10 },
                ]}
              >
                Click to Map
              </Text>
              {/* image */}
              <Image
                style={{
                  width: "100%",
                  height: 450,
                  alignSelf: "center",
                  marginTop: 10,
                  resizeMode: "contain",
                }}
                source={require("../../assets/icon/T1-007.png")}
              />
              {/* button */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Call_robot_T1", { uuid });
                }}
                style={{
                  backgroundColor: "#0a60ff",
                  height: 50,
                  width: "90%",
                  alignSelf: "center",
                  borderRadius: 25,
                  marginTop: 20,
                  // ส่วนที่ 3: เพิ่ม marginBottom ไม่ให้ปุ่มติดขอบแผ่นกระดาษขาวด้านล่างมากเกินไป
                  marginBottom: 20,
                  // จัดตำแหน่งกึ่งกลางด้วย Flexbox แทนการดัน Component ด้วย margin
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Call
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
}
