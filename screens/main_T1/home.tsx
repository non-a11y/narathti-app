import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../src/components/header";
import { globalStyles, main } from "../../styles/mystyles";
import { useEffect, useState, useCallback } from "react";
import {
  useNavigation,
  useIsFocused,
  useRoute,
  RouteProp,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { API_BASE_URL } from "../../src/config";
import BatteryIcon from "../../src/components/BatteryIcon";
import { useRobot } from "../../contexts/RobotContext";

// --- Types ---
type RootStackParamList = {
  Home: { uuid: string; status?: string };
  Call_robot_T1: { uuid: string };
};

interface RobotDetail {
  number?: string;
  taskStatus?: string;
  power?: string | number;
  mapUuid?: string;
}

interface MapItem {
  mapUuid?: string;
  buildingNum?: string;
}

export default function Home() {
  /**
   * [ React Navigation Hooks ]
   * 1. useRoute: ดึงข้อมูลพารามิเตอร์ (uuid) จากหน้าจอก่อนหน้า
   */
  const route = useRoute<RouteProp<RootStackParamList, "Home">>();

  const insets = useSafeAreaInsets();

  /**
   * 2. useNavigation: สั่งงานนำทาง
   */
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  /**
   * 3. useWindowDimensions: ใช้ปรับขนาดภาพตามหน้าจอเครื่อง
   */
  const { height: windowHeight } = useWindowDimensions();

  /**
   * 4. useIsFocused: เช็คสถานะการแสดงผลของหน้าจอ (ป้องกันการแย่งอัปเดต Context)
   */
  const isFocused = useIsFocused();

  /**
   * 5. useRobot (Context): เข้าถึงรหัสหุ่นยนต์ที่เลือกไว้ในระบบ
   */
  const { uuid: contextUuid, setUuid } = useRobot();

  // ตรวจสอบค่า uuid (ลำดับความสำคัญ: params > context)
  const uuidFromParams = route?.params?.uuid;
  const uuid = uuidFromParams || contextUuid;

  // --- State สำหรับเก็บข้อมูลที่ดึงมาจาก API ---
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [buildingNum, setBuildingNum] = useState("Project Name");
  const [robotNumber, setRobotNumber] = useState("...");
  const [taskStatus, setTaskStatus] = useState("...");
  const [power, setPower] = useState("0%");
  const [offline, setOffline] = useState(route?.params?.status === "offline");

  /**
   * [ Sync UUID to Context ]
   */
  useEffect(() => {
    if (isFocused && uuidFromParams && uuidFromParams !== contextUuid) {
      setUuid(uuidFromParams);
    }
  }, [isFocused, uuidFromParams, contextUuid, setUuid]);

  /**
   * [ fetchData ]: ดึงข้อมูลสถานะหุ่นยนต์และแผนที่จาก API
   */
  const fetchData = useCallback(async () => {
    try {
      if (!uuid) {
        console.error("UUID is missing!");
        setLoading(false);
        return;
      }

      // 1. ดึงข้อมูลหุ่นยนต์รายละเอียดเชิงลึก
      const robotRes = await fetch(`${API_BASE_URL}/api/robots/${uuid}`);
      const robotJson = (await robotRes.json()) as
        | { data?: RobotDetail }
        | RobotDetail;
      const robotData =
        (robotJson as { data?: RobotDetail }).data ||
        (robotJson as RobotDetail);

      if (robotData) {
        if (robotData.number) setRobotNumber(robotData.number);
        if (robotData.taskStatus) setTaskStatus(robotData.taskStatus);
        if (robotData.power !== undefined) {
          setPower(`${Math.round(parseFloat(String(robotData.power)))}%`);
        }
      }

      // 2. ดึงข้อมูลแผนที่ทั้งหมด เพื่อเอามาเทียบหา buildingNum
      const mapsRes = await fetch(`${API_BASE_URL}/api/maps`);
      const mapsJson = (await mapsRes.json()) as
        | MapItem[]
        | { data: MapItem[] | { list: MapItem[] } }
        | { list: MapItem[] };

      let mapsList: MapItem[] = [];
      if (Array.isArray(mapsJson)) {
        mapsList = mapsJson;
      } else if (mapsJson && "data" in mapsJson) {
        if (Array.isArray(mapsJson.data)) {
          mapsList = mapsJson.data;
        } else if (
          mapsJson.data &&
          "list" in mapsJson.data &&
          Array.isArray(mapsJson.data.list)
        ) {
          mapsList = mapsJson.data.list;
        }
      } else if (
        mapsJson &&
        "list" in mapsJson &&
        Array.isArray(mapsJson.list)
      ) {
        mapsList = mapsJson.list;
      }

      // 3. จับคู่ mapUuid เพื่อหาชื่อตึก
      if (robotData && robotData.mapUuid) {
        const matchedMap = mapsList.find(
          (m: MapItem) => m.mapUuid === robotData.mapUuid,
        );
        if (matchedMap && matchedMap.buildingNum) {
          setBuildingNum(matchedMap.buildingNum);
        } else {
          setBuildingNum("demo_CPF");
        }
      } else {
        setBuildingNum("demo_CPF");
      }
    } catch (error) {
      console.error("Error fetching robot details:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [uuid]);

  // Initial Fetch
  useEffect(() => {
    fetchData();
  }, [uuid]);

  // Pull to Refresh
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, [fetchData]);

  return (
    <View style={globalStyles.container}>
      {/* ----- ส่วนหัว (Header) ----- */}
      <Header />

      {/* ----- ส่วนเนื้อหา (Content) ----- */}
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
                  height: windowHeight * 0.43, // ปรับความสูงเป็น 45% ของหน้าจอ
                  alignSelf: "center",
                  marginTop: 10,
                  resizeMode: "contain",
                }}
                source={require("../../assets/icon/T1-007.png")}
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
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
}
