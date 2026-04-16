import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../../styles/mystyles";
import Header_sub_functions from "../../../components/header_sub_functions";
import Card_choice from "../../../components/card_choice";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function fetch_reminder() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  // นำค่า currentSelection ที่ส่งถูกส่งต่อมาจากหน้า MultiPointDelivery มาใช้เพื่อเช็คว่าประโยคล่าสุดคือข้อไหน
  const currentSelection =
    route.params?.currentSelection ||
    "Your food has arrived. Please pick up in time";

  // สร้าง State สำหรับเก็บตัวเลือกปัจจุบัน โดยใช้ค่าที่ถูกส่งมาจากหน้าหลัก (currentSelection) เป็นค่า Initial State ให้วงกลมไปอยู่ที่ตัวเลือกล่าสุดเสมอ
  const [selectedItem, setSelectedItem] = useState(currentSelection);

  // ฟังก์ชันเมื่อกดปุ่ม Add ด้านล่าง จะดึงฟังก์ชัน onSelect จากหน้าหลักมาใช้และย้อนกลับหน้าเดิม
  const handleAdd = () => {
    // โหลดฟังก์ชัน onSelect จากหน้าแม่ แล้วโยนค่าข้อความปัจจุบันลงไปอัปเดต State ที่ชี้อยู่โดยตรง
    if (route.params?.onSelect) {
      route.params.onSelect(selectedItem);
    }
    // ใช้สั่งถอยหลังธรรมดา ซึ่งไม่มีทางเพี้ยน 100%
    navigation.goBack();
  };

  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />
      {/* Blue Gradient Header */}
      <Header_sub_functions title="Fetch reminder" />
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
          <Card_choice
            text="Your food has arrived. Please pick up in time"
            selected={
              selectedItem === "Your food has arrived. Please pick up in time"
            }
            onPress={() =>
              setSelectedItem("Your food has arrived. Please pick up in time")
            }
          />
          <Card_choice
            text="Dear #location# guest, your..."
            selected={selectedItem === "Dear #location# guest, your..."}
            onPress={() => setSelectedItem("Dear #location# guest, your...")}
          />
          <Card_choice
            text="Go to work automatically"
            selected={selectedItem === "Go to work automatically"}
            onPress={() => setSelectedItem("Go to work automatically")}
          />
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
          onPress={handleAdd}
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
              Add
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
