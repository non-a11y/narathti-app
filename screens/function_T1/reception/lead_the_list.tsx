import { View, Text, StatusBar } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import Header_sub_functions from "../../../components/header_sub_functions";
import Card_choice_details from "../../../components/card_choice_details";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";

export default function lead_the_list() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  // นำค่า currentSelection ที่ส่งถูกส่งต่อมาจากหน้า MultiPointDelivery มาใช้เพื่อเช็คว่าประโยคล่าสุดคือข้อไหน
  const currentSelection = route.params?.currentSelection || "All locations";

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
      <Header_sub_functions title="Please select leading route" />
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
          <Card_choice_details
            text="All locations"
            details="4 leading points"
            selected={selectedItem === "All locations"}
            onPress={() => handleSelect("All locations")}
          />
          <Card_choice_details
            text="Test"
            details="2 leading points"
            selected={selectedItem === "Test"}
            onPress={() => handleSelect("Test")}
          />
        </View>
      </View>
    </View>
  );
}
