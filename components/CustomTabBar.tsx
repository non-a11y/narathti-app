import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { globalStyles } from "../styles/mystyles";

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  // ดึงค่า insets (ขอบเขตปลอดภัยของหน้าจอ) เช่น แถบ Home Indicator ด้านล่างของ iPhone
  const insets = useSafeAreaInsets();

  // ฟังก์ชันสำหรับเปลี่ยนหน้า (Navigate) เมื่อกดปุ่มใน TabBar
  const handlePress = (routeName: string) => {
    navigation.navigate(routeName);
  };

  return (
    <View
      style={{
        // ดันเนื้อหาขึ้นเผื่อพื้นที่ขอบล่างของหน้าจอ (เซฟโซน) อย่างน้อย 8px
        paddingBottom: Math.max(insets.bottom, 8),
        backgroundColor: "transparent",
        // ให้ TabBar ลอยอยู่เหนือ Content ของหน้าจอ (ทำให้ต้องไปเพิ่ม marginBottom ในหน้า Home ตามที่แก้ไป)
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      {/* กรอบสีขาว (Pill Shape) ของเมนู */}
      <View
  style={[
    globalStyles.ios,
    globalStyles.android,
    {
      width: "90%",
      height: 80,
      backgroundColor: "#ffffff",
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 40,
    },
  ]}
>
  <TouchableOpacity
    onPress={() => handlePress("Home")}
    style={{ flex: 1, alignItems: "center" }}  // ✅ เพิ่ม flex: 1
  >
    <Image source={require("../assets/icon/home.png")}
      style={{ width: 30, height: 30, resizeMode: "contain" }} />
    <Text style={{ color: "#000000", fontSize: 12 }}>Home</Text>
  </TouchableOpacity>

  <TouchableOpacity
    onPress={() => handlePress("Tasks")}
    style={{ flex: 1, alignItems: "center" }}  // ✅ เพิ่ม flex: 1
  >
    <Image source={require("../assets/icon/tasks.png")}
      style={{ width: 30, height: 30, resizeMode: "contain" }} />
    <Text style={{ color: "#000000", fontSize: 12 }}>Tasks</Text>
  </TouchableOpacity>

  <TouchableOpacity
    onPress={() => handlePress("Pickup")}
    style={{ flex: 1, alignItems: "center" }}  // ✅ flex: 1 → อยู่ตรงกลางพอดี (ปุ่มที่ 3 จาก 5)
  >
    <Image source={require("../assets/icon/pickup.png")}
      style={{ width: 60, height: 60, resizeMode: "contain" }} />
  </TouchableOpacity>

  <TouchableOpacity
    onPress={() => handlePress("Management")}
    style={{ flex: 1, alignItems: "center" }}  // ✅ เพิ่ม flex: 1
  >
    <Image source={require("../assets/icon/management.png")}
      style={{ width: 30, height: 30, resizeMode: "contain" }} />
    <Text style={{ color: "#000000", fontSize: 12 }}>Management</Text>
  </TouchableOpacity>

  <TouchableOpacity
    onPress={() => handlePress("SOS")}
    style={{ flex: 1, alignItems: "center" }}  // ✅ เพิ่ม flex: 1 (เอา paddingRight ออก)
  >
    <Image source={require("../assets/icon/sos.png")}
      style={{ width: 30, height: 30, resizeMode: "contain" }} />
    <Text style={{ color: "#000000", fontSize: 12 }}>SOS</Text>
  </TouchableOpacity>
</View>
    </View>
  );
}
