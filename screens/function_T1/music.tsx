import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/mystyles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MPDStyles } from "../../styles/mystyles";
import Header_sub_functions from "../../components/header_sub_functions";


export default function music() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Music" />

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
              height: "95%",
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              alignItems: "center",
              shadowColor: "#5e76ffff",
            },
          ]}
        >
          {/* Row: Standby point */}

          <TouchableOpacity
            style={[
              globalStyles.ios,
              globalStyles.android,
              MPDStyles.list,
              { marginTop: 20 },
            ]}
            // ความจางของปุ่มเมื่อกด
            activeOpacity={0.7}
          >
            {/* Text left */}
            <View style={{ rowGap: 5 }}>
              <Text style={MPDStyles.rowLabel}>Song Title</Text>
              <Text
                style={{ fontSize: 12, color: "#7F7F7F", fontWeight: "500" }}
              >
                Artist Name
              </Text>
            </View>
            {/* Text right */}
            <View style={MPDStyles.rowRight}>
              <Text style={MPDStyles.rowValue}>01:18</Text>
              <Ionicons name="chevron-forward" size={18} color="#AAAAAA" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Set off Button */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 16,
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
              Add
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
