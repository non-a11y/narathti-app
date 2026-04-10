import { View, Text, TouchableOpacity, Switch, StatusBar } from "react-native";
import React from "react";
import { globalStyles, reception_T1 } from "../../styles/mystyles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Header_sub_functions from "../../components/header_sub_functions";

function formatTime(time: number) {
  if (time > 60) {
    return time / 60 + " M";
  } else {
    return time + " S";
  }
}

export default function reception() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [autoWork, setAutoWork] = useState(false);
  const [time, setTime] = useState(15);

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
        {/* card ที่ 1 */}
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              minHeight: 100, // ✅ ขยายตามเนื้อหา มีความสูงขั้นต่ำ 100
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              alignItems: "center",
              shadowColor: "#5e76ffff",
              marginBottom: 20,
            },
          ]}
        >
          <View style={{ height: 20 }} />
          {/* Row: Timing Settings */}
          <View
            style={[globalStyles.ios, globalStyles.android, reception_T1.list]}
          >
            <Text style={reception_T1.rowLabel}>Timing Settings</Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  if (time > 15) {
                    setTime(time - 15);
                  }
                }}
                style={{
                  backgroundColor: "#1E40AF",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              >
                <FontAwesome5 name="minus" size={15} color="white" />
              </TouchableOpacity>
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  borderRadius: 5,
                  // เส้นขอบ
                  borderWidth: 1,
                  borderColor: "#0B92FF",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#1E40AF",
                  }}
                >
                  {formatTime(time)}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setTime(time + 15);
                }}
                style={{
                  backgroundColor: "#1E40AF",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              >
                <FontAwesome5 name="plus" size={15} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Row: Reception location */}
          <TouchableOpacity
            style={[globalStyles.ios, globalStyles.android, reception_T1.list]}
            // ความจางของปุ่มเมื่อกด
            activeOpacity={0.7}
          >
            {/* Text left */}
            <Text style={reception_T1.rowLabel}>Reception location</Text>
            {/* Text right */}
            <View style={reception_T1.rowRight}>
              <Text style={reception_T1.rowValue} numberOfLines={1}>
                Reception
              </Text>
              <Ionicons name="chevron-forward" size={18} color="#AAAAAA" />
            </View>
          </TouchableOpacity>

          {/* Row: Voice mode */}
          <TouchableOpacity
            style={[globalStyles.ios, globalStyles.android, reception_T1.list]}
            // ความจางของปุ่มเมื่อกด
            activeOpacity={0.7}
          >
            <Text style={reception_T1.rowLabel}>Voice mode</Text>
            <View style={reception_T1.rowRight}>
              <Text style={reception_T1.rowValue}>Polite chatting</Text>
              <Ionicons name="chevron-forward" size={18} color="#AAAAAA" />
            </View>
          </TouchableOpacity>

          {/* Row: Greeting words */}
          <TouchableOpacity
            style={[globalStyles.ios, globalStyles.android, reception_T1.list]}
            // ความจางของปุ่มเมื่อกด
            activeOpacity={0.7}
          >
            <Text style={reception_T1.rowLabel}>Greeting words</Text>
            <View style={reception_T1.rowRight}>
              <Text style={reception_T1.rowValue}>Yes</Text>
              <Ionicons name="chevron-forward" size={18} color="#AAAAAA" />
            </View>
          </TouchableOpacity>
          <View style={{ height: 10 }} />
        </View>

        {/* card ที่ 2 */}
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              minHeight: 100, // ✅ ขยายตามเนื้อหา มีความสูงขั้นต่ำ 100
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              alignItems: "center",
              shadowColor: "#5e76ffff",
            },
          ]}
        >
          <View style={{ height: 20 }} />
          {/* Row: Lead the way */}
          <View
            style={[globalStyles.ios, globalStyles.android, reception_T1.list]}
          >
            <Text style={reception_T1.rowLabel}>Lead the way</Text>
            <Switch
              value={autoWork}
              onValueChange={setAutoWork}
              trackColor={{ false: "#E0E0E0", true: "#8ae9a2ff" }}
              thumbColor={autoWork ? "#34C759" : "#FFFFFF"}
              ios_backgroundColor="#E0E0E0"
            />
          </View>

          {/* Row: lead the list */}
          <TouchableOpacity
            style={[globalStyles.ios, globalStyles.android, reception_T1.list]}
            // ความจางของปุ่มเมื่อกด
            activeOpacity={0.7}
          >
            {/* Text left */}
            <Text style={reception_T1.rowLabel}>lead the list</Text>
            {/* Text right */}
            <View style={reception_T1.rowRight}>
              <Text style={reception_T1.rowValue} numberOfLines={1}>
                All locations
              </Text>
              <Ionicons name="chevron-forward" size={18} color="#AAAAAA" />
            </View>
          </TouchableOpacity>
          <View style={{ height: 10 }} />
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
