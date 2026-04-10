import { View, Text, StatusBar } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import Header_sub_functions from "../../../components/header_sub_functions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView, Switch, TouchableOpacity } from "react-native";
import { reception_R2 } from "../../../styles/mystyles";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Card_set from "./card_set";

export default function settings() {
  const insets = useSafeAreaInsets();
  const [autoWork, setAutoWork] = useState(false);
  const [leadTheWay, setLeadTheWay] = useState(false);
  const [takeAPicture, setTakeAPicture] = useState(false);
  const [enableDelivery, setEnableDelivery] = useState(false);
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Reception Setting" />

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
              alignItems: "center",
              shadowColor: "#5e76ffff",
              marginBottom: 20,
            },
          ]}
        >
          
          <ScrollView showsVerticalScrollIndicator={false}
            style={{ width: "100%" }} // ให้ ScrollView กางเต็มร้อยเพื่อไม่ให้หด
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: "center", // จัดให้ของข้างในอยู่ตรงกลางแนวนอน
              paddingBottom: 20,
              marginTop:20
            }}>
            {/* Network Settings */}
            <Card_set text="Network Settings" value="" />

            {/* Password protection */}
            <Card_set text="Password protection" value="" />

            {/* Battery level */}
            <Card_set text="Battery level" value="100%" />

            {/* Volume */}
            <Card_set text="Volume" value="20%" />

            {/* Door */}
             <Card_set text="Volume" value="20%" />

            {/* Loght */}
             <Card_set text="Loght" value="" />

            {/* Large screen */}
             <Card_set text="Large screen" value="" />

            {/* Deilvery Settings */}
            <Card_set text="Deilvery Settings" value="" />

            {/* Seteings fo Leading the Way */}
            <Card_set text="Seteings fo Leading the Way" value="" />

            {/* Guide explanation settings */}
            <Card_set text="Guide explanation settings" value="" />

            {/* Media settings */}
            <Card_set text="Media settings" value="" />

            {/* Voice settings */}
            <Card_set text="Voice settings" value="" />

            {/* Language setting */}
            <Card_set text="Language settings" value="" />

            {/* Theme settings */}
            <Card_set text="Theme settings" value="" />

            {/* Mode selection */}
            <Card_set text="Mode selection" value="" />

            {/* About status */}
            <Card_set text="About status" value="" />
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
                fontSize: 18,
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
