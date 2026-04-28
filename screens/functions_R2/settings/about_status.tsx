import { View, Text, StatusBar } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import Header_sub_functions from "../../../src/components/header_sub_functions";

export default function About_status() {
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="About status" />

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
              //alignItems: "center",
              shadowColor: "#5e76ffff",
              //marginBottom: 20,
            },
          ]}
        >
          <Text>No .: HR1381</Text>
          <Text>Serial number:743206c6484330ec8524fbc7a0049f20</Text>
          <Text>System version:5.5.7.05-release</Text>
          <Text>Voice version number:2.3.13</Text>
          <Text>Emergency stop status:On</Text>
          <Text>Battery Level:96%</Text>
          <Text>4G status: On</Text>
          <Text>4G address:10.9.1.241</Text>
          <Text>MAC address:9c:b8:b4:87:0f:5a</Text>
        </View>
      </View>
    </View>
  );
}
