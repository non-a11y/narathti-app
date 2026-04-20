import { View, Text, StatusBar, TextInput } from "react-native";
import React from "react";
import Header_sub_functions from "../../../components/header_sub_functions";
import { globalStyles } from "../../../styles/mystyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import CardDeilver from "../../../components/card_list";

export default function reception_location() {
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
          marginTop: -60,
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            backgroundColor: "#EAF2FF",
            alignSelf: "flex-end",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "#508EFF",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "#0060FE",
            }}
          >
            Custom Sart
          </Text>
        </View>
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              flex: 1,
              backgroundColor: "#ffffffff",
              borderRadius: 20,
              overflow: "hidden",
              //alignItems: "center",
              shadowColor: "#5e76ffff",
              marginBottom: 50 + Math.max(insets.bottom, 0),
            },
          ]}
        >
          {/* search */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "90%",
              backgroundColor: "#EAF2FF",
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "#508EFF",
              paddingHorizontal: 10,
              marginVertical: 20,
              alignSelf: "center",
            }}
          >
            <Ionicons name="search" size={24} color="#508EFF" />
            <TextInput
              style={{
                width: "90%",
                height: 40,
                borderRadius: 20,
                paddingHorizontal: 10,
              }}
              placeholder="Search"
              placeholderTextColor="#999999"
            />
          </View>
          {/* body */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "center",
              columnGap: 10,
              rowGap: 20,
              marginHorizontal: 10,
            }}
          >
            <CardDeilver text="Lobby001" />
            <CardDeilver text="Lobby002" />
          </View>
        </View>
      </View>
    </View>
  );
}
