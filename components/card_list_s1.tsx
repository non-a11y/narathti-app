import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface Card_list_s1Props {
  title: string;
  subtitle: string;
}

export default function Card_list_s1({ title, subtitle }: Card_list_s1Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={{
        backgroundColor: "#ffffffff",
        width: "90%",
        borderRadius: 30,
        height: 50,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        // เส้นขอบ
        borderWidth: 2,
        borderColor: "#78bef8ff",
      }}
    >
      {/* reception — อยู่กลางจริงๆ โดยใช้ position absolute */}
      <Text
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 16,
          fontWeight: "bold",
          color: "#000000ff",
        }}
      >
        {title}
      </Text>

      {/* MA-1 — ชิดขวา */}
      <Text style={{ marginLeft: "auto", fontSize: 12, fontWeight: "400", color: "#000000ff" }}>{subtitle}</Text>
    </TouchableOpacity>
  );
}
