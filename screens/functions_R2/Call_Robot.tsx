import { View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  create_route: undefined;
};

export default function Call_Robot() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={["#008CFF", "#dcf3ffff"]}
      style={[
        {
          flex: 1,
        },
      ]}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
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
            flex: 1,
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: 20,
            fontWeight: "600",
            marginRight: 36,
          }}
        >
          Call Robot
        </Text>
      </View>

      {/* body */}
      <View
        style={{
          backgroundColor: "#ffffff7d",
          minHeight: 100,
          borderRadius: 20,
          marginVertical: 10,
          marginHorizontal: 10,
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#ffffff61",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              //paddingHorizontal : 16,
              //paddingVertical : 16,
            }}
          >
            <Text>Robot Selected </Text>
            <Text>Robot name</Text>
          </View>
          <View
            style={{
              //backgroundColor : "#1B00B6",
              width: "100%",
              minHeight: 50,
              borderRadius: 20,
              flexDirection : "row",
              justifyContent : "space-between",
              // กรอบ
              borderWidth: 1,
              borderColor: "#7F7F7F",
              
            }}
          >
            <View style = {{
                flexDirection : "row",
                alignItems : "center",
                
            }}>
            <Image
              source={require("../../assets/icon/R2-008.png")}
              style={{width: 50, height: 100, resizeMode: "contain" }}
            />
            <View>
            <Text>Robot id </Text>
            <Text>Status </Text>
            </View>

            </View>

            <Text>text</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
