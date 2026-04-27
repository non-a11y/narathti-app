import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

export default function Card_select({ text }: { text: string }) {
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
          //marginTop: 10,
          shadowColor: "#4AB0FF",
          backgroundColor: "#ffffffff",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative", // ทำให้สามารถใช้ absolute ได้
        },
      ]}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: "#FFFFFF",
        }}
      >
        {text}
      </Text>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginInline: 10,
          columnGap: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#FFFFFF",
          }}
        >
          0 S
        </Text>
        <AntDesign name="edit" size={16} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
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
