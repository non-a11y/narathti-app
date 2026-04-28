import { View, Text } from "react-native";
import React from "react";
import { button_function } from "../../styles/mystyles";

interface card_timeProps {
  text: string;
  selected?: boolean;
  onPress?: () => void;
}

export default function Card_check_front({
  text,
  selected,
  onPress,
}: card_timeProps) {
  return (
    <View
      style={[
        {
          width: "100%",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 20,
          borderRadius: 50,
          // เส้นขอบ
          borderWidth: 2,
          borderColor: "#78bef8ff",
          columnGap: 10,
        },
      ]}
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

      {/* test ยาวเกิน 30 ตัวอักษร ขึ้นบรรทัดใหม่ */}
      {text.length > 45 ? (
        <Text style={{ fontSize: 14, color: "#000000", fontWeight: "500" }}>
          {text.match(/.{1,44}/g)?.join("\n")}
        </Text>
      ) : (
        <Text style={{ fontSize: 14, color: "#000000", fontWeight: "500" }}>
          {text}
        </Text>
      )}
    </View>
  );
}
