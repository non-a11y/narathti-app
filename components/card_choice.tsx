import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { button_function } from "../styles/mystyles";

interface card_choiceProps {
  text: string;
  selected?: boolean;
  onPress?: () => void;
}

export default function card_choice({
  text,
  selected,
  onPress,
}: card_choiceProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        //globalStyles.ios,
        //globalStyles.android,
        button_function.list,
      ]}
    >
      {/* Text left */}
      {text.length > 30 ? (
        <Text style={button_function.rowLabel}>{text.substring(0, 30)}...</Text>
      ) : (
        <Text style={button_function.rowLabel}>{text}</Text>
      )}

      {/* วงกลมตัวเลือก right  */}
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          borderWidth: selected ? 0 : 2,
          borderColor: selected ? "transparent" : "#AAAAAA",
          backgroundColor: selected ? "#3D7FFF" : "transparent",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {selected && (
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#FFFFFF",
            }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
