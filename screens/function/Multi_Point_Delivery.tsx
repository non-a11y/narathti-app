import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { globalStyles, MPDStyles } from "../../styles/mystyles";

export default function MultiPointDelivery() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [autoWork, setAutoWork] = useState(false);

  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <LinearGradient
        colors={["#5B9BFF", "#3D7FFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingBottom: 40,
          paddingTop: insets.top + 12,
        }}
      >
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle-outline"
            size={36}
            color="white"
          />
        </TouchableOpacity>

        {/* Title */}
        <Text
          style={{
            // flex: 1 เต็มพื้นที่
            flex: 1,
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: 20,
            fontWeight: "600",
            // -36 คือขนาดของ Icon เพื่อให้ข้อความอยู่ตรงกลาง
            marginLeft: -36,
          }}
        >
          Multi-Point Delivery
        </Text>
      </LinearGradient>

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
              height: 450,
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
            <Text style={MPDStyles.rowLabel}>Standby point</Text>
            {/* Text right */}
            <View style={MPDStyles.rowRight}>
              <Text style={MPDStyles.rowValue}>Receptont</Text>
              <View
                style={{
                  backgroundColor: "#E8EEFF",
                  borderRadius: 12,
                  paddingHorizontal: 15,
                  paddingVertical: 2,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: "#3D7FFF",
                    fontWeight: "600",
                  }}
                >
                  +1
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#AAAAAA" />
            </View>
          </TouchableOpacity>

          {/* Row: Commute time */}
          <TouchableOpacity
            style={[globalStyles.ios, globalStyles.android, MPDStyles.list]}
            // ความจางของปุ่มเมื่อกด
            activeOpacity={0.7}
          >
            {/* Text left */}
            <Text style={MPDStyles.rowLabel}>Commute time</Text>
            {/* Text right */}
            <View style={MPDStyles.rowRight}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#3D7FFF",
                  fontWeight: "500",
                }}
              >
                09:00 - 12:00
              </Text>
            </View>
          </TouchableOpacity>

          {/* Row: Go to work automatically */}
          <View
            style={[globalStyles.ios, globalStyles.android, MPDStyles.list]}
          >
            <Text style={MPDStyles.rowLabel}>Go to work automatically</Text>
            <Switch
              value={autoWork}
              onValueChange={setAutoWork}
              trackColor={{ false: "#E0E0E0", true: "#A0BFFF" }}
              thumbColor={autoWork ? "#4A90E2" : "#FFFFFF"}
              ios_backgroundColor="#E0E0E0"
            />
          </View>

          {/* Row: Fetch reminder */}
          <TouchableOpacity
            style={[globalStyles.ios, globalStyles.android, MPDStyles.list]}
            // ความจางของปุ่มเมื่อกด
            activeOpacity={0.7}
          >
            {/* Text left */}
            <Text style={MPDStyles.rowLabel}>Fetch reminder</Text>
            {/* Text right */}
            <View style={MPDStyles.rowRight}>
              <Text style={MPDStyles.rowValue} numberOfLines={1}>
                Your food has arrived. Ple...
              </Text>
              <Ionicons name="chevron-forward" size={18} color="#AAAAAA" />
            </View>
          </TouchableOpacity>

          {/* Row: Notice setting */}
          <TouchableOpacity
            style={[globalStyles.ios, globalStyles.android, MPDStyles.list]}
            // ความจางของปุ่มเมื่อกด
            activeOpacity={0.7}
          >
            <Text style={MPDStyles.rowLabel}>Notice setting</Text>
            <View style={MPDStyles.rowRight}>
              <Text style={MPDStyles.rowValue}>Only once</Text>
              <Ionicons name="chevron-forward" size={18} color="#AAAAAA" />
            </View>
          </TouchableOpacity>

          {/* Row: Vice mode */}
          <TouchableOpacity
            style={[globalStyles.ios, globalStyles.android, MPDStyles.list]}
            // ความจางของปุ่มเมื่อกด
            activeOpacity={0.7}
          >
            <Text style={MPDStyles.rowLabel}>Vice mode</Text>
            <View style={MPDStyles.rowRight}>
              <Text style={MPDStyles.rowValue}>NO chatting</Text>
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
              Set off
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
