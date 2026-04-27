import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { button_function } from "../styles/mystyles";

interface card_choice_detailsProps {
  text: string;
  details: string;
  selected?: boolean;
  onPress?: () => void;
}

export default function card_select_details({
  text,
  details,
  selected,
  onPress,
}: card_choice_detailsProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        button_function.list,
        {
          height: "auto",
          minHeight: 60,
          paddingVertical: 10,
        },
      ]}
    >
      <View
        style={{
          flex: 1,
          paddingRight: 10,
        }}
      >
        {/* text */}
        {text.length > 30 ? (
          <Text style={button_function.text_left}>
            {text.substring(0, 30)}...
          </Text>
        ) : (
          <Text style={button_function.text_left}>{text}</Text>
        )}

        {/* details ตัวอักษรยาวเกิน 30 ให้ตัดขึ้นบรรทัดใหม่ */}
        {details.length > 45 ? (
          <Text
            style={{
              fontSize: 12,
              color: "#555555",
              fontWeight: "400",
            }}
          >
            {details.match(/.{1,45}/g)?.join("\n")}
          </Text>
        ) : (
          <Text
            style={{
              fontSize: 12,
              color: "#555555",
              fontWeight: "400",
            }}
          >
            {details}
          </Text>
        )}
      </View>

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
