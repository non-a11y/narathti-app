import { View, Text, StatusBar, Modal } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import Header_sub_functions from "../../../components/header_sub_functions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Card_set from "../../../components/card_button_function";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export type RootStackParamList = {
  about_status: undefined;
  password_protection: undefined;
  battery_level: undefined;
  voice_settings: undefined;
  volume: undefined;
  deilvery_settings: undefined;
  guide_explanation_settings: undefined;
  media_settings: undefined;
  language_setting: undefined;
  theme_settings: undefined;
  mode_selection: undefined;
};

export default function settings() {
  // State สำหรับจัดการค่า Voice Mode ของหุ่นยนต์
  const [doorMode, setDoorMode] = useState("Door Open");
  const [lightMode, setLightMode] = useState("Light");

  // State สำหรับควบคุมการเปิด/ปิด Voice Mode Modal Dialog
  const [isDoorModalVisible, setDoorModalVisible] = useState(false);
  const [isLightModalVisible, setLightModalVisible] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const insets = useSafeAreaInsets();

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
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: "100%" }} // ให้ ScrollView กางเต็มร้อยเพื่อไม่ให้หด
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: "center", // จัดให้ของข้างในอยู่ตรงกลางแนวนอน
              paddingBottom: 40,
              marginTop: 20,
              rowGap: 10,
              paddingHorizontal: 10,
            }}
          >
            {/* Network Settings */}
            <Card_set text="Network Settings" value="" />

            {/* Password protection */}
            <Card_set
              text="Password protection"
              value=""
              onPress={() => navigation.navigate("password_protection")}
            />

            {/* Battery level */}
            <Card_set
              text="Battery level"
              value="100%"
              onPress={() => navigation.navigate("battery_level")}
            />

            {/* Volume */}
            <Card_set
              text="Volume"
              value="20%"
              onPress={() => navigation.navigate("volume")}
            />

            {/* Door */}
            <Card_set
              text="Door"
              value={doorMode}
              onPress={() => setDoorModalVisible(true)}
            />

            {/* Loght */}
            <Card_set
              text="Light"
              value={lightMode}
              onPress={() => setLightModalVisible(true)}
            />

            {/* Large screen */}
            <Card_set text="Large screen" value="" />

            {/* Deilvery Settings */}
            <Card_set
              text="Deilvery Settings"
              value=""
              onPress={() => navigation.navigate("deilvery_settings")}
            />

            {/* Seteings fo Leading the Way */}
            <Card_set text="Seteings fo Leading the Way" value="" />

            {/* Guide explanation settings */}
            <Card_set
            text="Guide explanation settings" 
            value=""
            onPress={() => navigation.navigate("guide_explanation_settings")}
             />

            {/* Media settings */}
            <Card_set 
            text="Media settings" 
            value=""
            onPress={() => navigation.navigate("media_settings")}
             />

            {/* Voice settings */}
            <Card_set 
            text="Voice settings" 
            value="" 
            onPress={() => navigation.navigate("voice_settings")}
            />

            {/* Language setting */}
            <Card_set
             text="Language settings" 
             value="" 
             onPress={() => navigation.navigate("language_setting")}
             />

            {/* Theme settings */}
            <Card_set 
            text="Theme settings" 
            value=""
            onPress={() => navigation.navigate("theme_settings")}
             />

            {/* Mode selection */}
            <Card_set 
            text="Mode selection" 
            value=""
            onPress={() => navigation.navigate("mode_selection")}
             />

            {/* About status */}
            <Card_set
              text="About status"
              value=""
              onPress={() => navigation.navigate("about_status")}
            />
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

      {/* Door Selection Modal */}
      {/* เพิ่ม Modal Dialog แบบโปร่งใส (transparent) ขึ้นมาทับกลางหน้าจอ */}
      <Modal
        animationType="fade" // การปรากฏของ Modal แบบค่อยๆ จางขึ้น (Fade)
        transparent={true} // ตั้งค่าให้พื้นหลัง Modal โปร่งใส (เพื่อให้มองเห็น Overlay สีดำจางๆ ด้านหลัง)
        visible={isDoorModalVisible} // เปิด/ปิด Modal ตามค่า State นี้
        onRequestClose={() => setDoorModalVisible(false)} // รองรับการกดปุ่ม Back บน Android
      >
        {/* ส่วนของ Overlay: พื้นหลังสีดำจางๆ เพื่อขับให้ตัว Modal เด่นขึ้น และจัดตำแหน่งเนื้อหาไว้ตรงกลาง */}
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // สีดำความโปร่งแสง 50%
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* กล่องเนื้อหาหลัก (Modal Card) */}
          <View
            style={{
              width: "85%",
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              padding: 20,
              alignItems: "center",
              // การตั้งค่าเงา (Shadow) สำหรับ iOS และ Android
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            {/* หัวข้อของ Modal */}
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 15,
                color: "#333",
              }}
            >
              Door
            </Text>

            {/* รายการตัวเลือกโหมดต่างๆ */}
            {["Door Open", "Door Closed"].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  width: "100%",
                  paddingVertical: 15,
                  borderBottomWidth: index === 2 ? 0 : 1,
                  borderBottomColor: "#F0F0F0",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                onPress={() => {
                  setDoorMode(item);
                  setDoorModalVisible(false);
                }}
              >
                <View style={{ flex: 1, paddingRight: 10 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: doorMode === item ? "#2979FF" : "#333333ff",
                      fontWeight: doorMode === item ? "600" : "400",
                    }}
                  >
                    {item}
                  </Text>
                </View>
                {doorMode !== item && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={24}
                    color="black"
                  />
                )}
                {doorMode === item && (
                  <MaterialIcons
                    name="radio-button-checked"
                    size={24}
                    color="#2979FF"
                  />
                )}
              </TouchableOpacity>
            ))}

            {/* ปุ่มกดปิด Modal ด้านล่างสุด */}
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "#e4e4e4ff",
                paddingVertical: 10,
                paddingHorizontal: 30,
                borderRadius: 20,
              }}
              onPress={() => setDoorModalVisible(false)} // ปิด Modal โดยไม่เปลี่ยนค่าอะไร
            >
              <Text style={{ color: "#333", fontSize: 16, fontWeight: "500" }}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Light */}
      <Modal
        animationType="fade" // การปรากฏของ Modal แบบค่อยๆ จางขึ้น (Fade)
        transparent={true} // ตั้งค่าให้พื้นหลัง Modal โปร่งใส (เพื่อให้มองเห็น Overlay สีดำจางๆ ด้านหลัง)
        visible={isLightModalVisible} // เปิด/ปิด Modal ตามค่า State นี้
        onRequestClose={() => setLightModalVisible(false)} // รองรับการกดปุ่ม Back บน Android
      >
        {/* ส่วนของ Overlay: พื้นหลังสีดำจางๆ เพื่อขับให้ตัว Modal เด่นขึ้น และจัดตำแหน่งเนื้อหาไว้ตรงกลาง */}
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // สีดำความโปร่งแสง 50%
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* กล่องเนื้อหาหลัก (Modal Card) */}
          <View
            style={{
              width: "85%",
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              padding: 20,
              alignItems: "center",
              // การตั้งค่าเงา (Shadow) สำหรับ iOS และ Android
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            {/* หัวข้อของ Modal */}
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 15,
                color: "#333",
              }}
            >
              Light
            </Text>

            {/* รายการตัวเลือกโหมดต่างๆ */}
            {["Side Light-on", "Side Light-Close"].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  width: "100%",
                  paddingVertical: 15,
                  borderBottomWidth: index === 2 ? 0 : 1,
                  borderBottomColor: "#F0F0F0",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                onPress={() => {
                  setLightMode(item);
                  setLightModalVisible(false);
                }}
              >
                <View style={{ flex: 1, paddingRight: 10 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: lightMode === item ? "#2979FF" : "#333333ff",
                      fontWeight: lightMode === item ? "600" : "400",
                    }}
                  >
                    {item}
                  </Text>
                </View>
                {lightMode !== item && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={24}
                    color="black"
                  />
                )}
                {lightMode === item && (
                  <MaterialIcons
                    name="radio-button-checked"
                    size={24}
                    color="#2979FF"
                  />
                )}
              </TouchableOpacity>
            ))}

            {/* ปุ่มกดปิด Modal ด้านล่างสุด */}
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "#e4e4e4ff",
                paddingVertical: 10,
                paddingHorizontal: 30,
                borderRadius: 20,
              }}
              onPress={() => setLightModalVisible(false)} // ปิด Modal โดยไม่เปลี่ยนค่าอะไร
            >
              <Text style={{ color: "#333", fontSize: 16, fontWeight: "500" }}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
