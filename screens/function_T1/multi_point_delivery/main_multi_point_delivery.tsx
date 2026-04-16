import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { globalStyles, button_function } from "../../../styles/mystyles";
import Header_sub_functions from "../../../components/header_sub_functions";
import Card_button_function from "../../../components/card_button_function";

// สร้างตัวแปร Global แบบเรียบง่ายไว้นอก Component
// เพื่อให้ค่าที่เลือกยังคงอยู่แม้ว่าผู้ใช้จะกด Back ออกจากหน้านี้ไปแล้วกลับเข้ามาใหม่
let globalFetchReminderValue = "Your food has arrived. Please pick up in time";

export default function MultiPointDelivery() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const insets = useSafeAreaInsets();
  const [autoWork, setAutoWork] = useState(false);

  // สร้าง State สำหรับเก็บข้อความ Fetch reminder โดยดึงค่าเริ่มต้นมาจากตัวแปร Global
  const [fetchReminderValue, setFetchReminderValue] = useState(
    globalFetchReminderValue,
  );

  // ฟังก์ชันสำหรับอัปเดตทั้ง State แจ้งให้หน้าจอเปลี่ยน และอัปเดต Global เพื่อความจำ
  const updateFetchReminder = (value: string) => {
    globalFetchReminderValue = value; // จำไว้ใช้ครั้งหน้า
    setFetchReminderValue(value); // อัปเดตหน้าจอทันที
  };

  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Multi-Point Delivery" />

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
              minHeight: 100, // ✅ ขยายตามเนื้อหา
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              alignItems: "center",
              shadowColor: "#5e76ffff",
              paddingBottom: 20,
              paddingTop: 20,
            },
          ]}
        >
          {/* Standby point */}
          <TouchableOpacity
            onPress={() => navigation.navigate("standby_point" as never)}
            style={[button_function.list]}
            // ความจางของปุ่มเมื่อกด
            activeOpacity={0.7}
          >
            {/* Text left */}
            <Text style={button_function.rowLabel}>Standby point</Text>
            {/* Text right */}
            <View style={button_function.rowRight}>
              <Text style={button_function.rowValue}>Receptont</Text>
              <View
                style={{
                  backgroundColor: "#E8EEFF",
                  borderRadius: 12,
                  paddingHorizontal: 15,
                  paddingVertical: 2,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: "#3D7FFF",
                    fontWeight: "600",
                  }}
                >
                  +1
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#AAAAAA" />
            </View>
          </TouchableOpacity>

          {/* Commute time */}
          <TouchableOpacity
            style={[button_function.list]}
            // ความจางของปุ่มเมื่อกด
            activeOpacity={0.7}
          >
            {/* Text left */}
            <Text style={button_function.rowLabel}>Commute time</Text>
            {/* Text right */}
            <View style={button_function.rowRight}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#3D7FFF",
                  fontWeight: "500",
                }}
              >
                09:00 - 12:00
              </Text>
            </View>
          </TouchableOpacity>

          {/* Go to work automatically */}
          <View style={[button_function.list]}>
            <Text style={button_function.rowLabel}>
              Go to work automatically
            </Text>
            <Switch
              value={autoWork}
              onValueChange={setAutoWork}
              trackColor={{ false: "#E0E0E0", true: "#8ae9a2ff" }}
              thumbColor={autoWork ? "#34C759" : "#FFFFFF"}
              ios_backgroundColor="#E0E0E0"
            />
          </View>

          {/* Row: Fetch reminder */}
          <Card_button_function
            text="Fetch reminder"
            // แสดงเฉพาะในหน้า UI หากประโยคยาวเกินไปให้ตัดสายอักขระโดยใช้ substring และใส่ ... แทนที่ข้อความที่ยาวล้นเกินไป
            value={
              fetchReminderValue.length > 20
                ? fetchReminderValue.substring(0, 20) + "..."
                : fetchReminderValue
            }
            // เมื่อกดเข้าหน้า fetch_reminder จะส่งพารามิเตอร์ currentSelection พร้อมกับฟังก์ชัน onSelect ไปด้วย พอทำงานเสร็จก็จะส่งค่ามาเซ็ตใน State ได้เลย
            onPress={() =>
              navigation.navigate(
                "fetch_reminder" as never,
                {
                  currentSelection: fetchReminderValue,
                  onSelect: updateFetchReminder,
                } as never,
              )
            }
          />

          {/* Row: Notice setting */}
          <Card_button_function text="Notice setting" value="Only once" />

          {/* Row: Vice mode */}
          <Card_button_function text="Vice mode" value="NO chatting" />
        </View>
      </View>

      {/* Set off Button */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 16,
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
                fontSize: 18,
                fontWeight: "600",
                letterSpacing: 0.5,
              }}
            >
              Set off
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
