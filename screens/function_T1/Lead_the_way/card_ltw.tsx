import { Text } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import { LinearGradient } from "expo-linear-gradient";

interface CardLTWProps {
  text: string;
}

export default function card_ltw({ text }: CardLTWProps) {
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
          marginTop: 10,
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
