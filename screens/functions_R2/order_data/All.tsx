import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../../styles/mystyles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Card_order_list from "../../../src/components/card_order_list";
import Pending from "./panding";
import InDelivery from "./in_delivery";

export default function All() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  // State สำหรับเก็บว่าตอนนี้เลือก Tab ไหนอยู่ (ค่าเริ่มต้นคือ "All")
  const [selectedTab, setSelectedTab] = useState("All"); // "All", "Pending", "In Delivery"
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
          paddingBottom: 20,
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
            marginRight: 36,
          }}
        >
          Order Management
        </Text>
      </LinearGradient>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          paddingVertical: 20,
          rowGap: 20,
        }}
      >
        {/* แถบเลือก Tab (Segmented Control) */}
        <View
          style={{
            backgroundColor: "#dadadaff",
            width: "100%",
            height: 50,
            flexDirection: "row",
            alignItems: "center",
            padding: 4,
            borderRadius: 10,
          }}
        >
          {/* Tab: All */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelectedTab("All")}
            style={{
              flex: 1,
              height: "100%",
              // ถ้า selectedTab ตรงกับชื่อ Tab จะแสดงพื้นหลังสีขาว ถ้าไม่ตรงจะเป็นสีโปร่งใส
              backgroundColor:
                selectedTab === "All" ? "#FFFFFF" : "transparent",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                // ปรับความหนาของตัวอักษรตาม Tab ที่เลือก
                fontWeight: selectedTab === "All" ? "600" : "400",
                color: "#000000",
              }}
            >
              All
            </Text>
          </TouchableOpacity>

          {/* Tab: Pending */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelectedTab("Pending")}
            style={{
              flex: 1,
              height: "100%",
              backgroundColor:
                selectedTab === "Pending" ? "#FFFFFF" : "transparent",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: selectedTab === "Pending" ? "600" : "400",
                color: "#000000",
              }}
            >
              Pending
            </Text>
          </TouchableOpacity>

          {/* Tab: In Delivery */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelectedTab("In Delivery")}
            style={{
              flex: 1,
              height: "100%",
              backgroundColor:
                selectedTab === "In Delivery" ? "#FFFFFF" : "transparent",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: selectedTab === "In Delivery" ? "600" : "400",
                color: "#000000",
              }}
            >
              In Delivery
            </Text>
          </TouchableOpacity>
        </View>

        {/* ส่วนแสดงเนื้อหาตาม Tab ที่เลือก (Conditional Rendering) */}
        {selectedTab === "All" && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ rowGap: 20, paddingBottom: 20 }}
          >
            <Card_order_list />
          </ScrollView>
        )}
        
        {/* แสดง Component Pending เมื่อเลือก Tab Pending */}
        {selectedTab === "Pending" && <Pending />}
        
        {/* แสดง Component InDelivery เมื่อเลือก Tab In Delivery */}
        {selectedTab === "In Delivery" && <InDelivery />}
      </View>
    </View>
  );
}
