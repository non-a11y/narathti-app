import { View, Text, StatusBar } from "react-native";
import React from "react";
import { globalStyles } from "../../../../styles/mystyles";
import Header_sub_functions from "../../../../components/header_sub_functions";

import Crad_select from "./crad_select";

const data = [
  { id: 1, name: "Route 1 - Route 2 - Route 3 - Route 4 - Route 5" },
  { id: 2, name: "Route 2 - Route 3" },
  { id: 3, name: "Route 3 - Route 4" },
];

export default function Select_route() {
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Select Route" />

      {/* White Settings Card */}
      <View
        style={{
          flex: 1,
          marginTop: -20,
          paddingHorizontal: 16,
        }}
      >
        {/* body */}
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              minHeight: 100, // ✅ ขยายตามเนื้อหา
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              alignItems: "center",
              shadowColor: "#5e76ffff",
              paddingVertical: 20,
              paddingHorizontal: 10,
              rowGap: 10,
            },
          ]}
        >
          {data.map((item) => (
            <Crad_select key={item.id} id={item.id} name={item.name} />
          ))}
        </View>
      </View>
    </View>
  );
}
