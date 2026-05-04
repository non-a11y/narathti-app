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
import { useState, useEffect, useCallback } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../src/components/header";
import { globalStyles, main } from "../../styles/mystyles";
import {
  useNavigation,
  useRoute,
  RouteProp,
  useIsFocused,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { API_BASE_URL } from "../../src/config";
import { useRobot } from "../../contexts/RobotContext"; // 👈 นำเข้า Context
import BatteryIcon from "../../src/components/BatteryIcon";

export type RootStackParamList = {
  Home: { uuid: string; status?: string };
  Call_robot_R2: { uuid: string };
};

// --- Interfaces สำหรับข้อมูลจาก API ---
interface RobotDetail {
  number?: string;
  taskStatus?: string;
  power?: string | number;
  mapUuid?: string;
  online?: boolean | string;
  status?: string | number | boolean;
}

interface MapItem {
  mapUuid?: string;
  buildingNum?: string;
}

export default function Home() {
  /**
   * [ React Navigation Hooks ]
   * 1. useRoute: ใช้สำหรับดึงข้อมูลของหน้านี้ เช่น พารามิเตอร์ (uuid) ที่ส่งมาจากหน้าก่อนหน้า
   */
  const route = useRoute<RouteProp<RootStackParamList, "Home">>();

  const insets = useSafeAreaInsets();

  /**
   * 2. useNavigation: ใช้สำหรับสั่งการนำทางไปยังหน้าอื่นๆ
   */
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  /**
   * 3. useWindowDimensions: ใช้ดึงค่าความกว้าง/สูงของหน้าจอเครื่อง เพื่อทำ Responsive UI
   */
  const { height: windowHeight } = useWindowDimensions();

  /**
   * 4. useRobot (Context): ดึงข้อมูลหุ่นยนต์ที่กำลังใช้งานอยู่จาก Global State
   * ช่วยให้หน้าอื่นๆ ในแอปทราบว่าตอนนี้กำลังคุยกับหุ่นยนต์ตัวไหนอยู่
   */
  const { uuid: contextUuid, setUuid } = useRobot();

  // ตรวจสอบค่า UUID: ให้ความสำคัญกับพารามิเตอร์ที่ส่งมาทาง Navigation ก่อน
  const uuidFromParams = route?.params?.uuid;
  const uuid = uuidFromParams || contextUuid;

  // --- State สำหรับเก็บข้อมูล UI ---
  const [loading, setLoading] = useState(true); // แสดงสถานะการโหลดข้อมูลครั้งแรก
  const [refreshing, setRefreshing] = useState(false); // แสดงสถานะการลากเพื่อรีเฟรช (Pull to Refresh)
  const [buildingNum, setBuildingNum] = useState("Project Name");
  const [robotNumber, setRobotNumber] = useState("...");
  const [taskStatus, setTaskStatus] = useState("...");
  const [power, setPower] = useState("0%");
  const [offline, setOffline] = useState(route?.params?.status === "offline");

  /**
   * 5. useIsFocused: คืนค่าเป็น true เมื่อหน้านี้กำลังถูกแสดงอยู่บนหน้าจอ
   */
  const isFocused = useIsFocused();

  /**
   * [ Sync UUID to Context ]
   * ตรวจสอบว่าถ้าหน้าจอนี้กำลังแสดงอยู่ (isFocused) และมี UUID ใหม่เข้ามา
   * ให้ทำการบันทึก UUID นั้นลงใน Context เพื่อแชร์ให้หน้าอื่นๆ
   */
  useEffect(() => {
    if (isFocused && uuidFromParams && uuidFromParams !== contextUuid) {
      setUuid(uuidFromParams);
    }
  }, [isFocused, uuidFromParams, contextUuid, setUuid]);

  /**
   * [ fetchData ]: ฟังก์ชันสำหรับเรียก API ดึงข้อมูลหุ่นยนต์และแผนที่
   * ใช้ useCallback เพื่อความเสถียรของฟังก์ชัน
   */
  const fetchData = useCallback(async () => {
    try {
      if (!uuid) {
        // ถ้าไม่มีทั้งใน Params และ Context ค่อยแสดง Error
        console.error("UUID is missing!");
        setLoading(false);
        return;
      }

      // 1. ดึงข้อมูลหุ่นยนต์รายละเอียดเชิงลึก
      const robotRes = await fetch(`${API_BASE_URL}/api/robots/${uuid}`);
      // กำหนด Type ให้ชัดเจนแทน any
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

        // เช็คสถานะออนไลน์เพื่อปิด/เปิดปุ่ม
        let isOnline = false;
        if (robotData.online === true || robotData.online === "true") {
          isOnline = true;
        } else if (robotData.status !== undefined) {
          if (typeof robotData.status === "string") {
            isOnline =
              robotData.status.toLowerCase() === "online" ||
              robotData.status.toLowerCase() === "idle";
          } else if (robotData.status === 1 || robotData.status === true) {
            isOnline = true;
          }
        }
        setOffline(!isOnline);
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

  // [ Initial Fetch ]: เรียกดึงข้อมูลทันทีที่เข้าหน้าจอ หรือรหัสหุ่นยนต์เปลี่ยน
  useEffect(() => {
    fetchData();
  }, [uuid]);

  // [ Pull to Refresh ]: ฟังก์ชันที่ทำงานเมื่อผู้ใช้ลากหน้าจอลงเพื่อดึงข้อมูลใหม่
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
        // แสดง Spinner ขณะกำลังโหลดข้อมูลครั้งแรก
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0a60ff" />
          <Text style={{ marginTop: 10 }}>Loading data...</Text>
        </View>
      ) : (
        <>
          {/* ชื่อตึก/โปรเจกต์ */}
          <Text style={main.textheader}>{buildingNum}</Text>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
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
                <Text
                  style={[globalStyles.defaulttextstyles, { fontSize: 20 }]}
                >
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
                      style={{ width: 25 }} // ปรับขนาดตามความต้องการของหน้านี้
                    />
                    {/* แบตเตอรี่ */}
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
                source={require("../../assets/icon/R2-008.png")}
              />
              {/* button */}
              {/* offline */}
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
                // online
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
                  onPress={() => navigation.navigate("Call_robot_R2", { uuid })}
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
