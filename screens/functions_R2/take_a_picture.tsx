import { View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/mystyles";
import Header_sub_functions from "../../components/header_sub_functions";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Take_a_picture() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />
      {/* Blue Gradient Header */}
      <Header_sub_functions title="Take a picture" />

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
              flex: 1,
              minHeight: 100,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              shadowColor: "#5e76ffff",
              marginBottom: 20,
              paddingHorizontal: 20,
              alignContent: "center",
              justifyContent: "center",
              rowGap: 20,
            },
          ]}
        >
          <View
            style={{
              flex: 0.9,

              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                // ค่า width ปรับตามค่า width
                width: "100%",
                height: 300,
              }}
              source={require("../../assets/icon/R2/take_a_picture.png")}
            />
          </View>
          <View
            style={{
              flex: 0.1,
            }}
          >
            <Text>
              Using the camera indicates that you have read and agree to the
              <Text style={{ color: "#8D00DF" }}> (Privacy Reminder)</Text>
            </Text>
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
              Exit Camera
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
