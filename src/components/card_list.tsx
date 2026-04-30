import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/mystyles";
import { LinearGradient } from "expo-linear-gradient";

interface card_listProps {
  text: string;
  // เพิ่ม onPress เพื่อรองรับเหตุการณ์การกดเลือกจุดจากรายการ
  onPress?: () => void;
  // เพิ่ม isSelected เพื่อระบุว่ารายการนี้ถูกเลือกอยู่หรือไม่
  isSelected?: boolean;
}

export default function card_list({ text, onPress, isSelected }: card_listProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <LinearGradient
        colors={isSelected ? ["#2979FF", "#4AB0FF"] : ["#FFFFFF", "#FFFFFF"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={[
          globalStyles.ios,
          globalStyles.android,
          {
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 15,
            shadowColor: isSelected ? "#4AB0FF" : "#00000020",
            borderWidth: 1.5,
            borderColor: isSelected ? "transparent" : "#E0E0E0",
          },
        ]}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: isSelected ? "#FFFFFF" : "#8A8A8A",
          }}
        >
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
