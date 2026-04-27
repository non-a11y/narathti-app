import { View, Text } from "react-native";
import React from "react";
import { button_function } from "../../../../styles/mystyles";
import { MaterialIcons } from "@expo/vector-icons";

interface crad_selectProps {
  id: number;
  name: string;
}

export default function Crad_select({ id, name }: crad_selectProps) {
  return (
    <View style={[button_function.list]}>
      {/* Right */}
      <View style={[button_function.box_right]}>
        <Text>{id}</Text>
        <Text>{name.length > 40 ? name.substring(0, 40) + "..." : name}</Text>
      </View>
      {/* Left */}
      <View>
        {/* button delete */}
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: "#FF8E8E",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons name="delete" size={18} color="white" />
        </View>
      </View>
    </View>
  );
}
