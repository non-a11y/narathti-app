import { View, Text } from "react-native";
import React from "react";
import { button_function } from "../styles/mystyles";
import Toggle_switch from "./toggle_switch"; // นำเข้า Toggle_switch component

export default function Card_on_off({ text }: { text: string }) {
  return (
    // แถวที่มีข้อความซ้าย และ toggle ขวา
    <View style={[button_function.list]}>
      {/* ข้อความ label ฝั่งซ้าย */}
      <Text style={button_function.text_left}>{text}</Text>

      {/* Toggle ฝั่งขวา — ใช้ Toggle_switch component แยกต่างหาก */}
      <Toggle_switch />
    </View>
  );
}
