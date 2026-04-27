import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import CardDeilver from "../../../components/card_list";
import Header_sub_functions from "../../../components/header_sub_functions";

export default function Cruise_shows() {
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
      <LinearGradient
        colors={["#5B9BFF", "#3D7FFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingBottom: 80,
          paddingTop: insets.top + 12,
        }}
      >
        {/* Back Button */}

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} // ขยายพื้นที่กดออกไปรอบๆ
          delayPressIn={0} // ลด delay ก่อนรับ input เป็น 0
          activeOpacity={0.7}
        >
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
            marginRight: 36,
          }}
        >
          Cruise show
        </Text>
      </LinearGradient>

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
