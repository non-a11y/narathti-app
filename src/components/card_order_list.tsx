import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/mystyles";

export default function card_order_list() {
  return (
    <View
      style={[
        globalStyles.ios,
        globalStyles.android,
        {
          minHeight: 100,
          backgroundColor: "#FFFFFF",
          borderRadius: 20,
          overflow: "hidden", // กันไม่ให้เนื้อหาทะลุขอบที่โค้งมน
          shadowColor: "#5e76ffff",
          paddingHorizontal: 20,
          paddingVertical: 10,
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: "#3d7FFF",
          }}
        >
          Manual Delivery
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            color: "#000000ff",
          }}
        >
          Picup and Delivery
        </Text>
      </View>
      {/* เส้นคั่น */}
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#c7c7c7ff",
          marginVertical: 10,
        }}
      />
      <View style={{ rowGap: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={detail.text_left}>Pickup Address</Text>
          <Text style={detail.text_right}>ตำแหน่ง ที่ 1</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={detail.text_left}>Delivery Address</Text>
          <Text style={detail.text_right}>ตำแหน่ง ที่ 2</Text>
        </View>
      </View>
      {/* เส้นคั่น */}
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#c7c7c7ff",
          marginVertical: 10,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={detail.text_left}>Ordered on</Text>
        <Text style={detail.text_right}>วันที่</Text>
      </View>
    </View>
  );
}

export const detail = StyleSheet.create({
  text_left: {
    fontSize: 16,
    fontWeight: "600",
  },
  text_right: {
    fontSize: 14,
    fontWeight: "400",
  },
});
