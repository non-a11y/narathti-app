import { View, Text, StatusBar } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/mystyles";
import Header_sub_functions from "../../src/components/header_sub_functions";
import { FontAwesome6, Octicons } from "@expo/vector-icons";
import Card_list_icon_s1 from "../../src/components/card_list_icon_s1";
import Card_list_time from "../../src/components/card_list_time";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Tasks: undefined;
  S1_all_sub_function: undefined;
};

export default function Mobile_reception() {
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
      <Header_sub_functions title="Security patrol" />

      <View
        style={{
          flex: 1,
          marginTop: -20,
          paddingHorizontal: 16,
        }}
      >
        {/* card 1 */}
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              flex: 1,
              minHeight: 100, // ✅ ขยายตามเนื้อหา
              backgroundColor: "#FFFFFF",
              borderRadius: 30,
              overflow: "hidden",
              alignItems: "center",
              shadowColor: "#5e76ffff",
              paddingBottom: 20,
            },
          ]}
        >
          <View
            style={{
              backgroundColor: "#FFF5D6",
              width: "100%",
              height: 50,
              paddingLeft: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <FontAwesome6 name="map-location-dot" size={24} color="#FF8400" />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#7f7f7fff",
              }}
            >
              Choose the reception route
            </Text>
          </View>
          <Card_list_icon_s1 title="self-defined route" />
        </View>

        {/* card 2 */}
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              flex: 1,
              minHeight: 100, // ✅ ขยายตามเนื้อหา
              backgroundColor: "#FFFFFF",
              borderRadius: 30,
              overflow: "hidden",
              alignItems: "center",
              shadowColor: "#5e76ffff",
              paddingBottom: 20,
              marginTop: 20,
              marginBottom: 20,
            },
          ]}
        >
          <View
            style={{
              backgroundColor: "#FFF5D6",
              width: "100%",
              height: 50,
              paddingLeft: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <Octicons name="clock-fill" size={24} color="#FF8400" />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#7f7f7fff",
              }}
            >
              Choose the reception time
            </Text>
          </View>
          <Card_list_time title="1 Hour" />
          <Card_list_time title="2 Hours" />
          <Card_list_time title="3 Hours" />
          <Card_list_time title="Self-defined time" />
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
          onPress={() => navigation.navigate("S1_all_sub_function")}
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
              Ok
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
