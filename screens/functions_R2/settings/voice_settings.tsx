import { View, Text, StatusBar } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import Header_sub_functions from "../../../components/header_sub_functions";
import Card_set from "../../../components/card_button_function";

export default function Voice_settings() {
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Volume Settings" />

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
          <Card_set text="rouse" value="XunFei" />
          <Card_set text="Enhanced voice service" value="Chat GPT" />
          <Card_set text="Speech recognition service" value="Google" />
          <Card_set text="TTS" value="Google TTS" />
          <Card_set text="pace" value="1.4" />
          <Card_set text="timbre" value="en-US-Standard-h" />
        </View>
      </View>
    </View>
  );
}
