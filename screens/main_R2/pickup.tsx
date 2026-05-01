import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import Header from "../../src/components/header";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { globalStyles, main } from "../../styles/mystyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useRobot } from "../../contexts/RobotContext";
import BatteryIcon from "../../src/components/BatteryIcon";
import { API_BASE_URL } from "../../src/config";

export type RootStackParamList = {
  // ข้อมูลที่หน้า Pickup คาดหวังได้รับกลับมาจากหน้าเลือกจุด (Delivery Information)
  Pickup: {
    returnedPointName?: string; // ชื่อจุดที่เลือก
    returnedPhone?: string;     // เบอร์โทรที่กรอก
    target?: string;            // ระบุว่าเป็นข้อมูลของฝั่ง 'from' หรือ 'to'
    currentFrom?: string;       // รักษาค่าเดิมไว้ไม่ให้หายตอนสลับหน้า
    currentTo?: string;
    currentPhone?: string;
  };
  delivery_information: {
    uuid: string;
    target?: string;
    returnTab?: string;
    returnScreen?: string;
    currentFrom?: string;
    currentTo?: string;
    currentPhone?: string;
  };
};

// --- Interfaces สำหรับข้อมูลจาก API ---
interface RobotDetail {
  number?: string;
  taskStatus?: string;
  power?: string | number;
}

interface RobotListItem {
  uuid: string;
  state: string;
}

