import { View, Text, StatusBar, Switch } from "react-native";
import React from "react";
import { globalStyles, button_function } from "../../../styles/mystyles";
import Header_sub_functions from "../../../components/header_sub_functions";
import Card_on_off from "../../../components/card_on-off";

export default function password_protection() {
  const [autoWork, setAutoWork] = React.useState(false);
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Password protection" />

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
              paddingHorizontal: 10,
              paddingVertical: 20,
              alignItems: "center",
              shadowColor: "#5e76ffff",
              //marginBottom: 20,
              rowGap : 10,
            },
          ]}
        >
          <Card_on_off text="Deliver goods"  />
          <Card_on_off text="Cruise Show"  />
          <Card_on_off text="Lead the Way"  />
          <Card_on_off text="Reception"  />
        </View>
      </View>
    </View>
  );
}
