import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles, button_function } from "../../../styles/mystyles";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Card_list_r2 from "../../../components/card_list_r2";

export default function walkthrough_routes() {
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

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />
      {/* Blue Gradient Header */}
      <LinearGradient
        colors={["#5B9BFF", "#3D7FFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingBottom: 40,
          paddingTop: insets.top + 12,
        }}
      >
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} // ขยายพื้นที่กดออกไปรอบๆ
          delayPressIn={0} // ลด delay ก่อนรับ input เป็น 0
          activeOpacity={0.7}
        >
          <Ionicons
            name="chevron-back-circle-outline"
            size={36}
            color="white"
          />
        </TouchableOpacity>

        {/* Title */}
        <Text
          style={{
            // flex: 1 เต็มพื้นที่
            flex: 1,
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: 18,
            fontWeight: "600",
            marginRight: 36,
          }}
        >
          Please Select an explanation route
        </Text>
      </LinearGradient>

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
              paddingBottom: 10,
              paddingTop: 20,
              paddingHorizontal: 10,
            },
          ]}
        >
          <Card_list_r2
            text="No Walkthrough"
            selected={selectedItem === "No Walkthrough"}
            onPress={() => handleSelect("No Walkthrough")}
          />

          <Card_list_r2
            text="Test"
            selected={selectedItem === "Test"}
            onPress={() => handleSelect("Test")}
          />
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
              Add
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
