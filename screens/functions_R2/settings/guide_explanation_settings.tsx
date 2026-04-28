import { View, Text, StatusBar } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import Header_sub_functions from "../../../src/components/header_sub_functions";
import Card_text from "../../../src/components/card_button_function";
import Card_check_front from "../../../src/components/card_check_front";

export default function Guide_explanation_settings() {
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Guide explanation settings" />

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
          <Text
            style={{
              width: "100%",
              textAlign: "left",
              fontSize: 16,
              color: "#7F7F7F",
              fontWeight: "400",
            }}
          >
            Walkthrough Route settings
          </Text>
          <Card_text text="Delivery settings" value="Test" />
          <Card_text text="Cruise Show" value="Test" />
          <Card_text text="Reception" value="Test" />
          <Text
            style={{
              width: "100%",
              textAlign: "left",
              fontSize: 16,
              color: "#7F7F7F",
              fontWeight: "400",
            }}
          >
            Voice Mode during Walkthrough
          </Text>
          <Card_check_front text="Polite Chatting" />
          <Card_check_front text="Chat while Working" />
          <Card_check_front text="No Chatting" />
        </View>
      </View>
    </View>
  );
}
