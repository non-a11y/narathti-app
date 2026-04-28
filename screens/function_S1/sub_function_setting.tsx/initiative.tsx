import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import Header_sub_functions from "../../../src/components/header_sub_functions";
import Card_0n_off from "../../../src/components/card_on-off";
import Card_button_function from "../../../src/components/card_button_function";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Initiative() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Initiative" />

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
              flex: 1,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              //paddingHorizontal: 16,
              //paddingVertical: 16,
              alignItems: "center",
              shadowColor: "#5e76ffff",
              marginBottom: 20,
              rowGap: 10,
            },
          ]}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: "100%" }} // ให้ ScrollView กางเต็มร้อยเพื่อไม่ให้หด
            contentContainerStyle={{
              flexGrow: 1, // 100% ของพื้นที่ว่าง
              alignItems: "center", // จัดให้ของข้างในอยู่ตรงกลางแนวนอน
              paddingBottom: 40,
              marginVertical: 20,
              rowGap: 10,
              paddingHorizontal: 10,
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
                  paddingVertical: 16,
                  alignItems: "center",
                  shadowColor: "#5e76ffff",
                  rowGap: 10,
                },
              ]}
            >
              <Card_0n_off text="Welcome" />
              <Card_button_function
                text="Greeting words settings"
                value="2Plece"
              />
              <Card_button_function text="Sensing distance" value="3Meter" />
              <Card_button_function text="Sensing way" value="Camera" />
              <Card_button_function text="Welcome interval" value="10Second" />
              <Card_button_function text="Standby screen angle" value="12º" />
            </View>

            <View
              style={[
                globalStyles.ios,
                globalStyles.android,
                {
                  minHeight: 50,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 20,
                  overflow: "hidden",
                  paddingHorizontal: 10,
                  paddingVertical: 16,
                  alignItems: "center",
                  shadowColor: "#5e76ffff",
                  rowGap: 10,
                },
              ]}
            >
              <Card_0n_off text="Start a conversation proactively" />
              <Card_button_function
                text="Conversation Interval"
                value="120Second"
              />
            </View>
            <Card_0n_off text="Sound source identification" />
            <Card_0n_off text="Visitor records" />
            <Card_0n_off text="Walkthrough standby" />
            <Card_0n_off text="Receive alarm messages" />
          </ScrollView>
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
              OK
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
