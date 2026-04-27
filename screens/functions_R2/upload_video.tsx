import { View, Text, StatusBar } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/mystyles";
import Header_sub_functions from "../../components/header_sub_functions";
import UploadVideoCard from "../../components/card_button_function";

export default function Upload_video() {
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />
      {/* Blue Gradient Header */}
      <Header_sub_functions title="Upload Video" />

      {/* White Settings Card */}
      <View
        style={{
          flex: 1,
          marginTop: -20,
          paddingHorizontal: 16,
        }}
      >
        {/* card ที่ 1 */}
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              alignItems: "center",
              shadowColor: "#5e76ffff",
              marginBottom: 20,
              paddingVertical: 20,
              paddingHorizontal: 10,
              rowGap: 10,
            },
          ]}
        >
          <UploadVideoCard text="Playlist Management" value="" />
          <UploadVideoCard text="Playlist Group" value="" />
          <UploadVideoCard text="Playlist Group" value="" />
        </View>
      </View>
    </View>
  );
}
