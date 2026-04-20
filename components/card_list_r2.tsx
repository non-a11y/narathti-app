import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { button_function } from "../styles/mystyles";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";

interface card_list_r2Props {
  text: string;
  selected?: boolean;
  onPress?: () => void;
}

export default function card_list_r2({
  text,
  selected,
  onPress,
}: card_list_r2Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        button_function.list,
        {
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
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
        <Text>{text}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          columnGap: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "#9C93FF",
            borderRadius: 20,
            padding: 10,
          }}
        >
          <FontAwesome6 name="edit" size={18} color="white" />
        </View>
        <View
          style={{
            backgroundColor: "#FF8E8E",
            borderRadius: 20,
            padding: 10,
          }}
        >
          <MaterialCommunityIcons
            name="delete-outline"
            size={20}
            color="white"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
