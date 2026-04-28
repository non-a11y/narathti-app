import { View, StatusBar } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import Header_sub_functions from "../../../src/components/header_sub_functions";
import Card_select from "../../../src/components/card_select";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Greeting_words() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  // นำค่า currentSelection ที่ส่งถูกส่งต่อมาจากหน้า MultiPointDelivery มาใช้เพื่อเช็คว่าประโยคล่าสุดคือข้อไหน
  const currentSelection = route.params?.currentSelection || "None";

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
      <Header_sub_functions title="Greeting words" />
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
          <Card_select
            text="None"
            selected={selectedItem === "None"}
            onPress={() => handleSelect("None")}
          />
          <Card_select
            text="Welcome"
            selected={selectedItem === "Welcome"}
            onPress={() => handleSelect("Welcome")}
          />
          <Card_select
            text="I am your delivery robot joy. you can say to me Hi joy. Come and play with me!"
            selected={
              selectedItem ===
              "I am your delivery robot joy. you can say to me Hi joy. Come and play with me!"
            }
            onPress={() =>
              handleSelect(
                "I am your delivery robot joy. you can say to me Hi joy. Come and play with me!",
              )
            }
          />
        </View>
      </View>
    </View>
  );
}
