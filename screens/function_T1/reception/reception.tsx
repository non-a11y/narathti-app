import { View, Text, TouchableOpacity, Switch, StatusBar } from "react-native";
import React from "react";
import { globalStyles, button_function } from "../../../styles/mystyles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Header_sub_functions from "../../../components/header_sub_functions";
import Card_button_function from "../../../components/card_button_function";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  reception: undefined;
  reception_location: undefined;

  voice_mode: {
    currentSelection: string;
    onSelect: (value: string) => void;
  };
  greeting_words: {
    currentSelection: string;
    onSelect: (value: string) => void;
  };
  lead_the_list: {
    currentSelection: string;
    onSelect: (value: string) => void;
  };
};

function formatTime(time: number) {
  if (time > 60) {
    return time / 60 + " M";
  } else {
    return time + " S";
  }
}

// สร้างตัวแปร Global แบบเรียบง่ายไว้นอก Component
// เพื่อให้ค่าที่เลือกยังคงอยู่แม้ว่าผู้ใช้จะกด Back ออกจากหน้านี้ไปแล้วกลับเข้ามาใหม่
let globalVoiceModeValue = "Chat while working";
let globalGreetingWordsValue = "None";
let globalLeadTheListValue = "All locations";

export default function Reception() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const insets = useSafeAreaInsets();
  const [autoWork, setAutoWork] = useState(false);
  const [time, setTime] = useState(15);

  // สร้าง State สำหรับเก็บข้อความ Fetch reminder โดยดึงค่าเริ่มต้นมาจากตัวแปร Global
  const [voiceModeValue, setVoiceModeValue] = useState(globalVoiceModeValue);

  const [greetingWordsValue, setGreetingWordsValue] = useState(
    globalGreetingWordsValue,
  );

  const [leadTheListValue, setLeadTheListValue] = useState(
    globalLeadTheListValue,
  );

  // const [leadTheListValue, setLeadTheListValue] = useState(
  //   globalLeadTheListValue,
  // );

  // ฟังก์ชันสำหรับอัปเดตทั้ง State แจ้งให้หน้าจอเปลี่ยน และอัปเดต Global เพื่อความจำ
  const updatevoiceMode = (value: string) => {
    globalVoiceModeValue = value; // จำไว้ใช้ครั้งหน้า
    setVoiceModeValue(value); // อัปเดตหน้าจอทันที
  };

  const updateGreetingWords = (value: string) => {
    globalGreetingWordsValue = value; // จำไว้ใช้ครั้งหน้า
    setGreetingWordsValue(value); // อัปเดตหน้าจอทันที
  };

  const updateLeadTheList = (value: string) => {
    globalLeadTheListValue = value; // จำไว้ใช้ครั้งหน้า
    setLeadTheListValue(value); // อัปเดตหน้าจอทันที
  };

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
          rowGap: 20, // ระยะห่าง card
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
              paddingVertical: 20,
              paddingHorizontal: 10,
              rowGap: 10,
            },
          ]}
        >
          {/* Timing Settings */}
          <View style={[button_function.list]}>
            {/* text left */}
            <Text style={button_function.text_left}>Timing Settings</Text>

            {/* button right */}
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

          {/* Reception location */}
          <Card_button_function
            text="Reception location"
            value="Reception"
            onPress={() => navigation.navigate("reception_location")}
          />

          {/* Voice mode */}
          <Card_button_function
            text="Voice mode"
            value={
              voiceModeValue.length > 20
                ? voiceModeValue.substring(0, 20) + "..."
                : voiceModeValue
            }
            onPress={() =>
              navigation.navigate("voice_mode", {
                currentSelection: voiceModeValue,
                onSelect: updatevoiceMode,
              })
            }
          />

          {/* Greeting words */}
          <Card_button_function
            text="Greeting words"
            value={
              greetingWordsValue.length > 20
                ? greetingWordsValue.substring(0, 20) + "..."
                : greetingWordsValue
            }
            onPress={() =>
              navigation.navigate("greeting_words", {
                currentSelection: greetingWordsValue,
                onSelect: updateGreetingWords,
              })
            }
          />
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
              paddingHorizontal: 10,
              rowGap: 10,
              paddingVertical: 20,
            },
          ]}
        >
          {/* Row: Lead the way */}
          <View style={[button_function.list]}>
            <Text style={button_function.text_left}>Lead the way</Text>
            <Switch
              value={autoWork}
              onValueChange={setAutoWork}
              trackColor={{ false: "#E0E0E0", true: "#8ae9a2ff" }}
              thumbColor={autoWork ? "#34C759" : "#FFFFFF"}
              ios_backgroundColor="#E0E0E0"
            />
          </View>

          {/* lead the list */}
          <Card_button_function
            text="Lead the list"
            value={
              leadTheListValue.length > 20
                ? leadTheListValue.substring(0, 20) + "..."
                : leadTheListValue
            }
            onPress={() =>
              navigation.navigate("lead_the_list", {
                currentSelection: leadTheListValue,
                onSelect: updateLeadTheList,
              })
            }
          />
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
