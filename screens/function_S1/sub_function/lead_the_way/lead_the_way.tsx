import { View, StatusBar, FlatList } from "react-native";
import React from "react";
import { globalStyles } from "../../../../styles/mystyles";
import Header_sub_functions from "../../../../src/components/header_sub_functions";
import Card_picture from "./card_picture";

export type all_sub_function = {
  reception: undefined;
  meeting_room: undefined;
  office: undefined;
};

const data = [
  { id: "1", text: "reception", screen: "reception" },
  { id: "2", text: "meeting_room", screen: "meeting_room" },
  { id: "3", text: "office", screen: "office" },
];

export default function Lead_the_way() {
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="All locations" />

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
              minHeight: 200, // กำหนดความสูงสูงสุด
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              alignItems: "center",
              shadowColor: "#5e76ffff",
              marginBottom: 20,
            },
          ]}
        >
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={{
              paddingHorizontal: 16, // ปรับให้สมดุลกับ padding ด้านนอก
              paddingTop: 30,
              paddingBottom: 20,
            }}
            columnWrapperStyle={{
              justifyContent: "space-between", // ใช้ space-between เพื่อให้ชิดซ้ายขวาพอดี
              marginBottom: 20,
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Card_picture item={item} />}
          />
        </View>
      </View>
    </View>
  );
}
