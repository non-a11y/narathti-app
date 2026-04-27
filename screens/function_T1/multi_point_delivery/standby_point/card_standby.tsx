import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../../../../styles/mystyles";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";

// เพิ่มการรับค่า index (เพื่อแสดงลำดับตัวเลข) และ onDelete (เพื่อเรียกใช้ตอนลบจุดนี้)
export default function Card_standby({
  text,
  index,
  onDelete,
}: {
  text: string;
  index: number;
  onDelete: () => void;
}) {
  return (
    <LinearGradient
      colors={["#76CFFF", "#008CFF"]}
      //start={{ x: 0, y: 0.5 }}
      //end={{ x: 1, y: 0.5 }}
      style={[
        globalStyles.ios,
        globalStyles.android,
        {
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 10,
          shadowColor: "#4AB0FF",
          backgroundColor: "#ffffffff",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative", // ทำให้สามารถใช้ absolute ได้
          marginLeft: 10,
        },
      ]}
    >
      {/* ตัวเลข item */}
      <View
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 999,
          width: 18,
          height: 18,
          justifyContent: "center",
          alignItems: "center",
          marginRight: 10,
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: "500", color: "#008CFF" }}>
          {/* เอา index + 1 เพื่อให้เริ่มนับจาก 1 แทยที่จะเป็น 0 */}
          {index + 1}
        </Text>
      </View>

      {/* ข้อมควม */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: "#FFFFFF",
        }}
      >
        {text}
      </Text>

      {/* ปุ่มลบ */}
      <TouchableOpacity
        onPress={onDelete} // เมื่อถูกกด จะแจ้งให้คอมโพเนนต์แม่ (standby_point.tsx) ทราบเพื่อลบจุดนี้ออก
        style={{
          position: "absolute", // 👈 ลอยออกจาก flow
          top: -6, // 👈 ขยับขึ้นเล็กน้อยให้ล้นขอบ
          right: -6, // 👈 ขยับออกทางขวาให้ล้นขอบ
          backgroundColor: "#ff8d8dff",
          borderRadius: 999, // ทำให้เป็นวงกลม
          width: 18,
          height: 18,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Entypo name="cross" size={12} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );
}