export default function Pickup() {
  const [show_robot, setShow_robot] = useState(true);
  const insets = useSafeAreaInsets();
  const route = useRoute<RouteProp<RootStackParamList, "Pickup">>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { uuid } = useRobot(); // ดึง UUID หุ่นยนต์ที่กำลังใช้งานมาจาก Context

  // --- State สำหรับเก็บข้อมูลการรับ-ส่งของ ---
  const [fromPoint, setFromPoint] = useState<string>("");         // จุดต้นทาง
  const [toPoint, setToPoint] = useState<string>("");             // จุดปลายทาง
  const [deliveryPhone, setDeliveryPhone] = useState<string>("");     // เบอร์โทรศัพท์
  const [button_go, setbutton_go] = useState(false);              // ควบคุมสถานะปุ่ม "Go"
  
  // --- State สำหรับเก็บข้อมูลหุ่นยนต์ที่ดึงจาก API ---
  const [robotNumber, setRobotnumber] = useState("...");
  const [status, setStatus] = useState("...");
  const [taskStatus, setTaskStatus] = useState("...");
  const [power, setPower] = useState("0%");

  /**
   * [ useEffect: รับค่ากลับมาจากหน้าเลือกจุด ]
   * เมื่อผู้ใช้เลือกจุดเสร็จและกดตกลง ข้อมูลจะถูกส่งกลับมาผ่าน params
   */
  useEffect(() => {
    const params = route.params;
    if (params?.returnedPointName) {
      console.log("Pickup received params:", params);
      const {
        returnedPointName,
        returnedPhone,
        target,
        currentFrom,
        currentTo,
        currentPhone,
      } = params;

      // อัปเดตข้อมูลตาม target ที่ส่งมา (from หรือ to)
      if (target === "from") {
        setFromPoint(returnedPointName);
        if (currentTo) setToPoint(currentTo); // กู้คืนค่าฝั่งตรงข้ามเพื่อไม่ให้ข้อมูลหาย
      } else if (target === "to") {
        setToPoint(returnedPointName);
        if (currentFrom) setFromPoint(currentFrom);
      }

      // จัดการเรื่องเบอร์โทรศัพท์
      if (returnedPhone) {
        setDeliveryPhone(returnedPhone);
      } else if (currentPhone) {
        setDeliveryPhone(currentPhone);
      }

      // สำคัญ: ต้องล้างพารามิเตอร์ทิ้ง เพื่อป้องกันไม่ให้ useEffect ทำงานซ้ำตอนรีรันหน้าจอ
      navigation.setParams({
        returnedPointName: undefined,
        returnedPhone: undefined,
        target: undefined,
        currentFrom: undefined,
        currentTo: undefined,
        currentPhone: undefined,
      });
    }
  }, [route.params, navigation]);

  // อัปเดตสถานะหุ่นยนต์อัตโนมัติ
  useEffect(() => {
    const fetchRobotData = async () => {
      try {
        const robotRes = await fetch(`${API_BASE_URL}/api/robots/${uuid}`);
        const robotJson = (await robotRes.json()) as
          | { data?: RobotDetail }
          | RobotDetail;
        const robotData =
          (robotJson as { data?: RobotDetail }).data ||
          (robotJson as RobotDetail);

        if (robotData) {
          if (robotData.number) setRobotnumber(robotData.number);
          if (robotData.taskStatus) setTaskStatus(robotData.taskStatus);
          if (robotData.power !== undefined) {
            setPower(`${Math.round(parseFloat(String(robotData.power)))}%`);
          }
        }
      } catch (error: unknown) {
        console.error("Error fetching robot data:", error);
      }
    };

    // ดึงค่า ที่อยู่ใน http://localhost:3000/api/robots "state": "IDLING"
    const fetchRobotState = async () => {
      try {
        const robotStateRes = await fetch(`${API_BASE_URL}/api/robots`);
        const robotStateJson = await robotStateRes.json();

        // ตรวจสอบข้อมูลว่าเป็น Array หรือไม่ (รองรับหลายรูปแบบ response)
        let robotsList = [];
        if (Array.isArray(robotStateJson)) robotsList = robotStateJson;
        else if (robotStateJson && Array.isArray(robotStateJson.data))
          robotsList = robotStateJson.data;
        else if (
          robotStateJson &&
          robotStateJson.data &&
          Array.isArray(robotStateJson.data.list)
        )
          robotsList = robotStateJson.data.list;

        // ค้นหาหุ่นยนต์ตัวที่ตรงกับ uuid ปัจจุบัน
        const currentRobot = robotsList.find(
          (r: RobotListItem) => r.uuid === uuid,
        );

        if (currentRobot && currentRobot.state) {
          setStatus(currentRobot.state);
        }
      } catch (error) {
        console.error("Error fetching robot state from list:", error);
      }
    };

    if (fromPoint !== "" && toPoint !== "") {
      setbutton_go(true);
    } else {
      setbutton_go(false);
    }
    fetchRobotState();
    fetchRobotData();
  }, [fromPoint, toPoint]);

  /**
   * [ handleOrder ]: ฟังก์ชันส่งคำสั่งงาน (Order) ให้หุ่นยนต์
   * ทำการรวบรวมข้อมูลทั้งหมดส่งไปยัง API เพื่อเริ่มการทำงาน
   */
  const handleOrder = async () => {
    // ตรวจสอบความพร้อม: ต้องมีทั้งต้นทางและปลายทาง
    if (!fromPoint || !toPoint) {
      alert("Please select both points");
      return;
    }
    const payload = {
      source: "THRID_UNIONPAY_HELP_DELIVER",
      thridOrderNum: `HELP-${Date.now()}`,
      phone: deliveryPhone,
      callBackUrl: `${API_BASE_URL}/api/callback/order`,
      deliveryType: "HELP_SEND",
      fromPointName: fromPoint,
      toPointName: toPoint,
      robotUuid: uuid,
    };

    console.log("Sending Order Payload:", payload);

    try {
      const res = await fetch(`${API_BASE_URL}/api/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { msg?: string };
      console.log("Order Response:", data);

      if (res.ok) {
        alert("Order sent successfully");
        // เครียค่า
        setFromPoint("");
        setToPoint("");
        setDeliveryPhone("");
      } else {
        alert(`Order failed: ${data.msg || "Unknown error"}`);
      }
    } catch (error: unknown) {
      console.error("Error sending order:", error);
      alert("Error sending order. Please check your connection.");
    }
  };

  return (
    <View style={globalStyles.container}>
      <Header />
      <Text style={main.textheader}>Pickup/Delivery assistance</Text>
      {/* Choose a robot */}
      <View
        style={[
          globalStyles.ios,
          globalStyles.android,
          {
            // ลบ flex: 0.5 ออกเพื่อให้ขนาดขยายตามเนื้อหา
            flex: 1,
            backgroundColor: "#ffffffff",
            marginHorizontal: 20,
            marginTop: 10,
            borderRadius: 20,
          },
        ]}
      >
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#e6f0ffff",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#7F7F7F",
            }}
          >
            Choose a robot
          </Text>
          <Ionicons
            name="caret-back-sharp"
            size={20}
            color="#7F7F7F"
            style={{ transform: [{ rotate: "-180deg" }] }}
          />
        </View>

        {/* show_robot === true */}
        {show_robot ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                minHeight: 100,
              }}
            >
              <View
                style={{
                  width: "100%",
                  minHeight: 100,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <Image
                    source={require("../../assets/icon/R2-008.png")}
                    style={{
                      width: 65,
                      aspectRatio: 2 / 3,
                      resizeMode: "contain",
                      //backgroundColor: "#00000085",
                    }}
                  />
                  <View style={{ rowGap: 10 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    >
                      {robotNumber}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "500",
                        color: "#4b4b4bff",
                      }}
                    >
                      {status}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    //backgroundColor: "#ffffffff",
                    justifyContent: "space-around",
                    alignItems: "flex-end",
                  }}
                >
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
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "500",
                        color: "#030303ff",
                      }}
                    >
                      {power}
                    </Text>
                  </View>
                  <MaterialIcons
                    name="radio-button-checked"
                    size={20}
                    color="#1B00B6"
                  />
                </View>
              </View>
            </View>
          </View>
        ) : (
          // show_robot === false
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              //backgroundColor: "#0a60ff",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  width: 100,
                  height: 70,
                  resizeMode: "contain",
                  //backgroundColor: "#0a60ff",
                }}
                source={require("../../assets/icon/Choose_your.png")}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "#7F7F7F",
                }}
              >
                Choose your delivery staff
              </Text>
            </View>
          </View>
        )}
      </View>

      {/* Address */}
      <View
        style={[
          globalStyles.ios,
          globalStyles.android,
          {
            flex: 1.5,
            backgroundColor: "#ffffffff",
            marginHorizontal: 20,
            marginTop: 10,
            borderRadius: 30,
            paddingHorizontal: 10,
            paddingVertical: 20,
            marginBottom: 0, // เพิ่ม gap ระหว่าง Address กับปุ่ม Go
          },
        ]}
      >
        <Text
          style={{
            marginLeft: 10,
            fontSize: 20,
            fontWeight: "bold",
            color: "#4e4e4eff",
          }}
        >
          Address
        </Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {/* Where to deliver from ? */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              console.log("Pickup navigating (Target: from) with params:", {
                target: "from",
                currentFrom: fromPoint,
                currentTo: toPoint,
              });
              navigation.navigate("delivery_information", {
                uuid,
                target: "from",
                returnTab: "TabR2",
                returnScreen: "Pickup",
                currentFrom: fromPoint,
                currentTo: toPoint,
                currentPhone: deliveryPhone,
              });
            }}
            style={{
              width: "100%",
              height: 85,
              backgroundColor: "#d0effc74",
              alignSelf: "center",
              borderRadius: 20,
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 11,
                height: 11,
                backgroundColor: "#000DFF",
                marginLeft: 20,
                borderRadius: 25,
              }}
            ></View>
            <View
              style={{
                marginLeft: 20,
                rowGap: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: fromPoint ? "#000DFF" : "#000000ff",
                  fontWeight: fromPoint ? "bold" : "500",
                }}
              >
                {fromPoint || "Where to deliver from ?"}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#7F7F7F",
                  fontWeight: "500",
                }}
              >
                Click to fill in delivery information
              </Text>
            </View>
          </TouchableOpacity>

          {/* To where? */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              console.log("Pickup navigating (Target: to) with params:", {
                target: "to",
                currentFrom: fromPoint,
                currentTo: toPoint,
              });
              navigation.navigate("delivery_information", {
                uuid,
                target: "to",
                returnTab: "TabR2",
                returnScreen: "Pickup",
                currentFrom: fromPoint,
                currentTo: toPoint,
                currentPhone: deliveryPhone,
              });
            }}
            style={{
              width: "100%",
              height: 85,
              backgroundColor: "#ffdaab6d",
              alignSelf: "center",
              borderRadius: 20,
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 11,
                height: 11,
                backgroundColor: "#FF6600",
                marginLeft: 20,
                borderRadius: 25,
              }}
            ></View>
            <View
              style={{
                marginLeft: 20,
                rowGap: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: toPoint ? "#FF6600" : "#000000ff",
                  fontWeight: toPoint ? "bold" : "500",
                }}
              >
                {toPoint || "To where ?"}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#7F7F7F",
                  fontWeight: "500",
                }}
              >
                Click to fill in receive information
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {button_go ? (
        // Call button (Go)
        // button_go = true เมื่อเลือกจุดครบทั้งสองฝั่ง
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleOrder}
          style={{
            backgroundColor: "#0a60ff",
            height: 50,
            width: "90%",
            alignSelf: "center",
            borderRadius: 25,
            marginTop: 20,
            marginBottom: 100 + Math.max(insets.bottom, 0),
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
            Go
          </Text>
        </TouchableOpacity>
      ) : (
        // button_go = false เมื่อเลือกจุดไม่ครบทั้งสองฝั่ง
        <View
          style={{
            backgroundColor: "#c3c3c3ff",
            height: 50,
            width: "90%",
            alignSelf: "center",
            borderRadius: 25,
            marginTop: 20,
            marginBottom: 100 + Math.max(insets.bottom, 0),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#ffffffff",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Go
          </Text>
        </View>
      )}
    </View>
  );
}
