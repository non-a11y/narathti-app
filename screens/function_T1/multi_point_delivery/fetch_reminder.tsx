import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../../styles/mystyles";
import Header_sub_functions from "../../../src/components/header_sub_functions";
import Card_select from "../../../src/components/card_select";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Fetch_reminder() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  // นำค่า currentSelection ที่ส่งถูกส่งต่อมาจากหน้า MultiPointDelivery มาใช้เพื่อเช็คว่าประโยคล่าสุดคือข้อไหน
  const currentSelection =
    route.params?.currentSelection ||
    "Your food has arrived. Please pick up in time";

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
      <Header_sub_functions title="Fetch reminder" />

      {/* White Settings Card */}
      <View
        style={{
          flex: 1,
          marginTop: -20,
          paddingHorizontal: 16,
        }}
      >
        {/* body */}
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
              paddingHorizontal: 10,
              paddingVertical: 20,
              rowGap: 10,
            },
          ]}
        >
          {/* card */}
          <Card_select
            text="Your food has arrived. Please pick up in time"
            selected={
              selectedItem === "Your food has arrived. Please pick up in time"
            }
            onPress={() =>
              handleSelect("Your food has arrived. Please pick up in time")
            }
          />
          <Card_select
            text="Dear #location# guest, your..."
            selected={selectedItem === "Dear #location# guest, your..."}
            onPress={() => handleSelect("Dear #location# guest, your...")}
          />
          <Card_select
            text="Go to work automatically"
            selected={selectedItem === "Go to work automatically"}
            onPress={() => handleSelect("Go to work automatically")}
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
