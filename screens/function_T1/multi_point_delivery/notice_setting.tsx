import { StatusBar, View } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../../styles/mystyles";
import Header_sub_functions from "../../../components/header_sub_functions";
import Card_choice from "../../../components/card_choice";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function notice_setting() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const currentSelection =
    route.params?.currentSelection || "Intermittent broadcast";

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
      <Header_sub_functions title="Notice setting" />
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
            text="Intermittent broadcast"
            selected={selectedItem === "Intermittent broadcast"}
            onPress={() => handleSelect("Intermittent broadcast")}
          />
          <Card_choice
            text="Do not broadcast"
            selected={selectedItem === "Do not broadcast"}
            onPress={() => handleSelect("Do not broadcast")}
          />
          <Card_choice
            text="Only once"
            selected={selectedItem === "Only once"}
            onPress={() => handleSelect("Only once")}
          />
        </View>
      </View>
    </View>
  );
}
