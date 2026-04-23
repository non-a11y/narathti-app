import { View, Text, StatusBar } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import Header_sub_functions from "../../../components/header_sub_functions";
import Card_text_des from "../../../components/card_text_des";
import Card_on_off from "../../../components/card_on-off";
import Card_check_front from "../../../components/card_check_front";

export default function battery_level() {
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Battery Level" />

      {/* White Settings Card */}
      <View
        style={{
          flex: 1,
          marginTop: -20,
          paddingHorizontal: 16,
        }}
      >
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              minHeight: 200,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              paddingHorizontal: 16,
              paddingVertical: 16,
              alignItems: "center",
              shadowColor: "#5e76ffff",
              rowGap: 10,
            },
          ]}
        >
          <Card_text_des text="Battery Level" das="100%" />
          <Card_text_des text="Battery Status" das="Not Charging" />
          <Card_text_des text="Lead the Way" das="5.0" />
          <Card_text_des text="Automatic recharge" das="" />
          <Card_on_off text="Disable automatic recharge" />
          {/* Voice mode on the way to charging */}
          <Text
            style={{
              width: "100%",
              textAlign: "left",
              fontSize: 14,
              color: "#7F7F7F",
              fontWeight: "400",
            }}
          >
            Voice mode on the way to charging
          </Text>
          <Card_check_front text="Chat while Working" />
          <Card_check_front text="No Chatting" />
        </View>
      </View>
    </View>
  );
}
