import React, { useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { globalStyles } from "../../styles/mystyles";

// คอมโพเนนต์ย่อยสำหรับปุ่มแต่ละปุ่มบน TabBar พร้อม Animation
const TabItem = ({
  routeName,
  label,
  iconSource,
  isActive,
  onPress,
  isCenter = false,
}: any) => {
  // สร้างตัวแปร Animated Value (0 = ไม่ได้เลือก, 1 = กำลังเลือก)
  const animValue = useRef(new Animated.Value(isActive ? 1 : 0)).current;

  // ควบคุม Animation เมื่อค่า isActive เปลี่ยนไป
  useEffect(() => {
    Animated.spring(animValue, {
      toValue: isActive ? 1 : 0,
      useNativeDriver: true, // ลื่นไหลขึ้นโดยใช้ Native Driver
      friction: 6, // ความหนืดของสปริง
      tension: 50, // ความแรงของสปริง
    }).start();
  }, [isActive]);

  // ถ้าเป็นปุ่มตรงกลาง (Pickup) ให้แสดงรูปเดิม แต่เพิ่ม Animation ให้รู้ว่าถูกเลือก
  if (isCenter) {
    // ขยายใหญ่ขึ้น 15% เมื่อถูกเลือก
    const centerScale = animValue.interpolate({
      inputRange: [0, 1], // 
      outputRange: [1, 1.15], // [1, 1.15]
    });

    // ดรอปความสว่างลงเมื่อไม่ได้เลือก (0.6) และสว่างเต็มที่เมื่อถูกเลือก (1.0)
    const centerOpacity = animValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.6, 1],
    });

    return (
      <TouchableOpacity
        onPress={onPress}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        activeOpacity={0.8}
      >
        <Animated.View
          style={{
            transform: [{ scale: centerScale }],
            opacity: centerOpacity,
            // เพิ่มเงาเบาๆ เวลาถูกเลือกให้ดูเด้งออกมา
            shadowColor: isActive ? "#3BA3E3" : "transparent",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.4,
            shadowRadius: 5,
            elevation: isActive ? 5 : 0,
          }}
        >
          <Image
            source={iconSource}
            style={{ width: 60, height: 60, resizeMode: "contain" }}
          />
        </Animated.View>
      </TouchableOpacity>
    );
  }

  // กำหนดสี
  const activeColor = "#3BA3E3"; // สีฟ้าเมื่อถูกเลือก (อ้างอิงจากรูป)
  const inactiveColor = "#888888"; // สีเทาเมื่อไม่ได้เลือก

  // คำนวณ Scale เพื่อให้กรอบเด้งขยายออกมา
  const scale = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      {/* โซนรูป Icon และ Background สีฟ้า */}
      <View
        style={{
          width: 56,
          height: 36,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* กรอบ Pill สีฟ้าที่จะโชว์ตอน Active */}
        <Animated.View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: activeColor,
            borderRadius: 18,
            opacity: animValue, // ค่อยๆ โผล่
            transform: [{ scale: scale }], // เด้งขยาย
          }}
        />

        {/* รูป Icon (เปลี่ยนสีขาวเมื่อ Active, สีเทาเมื่อ Inactive) */}
        <Image
          source={iconSource}
          style={{
            width: 24, // 24
            height: 24,
            resizeMode: "contain",
            tintColor: isActive ? "#FFFFFF" : inactiveColor,
          }}
        />
      </View>

      {/* โซนตัวหนังสือ (เปลี่ยนสีและน้ำหนักเมื่อ Active) */}
      <Text
        style={{
          color: isActive ? activeColor : inactiveColor,
          fontSize: 12,
          marginTop: 4,
          fontWeight: isActive ? "bold" : "normal",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  // เช็คว่าตอนนี้อยู่หน้าไหน
  const activeRouteName = state.routes[state.index].name;

  const handlePress = (routeName: string) => {
    navigation.navigate(routeName);
  };

  return (
    <View
      style={{
        paddingBottom: Math.max(insets.bottom, 8),
        backgroundColor: "transparent",
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
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
            paddingHorizontal: 10,
          },
        ]}
      >
        <TabItem
          routeName="Home"
          label="Home"
          iconSource={require("../../assets/icon/home.png")}
          isActive={activeRouteName === "Home"}
          onPress={() => handlePress("Home")}
        />
        <TabItem
          routeName="Tasks"
          label="Tasks"
          iconSource={require("../../assets/icon/tasks.png")}
          isActive={activeRouteName === "Tasks"}
          onPress={() => handlePress("Tasks")}
        />
        <TabItem
          routeName="Pickup"
          label=""
          iconSource={require("../../assets/icon/pickup.png")}
          isActive={activeRouteName === "Pickup"}
          onPress={() => handlePress("Pickup")}
          isCenter={true}
        />
        <TabItem
          routeName="Management"
          label="Activity"
          iconSource={require("../../assets/icon/management.png")}
          isActive={activeRouteName === "Management"}
          onPress={() => handlePress("Management")}
        />
        <TabItem
          routeName="SOS"
          label="sos"
          iconSource={require("../../assets/icon/sos.png")}
          isActive={activeRouteName === "SOS"}
          onPress={() => handlePress("SOS")}
        />
      </View>
    </View>
  );
}
