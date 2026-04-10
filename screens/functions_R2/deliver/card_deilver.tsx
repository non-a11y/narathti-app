import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyles } from "../../../styles/mystyles";

interface CardDeilverProps {
  text: string;
}

export default function card_deilver({ text }: CardDeilverProps) {
  return (
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
  );
}
