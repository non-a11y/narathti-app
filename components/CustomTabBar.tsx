import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { homeStyles } from "../styles/mystyles";

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
          homeStyles.ios,
          homeStyles.android,
          {
            width: "90%",
            height: 80,
            backgroundColor: "#ffffff",
            // กระจายปุ่มให้ห่างเท่าๆ กัน
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            // ทำให้ขอบมนเป็นวงรี
            borderRadius: 40,
            rowGap: 10,
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => handlePress("Home")}
          style={{ paddingLeft: 20, alignItems: "center" }}
        >
          <Image
            source={require("../assets/icon/home.png")}
            style={{ width: 30, height: 30, resizeMode: "contain" }}
          />
          <Text style={{ color: "#000000ff", fontSize: 12 }}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handlePress("Tasks")}
          style={{ alignItems: "center" }}
        >
          <Image
            source={require("../assets/icon/home.png")}
            style={{ width: 30, height: 30, resizeMode: "contain" }}
          />
          <Text style={{ color: "#000000", fontSize: 12 }}>Tasks</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handlePress("Pickup")}
          style={{ alignItems: "center" }}
        >
          <Image
            source={require("../assets/icon/home.png")}
            style={{ width: 30, height: 30, resizeMode: "contain" }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handlePress("Management")}
          style={{ alignItems: "center" }}
        >
          <Image
            source={require("../assets/icon/home.png")}
            style={{ width: 30, height: 30, resizeMode: "contain" }}
          />
          <Text style={{ color: "#000000", fontSize: 12 }}>Management</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handlePress("SOS")}
          style={{ paddingRight: 20, alignItems: "center" }}
        >
          <Image
            source={require("../assets/icon/home.png")}
            style={{ width: 30, height: 30, resizeMode: "contain" }}
          />
          <Text style={{ color: "#000000", fontSize: 12 }}>sos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
