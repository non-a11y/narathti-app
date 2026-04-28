import { View, Text, StatusBar } from "react-native";
import React from "react";
import { globalStyles, button_function } from "../../../styles/mystyles";
import Header_sub_functions from "../../../src/components/header_sub_functions";
import Card_time from "../../../src/components/card_check_front";

export default function Reception_time() {
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Timing Settings" />

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
              minHeight: 100,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              alignItems: "center",
              shadowColor: "#5e76ffff",
              marginBottom: 20,
              paddingTop: 20,
              rowGap: 10,
              paddingHorizontal: 10,
              paddingBottom: 20,
            },
          ]}
        >
          <Card_time text="30 Minute" />
          <Card_time text="1 Hour" />
          <Card_time text="2 Hour" />
        </View>
      </View>
    </View>
  );
}
