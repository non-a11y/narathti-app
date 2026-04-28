import { View, Text } from "react-native";
import React from "react";
import { button_function } from "../../styles/mystyles";

export type CardTextDesProps = {
  text: string;
  das: string;
};

export default function card_text_des({ text, das }: CardTextDesProps) {
  return (
    <View style={[button_function.list]}>
      <Text>{text}</Text>
      <Text>{das}</Text>
    </View>
  );
}
