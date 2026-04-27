import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/mystyles";
import Header_sub_functions from "../../components/header_sub_functions";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function Work_plan() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Work plan" />

      {/* button settings */}
      <View
        style={{
          backgroundColor: "#EAF2FF",
          alignSelf: "flex-end",
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#508EFF",
          marginRight: 20,
          marginBottom: 10,
          marginTop: -40,
          flexDirection: "row",
          alignItems: "center",
          columnGap: 5,
        }}
      >
        <Ionicons name="settings-outline" size={16} color="#0060FE" />
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            color: "#0060FE",
          }}
        >
          Settings
        </Text>
      </View>
      {/* White Settings Card */}
      <View
        style={{
          flex: 1,
          //marginTop: -20,
          paddingHorizontal: 16,
        }}
      >
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              flex: 1,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              paddingHorizontal: 16,
              paddingVertical: 16,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#5e76ffff",
              rowGap: 20,
              marginBottom: 20,
            },
          ]}
        >
          {/* ไม่มีข้อมูล */}
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "#7f7f7f",
            }}
          >
            No tasks yet
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#ECECEC",
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 20,
              columnGap: 10,
            }}
          >
            <AntDesign name="plus-circle" size={16} color="black" />
            <Text>Create</Text>
          </View>
        </View>
      </View>

      {/* Set off Button */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 10,
          backgroundColor: "#EEF2FF",
          paddingBottom: insets.bottom + 20,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.85}
          style={{ borderRadius: 30, overflow: "hidden" }}
        >
          <LinearGradient
            colors={["#2979FF", "#4AB0FF"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{
              height: 54,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 20,
                fontWeight: "600",
                letterSpacing: 0.5,
              }}
            >
              Create
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
