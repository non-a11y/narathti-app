import { View, Text, StatusBar } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import Header_sub_functions from "../../../src/components/header_sub_functions";
import Card_check_front from "../../../src/components/card_check_front";

export default function Voice_list() {
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Voice List" />

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
              alignItems: "center",
              shadowColor: "#5e76ffff",
              marginBottom: 20,
              paddingHorizontal: 10,
              paddingVertical: 20,
              rowGap: 10,
            },
          ]}
        >
          {/*  */}
          <Card_check_front text="None" />
          <Card_check_front text="Welcome" />
          <Card_check_front text="I'm Joy, a delivery robot. You can say to me, Come and play with me, Hi Joy!" />
          <Card_check_front text="Joy will now walk you through this journey. Followme, please!" />
          <Card_check_front text="Welcome to Novotel Phuket City Phokeethra" />
        </View>
      </View>
    </View>
  );
}
