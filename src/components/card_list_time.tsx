import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface Card_list_timeProps {
  title: string;
}

export default function Card_list_time({ title }: Card_list_timeProps) {
  return (
    <TouchableOpacity
    activeOpacity={0.85}
      style={{
        backgroundColor: "#ffffffff",
        width: "90%",
        borderRadius: 30,
        height: 50,
        marginTop: 10,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        // เส้นขอบ
        borderWidth: 2,
        borderColor: "#78bef8ff",
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#000000ff",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
