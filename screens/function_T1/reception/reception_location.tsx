import { View, Text, StatusBar } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Card_list from "../../../src/components/card_list";
import Header_sub_functions from "../../../src/components/header_sub_functions";

export default function Reception_location() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="" />

      {/* White Settings Card */}
      <View
        style={{
          flex: 1,
          marginTop: -20,
          paddingHorizontal: 16,
        }}
      >
        {/* body card */}
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              flex: 1,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              shadowColor: "#5e76ffff",
              marginBottom: 80 + Math.max(insets.bottom, 0),
              paddingHorizontal: 10,
              paddingVertical: 20,
              rowGap: 10, // ระยะห่างระหว่างแถว
            },
          ]}
        >
          {/* header */}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Tsn01-1</Text>

            {/* Button */}
            <View
              style={{
                backgroundColor: "#EAF2FF",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 120,
                borderWidth: 1,
                borderColor: "#508EFF",
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "500" }}>Tsn001</Text>
            </View>
          </View>

          {/* body */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "center",
              columnGap: 10,
            }}
          >
            <Card_list text="Lobby001" />
            <Card_list text="metting room" />
          </View>
        </View>
      </View>
    </View>
  );
}
