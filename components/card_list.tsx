import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../styles/mystyles";
import { LinearGradient } from "expo-linear-gradient";

interface card_listProps {
  text: string;
  // เพิ่ม onPress เพื่อรองรับเหตุการณ์การกดเลือกจุดจากรายการ
  onPress?: () => void;
}

export default function card_list({ text, onPress }: card_listProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <LinearGradient
        colors={["#76CFFF", "#008CFF"]}
        style={[
          globalStyles.ios,
          globalStyles.android,
          {
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 10,
            shadowColor: "#4AB0FF",
            backgroundColor: "#ffffffff",
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
      </LinearGradient>
    </TouchableOpacity>
  );
}
