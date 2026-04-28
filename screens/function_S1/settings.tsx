import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/mystyles";
import Header_sub_functions from "../../src/components/header_sub_functions";
import Card_button_function from "../../src/components/card_button_function";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  S1_initiative: undefined;
  S1_reception: undefined;
  S1_patrol: undefined;
  S1_network: undefined;
  S1_sound: undefined;
  S1_about: undefined;
  S1_advanced: undefined;
};

export default function Settings() {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Settings" />

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
              minHeight: 100,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              paddingHorizontal: 16,
              paddingVertical: 16,
              alignItems: "center",
              shadowColor: "#5e76ffff",
              rowGap: 10,
            },
          ]}
        >
          <Card_button_function
            text="Initiative"
            value=""
            onPress={() => navigation.navigate("S1_initiative")}
          />
          <Card_button_function
            text="Reception"
            value=""
            onPress={() => navigation.navigate("S1_reception")}
          />
          <Card_button_function
            text="Patrol"
            value=""
            onPress={() => navigation.navigate("S1_patrol")}
          />
          <Card_button_function
            text="Network"
            value=""
            onPress={() => navigation.navigate("S1_network")}
          />
          <Card_button_function
            text="Sound"
            value=""
            onPress={() => navigation.navigate("S1_sound")}
          />
          <Card_button_function
            text="About"
            value=""
            onPress={() => navigation.navigate("S1_about")}
          />
          <Card_button_function
            text="Advanced"
            value=""
            onPress={() => navigation.navigate("S1_advanced")}
          />
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
