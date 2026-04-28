import { View, Text, StatusBar } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import Header_sub_functions from "../../../src/components/header_sub_functions";
import Card_check_front from "../../../src/components/card_check_front";
import Card_button_function from "../../../src/components/card_button_function";

export default function Mode_selection() {
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Mode selection" />

      {/* White Settings Card */}
      <View
        style={{
          flex: 1,
          marginTop: -20,
          paddingHorizontal: 16,
          rowGap: 20,
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
              paddingHorizontal: 16,
              paddingVertical: 16,
              alignItems: "center",
              shadowColor: "#5e76ffff",
              rowGap: 10,
            },
          ]}
        >
          <Card_check_front text="Hotel Daily Mode" />
          <Card_check_front text="Office Mode" />
        </View>
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              minHeight: 100,
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
          <Card_button_function
            text="Hotel Daily Mode"
            value="oneFloor reception"
          />
        </View>
      </View>
    </View>
  );
}
