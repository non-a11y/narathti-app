import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useState, useEffect, useCallback } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../src/components/header";
import { globalStyles, main } from "../../styles/mystyles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Call_robot_main: { uuid: string };
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
  const [offline, setOffline] = useState(route?.params?.status === "offline");

  // ฟังก์ชันดึงข้อมูล (แยกออกมาเพื่อให้เรียกใช้ซ้ำได้)
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

  // ใช้ useEffect เพื่อดึงข้อมูลเมื่อ component ถูก mount
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
          {/* ชื่อสถานที่ (ดึงจาก Maps) */}
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
                  marginBottom: 100 + Math.max(insets.bottom, 0),
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
                }}
              >
                {/* หมายเลขหุ่นยนต์ */}
                <Text style={[globalStyles.defaulttextstyles, { fontSize: 20 }]}>
                  {robotNumber}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {/* สถานะการทำงาน */}
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
                  <Image
                    style={{
                      width: 20,
                      aspectRatio: 2 / 3,
                      resizeMode: "contain",
                      marginRight: 5,
                      // ปรับภาพให้เป็นแนวนอน
                      transform: [{ rotate: "90deg" }],
                    }}
                    source={(() => {
                      if (taskStatus === "CHARGE") {
                        return require("../../assets/icon/battery/CHARGE.webp");
                      }
                      const pValue = Number(power.replace("%", ""));
                      if (pValue <= 25) {
                        return require("../../assets/icon/battery/0-25.webp");
                      } else if (pValue <= 50) {
                        return require("../../assets/icon/battery/25-50.webp");
                      } else if (pValue <= 75) {
                        return require("../../assets/icon/battery/50-75.webp");
                      } else {
                        return require("../../assets/icon/battery/75-100.webp");
                      }
                    })()}
                  />
                  {/* แบตเตอรี่ */}
                  <Text style={globalStyles.defaulttextstyles}>{power}</Text>
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
                  height: 450, // 👈 กำหนดความสูงที่แน่นอนเพื่อไม่ให้ล้น ScrollView
                  alignSelf: "center",
                  marginTop: 10,
                  resizeMode: "contain",
                }}
                source={require("../../assets/icon/R2-008.png")}
              />
              {/* button */}
              {offline ? (
                <View
                  style={{
                    backgroundColor: "#9c9c9cff",
                    height: 50,
                    width: "90%",
                    alignSelf: "center",
                    borderRadius: 25,
                    marginTop: 20,
                    marginBottom: 20,
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
                </View>
              ) : (
                <TouchableOpacity
                  style={{
                    backgroundColor: "#0a60ff",
                    height: 50,
                    width: "90%",
                    alignSelf: "center",
                    borderRadius: 25,
                    marginTop: 20,
                    marginBottom: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => navigation.navigate("Call_robot_main", { uuid })}
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
              )}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
}
