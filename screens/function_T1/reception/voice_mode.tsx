import { View, Text, StatusBar } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import Header_sub_functions from "../../../src/components/header_sub_functions";
import Card_select_details from "../../../src/components/card_select_details";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";

export default function Voice_mode() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const currentSelection =
    route.params?.currentSelection || "Chat while working";

  // สร้าง State สำหรับเก็บตัวเลือกปัจจุบัน โดยใช้ค่าที่ถูกส่งมาจากหน้าหลัก (currentSelection) เป็นค่า Initial State ให้วงกลมไปอยู่ที่ตัวเลือกล่าสุดเสมอ
  const [selectedItem, setSelectedItem] = useState(currentSelection);

  // ฟังก์ชันเมื่อกดเลือกตัวเลือก จะส่งค่ากลับไปหน้าหลักและย้อนกลับทันที
  const handleSelect = (item: string) => {
    setSelectedItem(item);
    if (route.params?.onSelect) {
      route.params.onSelect(item);
    }
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
      <Header_sub_functions title="Voice mode" />

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
              paddingVertical: 20,
              paddingHorizontal: 10,
              rowGap: 10,
            },
          ]}
        >
          <Card_select_details
            text="Chat while working"
            details="The robot works and chats at the same time without popping out chat interface or turning around."
            selected={selectedItem === "Chat while working"}
            onPress={() => handleSelect("Chat while working")}
          />
          <Card_select_details
            text="No chatting"
            details="Chat function disabled"
            selected={selectedItem === "No chatting"}
            onPress={() => handleSelect("No chatting")}
          />
        </View>
      </View>
    </View>
  );
}
