import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Header from "../../src/components/header";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { globalStyles, main } from "../../styles/mystyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useRobot } from "../../contexts/RobotContext";
import BatteryIcon from "../../src/components/BatteryIcon";

export type RootStackParamList = {
  delivery_information: {
    uuid: string;
    onSelect?: (name: string, phone: string) => void;
  };
};

export default function Pickup() {
  const [show_robot, setShow_robot] = useState(true);
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { uuid } = useRobot(); // อ่าน uuid จาก RobotContext (เสถียรกว่าการอ่านจาก navigation state)

  const [fromPoint, setFromPoint] = useState<string>("");
  const [toPoint, setToPoint] = useState<string>("");
  const [deliveryPhone, setDeliveryPhone] = useState<string>("");
  const [button_go, setbutton_go] = useState(false);
  //ตัวแปรสำหรับเก็บข้อมูลหุ่นยนต์
  const [robotNumber, setRobotnumber] = useState("...");
  const [status, setStatus] = useState("...");
  const [taskStatus, setTaskStatus] = useState("...");
  const [power, setPower] = useState("0%");

  // ตรวจสอบอัตโนมัติ: ถ้าเลือกจุดครบทั้งสองฝั่ง ให้เปิดปุ่ม Go เป็นสีน้ำเงิน
  useEffect(() => {
    const fetchRobotData = async () => {
      try {
        const robotRes = await fetch(`http://10.0.2.2:3000/api/robots/${uuid}`);
        const robotJson = await robotRes.json();
        const robotData = robotJson.data || robotJson;

        if (robotData) {
          if (robotData.number) setRobotnumber(robotData.number);
          if (robotData.taskStatus) setTaskStatus(robotData.taskStatus);
          if (robotData.power !== undefined) {
          setPower(`${Math.round(parseFloat(robotData.power))}%`);
        }
        }
      } catch (error) {
        console.error("Error fetching robot data:", error);
      }
    };

    // ดึงค่า ที่อยู่ใน http://localhost:3000/api/robots "state": "IDLING"
    const fetchRobotState = async () => {
      try {
        const robotStateRes = await fetch("http://10.0.2.2:3000/api/robots");
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
        const currentRobot = robotsList.find((r: any) => r.uuid === uuid);

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

  // ฟังก์ชันสำหรับส่งคำสั่งทำงาน (API: /api/order)
  const handleOrder = async () => {
    // ตรวจสอบความพร้อมของข้อมูล
    if (!fromPoint || !toPoint) {
      alert("Please select both points");
      return;
    }
    const payload = {
      source: "THRID_UNIONPAY_HELP_DELIVER",
      thridOrderNum: `HELP-${Date.now()}`,
      phone: deliveryPhone,
      callBackUrl: "http://10.0.2.2:3000/api/callback/order", // localhost สำหรับ android emulator
      deliveryType: "HELP_SEND",
      fromPointName: fromPoint,
      toPointName: toPoint,
      robotUuid: uuid,
    };

    console.log("Sending Order Payload:", payload);

    try {
      const res = await fetch("http://10.0.2.2:3000/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
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
    } catch (error) {
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
            flex: 1,
            backgroundColor: "#ffffffff",
            marginHorizontal: 20,
            marginTop: 20,
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
          }}
        >
          <Text
            style={{
              marginLeft: 20,
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
            style={{ marginRight: 20, transform: [{ rotate: "-180deg" }] }}
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
              }}
            >
              <View
                style={{
                  width: "100%",
                  minHeight: 50,
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
                  height: 80,
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
            flex: 2,
            backgroundColor: "#ffffffff",
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 30,
            paddingHorizontal: 10,
            paddingVertical: 20,
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
        {/* Where to deliver from ? */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("delivery_information", {
              uuid,
              onSelect: (name, phone) => {
                setFromPoint(name);
                if (phone) setDeliveryPhone(phone); // เก็บเบอร์โทรถ้ามีการกรอก
              },
            })
          }
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
          onPress={() =>
            navigation.navigate("delivery_information", {
              uuid,
              onSelect: (name, phone) => {
                setToPoint(name);
                if (phone) setDeliveryPhone(phone); // เก็บเบอร์โทรถ้ามีการกรอก
              },
            })
          }
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
