import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import { globalStyles, reception_R2 } from "../../../styles/mystyles";
import Header_sub_functions from "../../../components/header_sub_functions";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Card_re from "./card_re";

export default function reception() {
  const navigation = useNavigation();
  const [autoWork, setAutoWork] = useState(false);
  const [leadTheWay, setLeadTheWay] = useState(false);
  const [takeAPicture, setTakeAPicture] = useState(false);
  const [enableDelivery, setEnableDelivery] = useState(false);
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
              flexGrow: 1, // 100% ของพื้นที่ว่าง
              alignItems: "center", // จัดให้ของข้างในอยู่ตรงกลางแนวนอน
              paddingBottom: 20,
              marginTop:20
            }}
          >
            {/* Row: Standby point */}
            <TouchableOpacity
              style={[
                globalStyles.ios,
                globalStyles.android,
                reception_R2.list,
              ]}
              // ความจางของปุ่มเมื่อกด
              activeOpacity={0.7}
            >
              {/* Text left */}
              <Text style={reception_R2.rowLabel}>Automatic Reception</Text>
              {/* Text right */}
              <Switch
                value={autoWork}
                onValueChange={setAutoWork}
                trackColor={{ false: "#E0E0E0", true: "#8ae9a2ff" }}
                thumbColor={autoWork ? "#34C759" : "#FFFFFF"}
                ios_backgroundColor="#E0E0E0"
              />
            </TouchableOpacity>

            {/* Reception time */}
            <Card_re text="Reception time" value="30 Minute" />

            {/*Reception location */}
            <Card_re text="Reception location" value="OneFloor reception" />

            {/* Voice Mode */}
            <Card_re text="Voice Mode" value="Polite Chatting" />

            {/* Reception */}
            <TouchableOpacity
              style={[
                globalStyles.ios,
                globalStyles.android,
                reception_R2.list,
              ]}
              // ความจางของปุ่มเมื่อกด
              activeOpacity={0.7}
            >
              {/* Text left */}
              <View>
                <Text style={reception_R2.rowLabel}>Reception</Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#7F7F7F",
                  }}
                >
                  The message broadcast by the robot af...
                </Text>
              </View>

              {/* Text right */}
              <View style={reception_R2.rowRight}>
                <Text style={reception_R2.rowValue}>Yes</Text>
                <Ionicons name="chevron-forward" size={18} color="#AAAAAA" />
              </View>
            </TouchableOpacity>

            {/* Door */}
            <Card_re text="Door" value="OpenSesame!" />

            {/* Walkthrough routes */}
            <Card_re text="Walkthrough routes" value="Test" />

            {/* Lead the Way */}
            <TouchableOpacity
              style={[
                globalStyles.ios,
                globalStyles.android,
                reception_R2.list,
              ]}
              // ความจางของปุ่มเมื่อกด
              activeOpacity={0.7}
            >
              {/* Text left */}
              <Text style={reception_R2.rowLabel}>Lead the Way</Text>
              {/* Text right */}
              <Switch
                value={leadTheWay}
                onValueChange={setLeadTheWay}
                trackColor={{ false: "#E0E0E0", true: "#8ae9a2ff" }}
                thumbColor={leadTheWay ? "#34C759" : "#FFFFFF"}
                ios_backgroundColor="#E0E0E0"
              />
            </TouchableOpacity>

            {/* Leading List */}
            <Card_re text="Leading List" value="Test" />

            {/* Take a Picture */}
            <TouchableOpacity
              style={[
                globalStyles.ios,
                globalStyles.android,
                reception_R2.list,
              ]}
              // ความจางของปุ่มเมื่อกด
              activeOpacity={0.7}
            >
              {/* Text left */}
              <Text style={reception_R2.rowLabel}>Take a Picture</Text>
              {/* Text right */}
              <Switch
                value={takeAPicture}
                onValueChange={setTakeAPicture}
                trackColor={{ false: "#E0E0E0", true: "#8ae9a2ff" }}
                thumbColor={takeAPicture ? "#34C759" : "#FFFFFF"}
                ios_backgroundColor="#E0E0E0"
              />
            </TouchableOpacity>

            {/* Enable delivery during reception */}
            <TouchableOpacity
              style={[
                globalStyles.ios,
                globalStyles.android,
                reception_R2.list,
              ]}
              // ความจางของปุ่มเมื่อกด
              activeOpacity={0.7}
            >
              {/* Text left */}
              <Text style={reception_R2.rowLabel}>
                Enable delivery during reception
              </Text>
              {/* Text right */}
              <Switch
                value={enableDelivery}
                onValueChange={setEnableDelivery}
                trackColor={{ false: "#E0E0E0", true: "#8ae9a2ff" }}
                thumbColor={enableDelivery ? "#34C759" : "#FFFFFF"}
                ios_backgroundColor="#E0E0E0"
              />
            </TouchableOpacity>
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
