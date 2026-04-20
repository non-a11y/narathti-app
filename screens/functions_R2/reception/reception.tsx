import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StatusBar,
  ScrollView,
  Modal,
} from "react-native";
import React from "react";
import { globalStyles, button_function } from "../../../styles/mystyles";
import Header_sub_functions from "../../../components/header_sub_functions";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Card_re from "../../../components/card_button_function";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

let globalwalkthrough_routes = "No Walkthrough";
let globallist = "Test";

export type RootStackParamList = {
  walkthrough_routes:
    | { currentSelection?: string; onSelect?: (value: string) => void }
    | undefined;
  notice_setting:
    | { currentSelection?: string; onSelect?: (value: string) => void }
    | undefined;
  leading_list:
    | { currentSelection?: string; onSelect?: (value: string) => void }
    | undefined;
  reception_time:
    | { currentSelection?: string; onSelect?: (value: string) => void }
    | undefined;
};

export default function reception() {
  const [leading_list, setleading_list] = useState(globallist);
  const [walkthrough_routes, setwalkthrough_routes] = useState(
    globalwalkthrough_routes,
  );

  const updateleading_list = (value: string) => {
    globallist = value; // จำไว้ใช้ครั้งหน้า
    setleading_list(value); // อัปเดตหน้าจอทันที
  };

  const updatewalkthrough_routes = (value: string) => {
    globalwalkthrough_routes = value; // จำไว้ใช้ครั้งหน้า
    setwalkthrough_routes(value); // อัปเดตหน้าจอทันที
  };

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  // State สำหรับจัดการค่า Voice Mode ของหุ่นยนต์
  const [voiceMode, setVoiceMode] = useState("Polite Chatting");

  // State สำหรับควบคุมการเปิด/ปิด Voice Mode Modal Dialog
  const [isVoiceModeModalVisible, setVoiceModeModalVisible] = useState(false);
  const [autoWork, setAutoWork] = useState(false);
  const [leadTheWay, setLeadTheWay] = useState(false);
  const [takeAPicture, setTakeAPicture] = useState(false);
  const [enableDelivery, setEnableDelivery] = useState(false);

  // State สำหรับจัดการค่า Door ของหุ่นยนต์
  const [doorMode, setDoorMode] = useState("Open Sesame!");
  const [isDoorModalVisible, setDoorModalVisible] = useState(false);

  // รูปแบบการทำงาน
  const [repeatType, setRepeatType] = useState("one-time");
  // วันที่ทำงาน
  const [selectedDays, setSelectedDays] = useState([
    "Mon.",
    "Tue.",
    "Wed.",
    "Thu.",
    "Fri.",
    "Sat.",
    "Sun.",
  ]);

  // ฟังก์ชันเลือกวัน
  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const insets = useSafeAreaInsets();
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Reception Setting" />

      {/* White Settings Card */}
      <View
        style={{
          flex: 1,
          marginTop: -20,
          paddingHorizontal: 16,
        }}
      >
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              flex: 1,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              alignItems: "center",
              shadowColor: "#5e76ffff",
              marginBottom: 20,
            },
          ]}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: "100%" }} // ให้ ScrollView กางเต็มร้อยเพื่อไม่ให้หด
            contentContainerStyle={{
              flexGrow: 1, // 100% ของพื้นที่ว่าง
              alignItems: "center", // จัดให้ของข้างในอยู่ตรงกลางแนวนอน
              paddingBottom: 20,
              marginTop: 20,
            }}
          >
            {/* Automatic Reception Group */}
            <View
              style={[
                {
                  width: "95%",
                  backgroundColor: "#ffffffff",
                  borderRadius: 40,
                  marginBottom: 10,
                  paddingHorizontal: 20,
                  borderWidth: 2,
                  borderColor: "#78bef8ff",
                },
              ]}
            >
              {/* Row 1: Automatic Reception */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingVertical: 15,
                }}
              >
                <Text style={button_function.rowLabel}>Automatic Cruise</Text>
                <Switch
                  value={autoWork}
                  onValueChange={setAutoWork}
                  trackColor={{ false: "#E0E0E0", true: "#8ae9a2ff" }}
                  thumbColor={autoWork ? "#34C759" : "#FFFFFF"}
                  ios_backgroundColor="#E0E0E0"
                />
              </View>

              {autoWork && (
                <>
                  <View
                    style={{
                      height: 1,
                      backgroundColor: "#EEEEEE",
                      width: "100%",
                    }}
                  />

                  {/* Row 2: Repeat */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingVertical: 15,
                    }}
                  >
                    <Text style={button_function.rowLabel}>Repeat</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        backgroundColor: "#8AAFFF",
                        borderRadius: 20,
                        padding: 2,
                        width: 140,
                        height: 34,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => setRepeatType("one-time")}
                        style={{
                          flex: 1,
                          backgroundColor:
                            repeatType === "one-time"
                              ? "#ffffff"
                              : "transparent",
                          borderRadius: 18,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                            color:
                              repeatType === "one-time" ? "#8AAFFF" : "#ffffff",
                          }}
                        >
                          one - time
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setRepeatType("multiple")}
                        style={{
                          flex: 1,
                          backgroundColor:
                            repeatType === "multiple"
                              ? "#ffffff"
                              : "transparent",
                          borderRadius: 18,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                            textAlign: "center",
                            color:
                              repeatType === "multiple" ? "#8AAFFF" : "#ffffff",
                          }}
                        >
                          Multiple{"\n"}times
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View
                    style={{
                      height: 1,
                      backgroundColor: "#EEEEEE",
                      width: "100%",
                    }}
                  />

                  {/* Row 3: Date / Every Week */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingVertical: 15,
                    }}
                  >
                    <Text style={button_function.rowLabel}>
                      {repeatType === "one-time" ? "Date" : "Every Week"}
                    </Text>

                    {repeatType === "one-time" ? (
                      <View
                        style={{
                          backgroundColor: "#8AAFFF",
                          paddingVertical: 6,
                          paddingHorizontal: 15,
                          borderRadius: 8,
                        }}
                      >
                        <Text style={{ color: "#fff", fontSize: 12 }}>
                          yyyy-mm-dd
                        </Text>
                      </View>
                    ) : (
                      <View style={{ flexDirection: "row", columnGap: 2 }}>
                        {[
                          "Mon.",
                          "Tue.",
                          "Wed.",
                          "Thu.",
                          "Fri.",
                          "Sat.",
                          "Sun.",
                        ].map((day) => {
                          const isSelected = selectedDays.includes(day);
                          return (
                            <TouchableOpacity
                              key={day}
                              onPress={() => toggleDay(day)}
                              style={{
                                backgroundColor: isSelected
                                  ? "#8AAFFF"
                                  : "#E0E0E0",
                                width: 24,
                                height: 24,
                                borderRadius: 12,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Text
                                style={{
                                  color: isSelected ? "#fff" : "#888",
                                  fontSize: 8,
                                }}
                              >
                                {day}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    )}
                  </View>

                  <View
                    style={{
                      height: 1,
                      backgroundColor: "#EEEEEE",
                      width: "100%",
                    }}
                  />

                  {/* Row 4: Starting time */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingVertical: 15,
                    }}
                  >
                    <Text style={button_function.rowLabel}>Starting time</Text>
                    <View
                      style={{
                        backgroundColor: "#8AAFFF",
                        paddingVertical: 6,
                        paddingHorizontal: 15,
                        borderRadius: 8,
                      }}
                    >
                      <Text style={{ color: "#fff", fontSize: 12 }}>11:47</Text>
                    </View>
                  </View>
                </>
              )}
            </View>

            {/* Reception time */}
            <Card_re
              text="Reception time"
              value="30 Minute"
              onPress={() => navigation.navigate("reception_time")}
            />

            {/*Reception location */}
            <Card_re text="Reception location" value="OneFloor reception" />

            {/* Voice Mode */}
            {/* แก้ไขให้กดแล้วเปิด Modal Dialog ขึ้นมาให้เลือกแทนที่จะเปลี่ยนไปหน้าใหม่ */}
            <Card_re
              text="Voice Mode"
              value={voiceMode}
              onPress={() => setVoiceModeModalVisible(true)}
            />

            {/* Reception */}
            <TouchableOpacity
              style={[
                globalStyles.ios,
                globalStyles.android,
                button_function.list,
              ]}
              // ความจางของปุ่มเมื่อกด
              activeOpacity={0.7}
            >
              {/* Text left */}
              <View>
                <Text style={button_function.rowLabel}>Reception</Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#7F7F7F",
                  }}
                >
                  The message broadcast by the robot af...
                </Text>
              </View>

              {/* Text right */}
              <View style={button_function.rowRight}>
                <Text style={button_function.rowValue}>Yes</Text>
                <Ionicons name="chevron-forward" size={18} color="#AAAAAA" />
              </View>
            </TouchableOpacity>

            {/* Door */}
            <Card_re
              text="Door"
              value={doorMode}
              onPress={() => setDoorModalVisible(true)}
            />

            {/* Walkthrough routes */}
            <Card_re
              text="Notice setting"
              value={
                walkthrough_routes.length > 20
                  ? walkthrough_routes.substring(0, 20) + "..."
                  : walkthrough_routes
              }
              onPress={() =>
                navigation.navigate("walkthrough_routes", {
                  currentSelection: walkthrough_routes,
                  onSelect: updatewalkthrough_routes,
                })
              }
            />

            {/* Lead the Way */}
            <TouchableOpacity
              style={[
                globalStyles.ios,
                globalStyles.android,
                button_function.list,
              ]}
              // ความจางของปุ่มเมื่อกด
              activeOpacity={0.7}
            >
              {/* Text left */}
              <Text style={button_function.rowLabel}>Lead the Way</Text>
              {/* Text right */}
              <Switch
                value={leadTheWay}
                onValueChange={setLeadTheWay}
                trackColor={{ false: "#E0E0E0", true: "#8ae9a2ff" }}
                thumbColor={leadTheWay ? "#34C759" : "#FFFFFF"}
                ios_backgroundColor="#E0E0E0"
              />
            </TouchableOpacity>

            {/* Leading List */}
            <Card_re
              text="Leading List"
              value={
                leading_list.length > 20
                  ? leading_list.substring(0, 20) + "..."
                  : leading_list
              }
              onPress={() =>
                navigation.navigate("leading_list", {
                  currentSelection: leading_list,
                  onSelect: updateleading_list,
                })
              }
            />

            {/* Take a Picture */}
            <TouchableOpacity
              style={[
                globalStyles.ios,
                globalStyles.android,
                button_function.list,
              ]}
              // ความจางของปุ่มเมื่อกด
              activeOpacity={0.7}
            >
              {/* Text left */}
              <Text style={button_function.rowLabel}>Take a Picture</Text>
              {/* Text right */}
              <Switch
                value={takeAPicture}
                onValueChange={setTakeAPicture}
                trackColor={{ false: "#E0E0E0", true: "#8ae9a2ff" }}
                thumbColor={takeAPicture ? "#34C759" : "#FFFFFF"}
                ios_backgroundColor="#E0E0E0"
              />
            </TouchableOpacity>

            {/* Enable delivery during reception */}
            <TouchableOpacity
              style={[
                globalStyles.ios,
                globalStyles.android,
                button_function.list,
              ]}
              // ความจางของปุ่มเมื่อกด
              activeOpacity={0.7}
            >
              {/* Text left */}
              <Text style={button_function.rowLabel}>
                Enable delivery during reception
              </Text>
              {/* Text right */}
              <Switch
                value={enableDelivery}
                onValueChange={setEnableDelivery}
                trackColor={{ false: "#E0E0E0", true: "#8ae9a2ff" }}
                thumbColor={enableDelivery ? "#34C759" : "#FFFFFF"}
                ios_backgroundColor="#E0E0E0"
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>

      {/* Set off Button */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 10,
          backgroundColor: "#EEF2FF",
          paddingBottom: insets.bottom + 20,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.85}
          style={{ borderRadius: 30, overflow: "hidden" }}
        >
          <LinearGradient
            colors={["#2979FF", "#4AB0FF"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{
              height: 54,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 20,
                fontWeight: "600",
                letterSpacing: 0.5,
              }}
            >
              OK
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Voice Mode Selection Modal */}
      {/* เพิ่ม Modal Dialog แบบโปร่งใส (transparent) ขึ้นมาทับกลางหน้าจอ */}
      <Modal
        animationType="fade" // การปรากฏของ Modal แบบค่อยๆ จางขึ้น (Fade)
        transparent={true} // ตั้งค่าให้พื้นหลัง Modal โปร่งใส (เพื่อให้มองเห็น Overlay สีดำจางๆ ด้านหลัง)
        visible={isVoiceModeModalVisible} // เปิด/ปิด Modal ตามค่า State นี้
        onRequestClose={() => setVoiceModeModalVisible(false)} // รองรับการกดปุ่ม Back บน Android
      >
        {/* ส่วนของ Overlay: พื้นหลังสีดำจางๆ เพื่อขับให้ตัว Modal เด่นขึ้น และจัดตำแหน่งเนื้อหาไว้ตรงกลาง */}
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // สีดำความโปร่งแสง 50%
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* กล่องเนื้อหาหลัก (Modal Card) */}
          <View
            style={{
              width: "85%",
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              padding: 20,
              alignItems: "center",
              // การตั้งค่าเงา (Shadow) สำหรับ iOS และ Android
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            {/* หัวข้อของ Modal */}
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 15,
                color: "#333",
              }}
            >
              Voice Mode
            </Text>

            {/* รายการตัวเลือกโหมดต่างๆ */}
            {[
              {
                label: "Polite Chatting",
                desc: "The robot display the chat interface and turns politely to face the speaker",
              },
              {
                label: "Casual Chatting",
                desc: "The robot works and chats at the same time without popping out chat interface or turning around.",
              },
              { label: "No Chatting", desc: "Chat function disabled." },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  width: "100%",
                  paddingVertical: 15,
                  borderBottomWidth: index === 2 ? 0 : 1, // เส้นคั่นระหว่างรายการ (ยกเว้นรายการสุดท้าย)
                  borderBottomColor: "#F0F0F0",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                onPress={() => {
                  setVoiceMode(item.label); // เลือกโหมด
                  setVoiceModeModalVisible(false); // เลือกเสร็จแล้วปิด Modal ทันที
                }}
              >
                {/* ชื่อโหมดและคำอธิบาย */}
                <View style={{ flex: 1, paddingRight: 10 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      // ถ้าโหมดนี้ถูกเลือกอยู่ ให้เปลี่ยนเป็นสีฟ้าและทำตัวหนา
                      color: voiceMode === item.label ? "#2979FF" : "#333333ff",
                      fontWeight: voiceMode === item.label ? "600" : "400",
                    }}
                  >
                    {item.label}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#888",
                      marginTop: 4,
                      // ถ้าไม่ได้เลือก และยาวเกิน 30 ให้บีบความกว้างเพื่อให้มันขึ้นบรรทัดใหม่เอง
                      // หรือปล่อยให้ Flexbox จัดการตามปกติ
                    }}
                  >
                    {item.desc}
                  </Text>
                </View>
                {/* แสดงไอคอนเครื่องหมายถูก (Checkmark) เฉพาะรายการที่ยังไม่ถูกเลือกอยู่ */}
                {voiceMode !== item.label && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={24}
                    color="black"
                  />
                )}
                {/* แสดงไอคอนเครื่องหมายถูก (Checkmark) เฉพาะรายการที่ถูกเลือกอยู่ */}
                {voiceMode === item.label && (
                  <MaterialIcons
                    name="radio-button-checked"
                    size={24}
                    color="#2979FF"
                  />
                )}
              </TouchableOpacity>
            ))}

            {/* ปุ่มกดปิด Modal ด้านล่างสุด */}
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "#e4e4e4ff",
                paddingVertical: 10,
                paddingHorizontal: 30,
                borderRadius: 20,
              }}
              onPress={() => setVoiceModeModalVisible(false)} // ปิด Modal โดยไม่เปลี่ยนค่าอะไร
            >
              <Text style={{ color: "#333", fontSize: 16, fontWeight: "500" }}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Door Selection Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isDoorModalVisible}
        onRequestClose={() => setDoorModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "85%",
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              padding: 20,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 15,
                color: "#333",
              }}
            >
              Door
            </Text>

            {["Open Sesame!", "Door Open", "Door Closed"].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  width: "100%",
                  paddingVertical: 15,
                  borderBottomWidth: index === 2 ? 0 : 1,
                  borderBottomColor: "#F0F0F0",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                onPress={() => {
                  setDoorMode(item);
                  setDoorModalVisible(false);
                }}
              >
                <View style={{ flex: 1, paddingRight: 10 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: doorMode === item ? "#2979FF" : "#333333ff",
                      fontWeight: doorMode === item ? "600" : "400",
                    }}
                  >
                    {item}
                  </Text>
                </View>
                {doorMode !== item && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={24}
                    color="black"
                  />
                )}
                {doorMode === item && (
                  <MaterialIcons
                    name="radio-button-checked"
                    size={24}
                    color="#2979FF"
                  />
                )}
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "#e4e4e4ff",
                paddingVertical: 10,
                paddingHorizontal: 30,
                borderRadius: 20,
              }}
              onPress={() => setDoorModalVisible(false)}
            >
              <Text style={{ color: "#333", fontSize: 16, fontWeight: "500" }}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
