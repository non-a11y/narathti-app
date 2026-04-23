import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function cruise_show_select() {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={["#008CFF", "#76CFFF"]}
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
          Cruise Show
        </Text>
      </View>

      {/* body */}
      <View
        style={{
          backgroundColor: "#ffffff7d",
          flex: 1,
          borderRadius: 20,
          marginVertical: 10,
          marginHorizontal: 10,
          alignItems: "center",
          paddingHorizontal: 20,
          rowGap: 10,
          paddingTop: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 100,
            backgroundColor: "#fff",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "#1B00B6",
            }}
          >
            Room011
          </Text>
        </View>
        <View>
          <FontAwesome name="arrow-down" size={24} color="#7F7F7F" />
        </View>
        <View
          style={{
            width: "100%",
            height: 100,
            backgroundColor: "#ffffff7f",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#7F7F7F",
            borderStyle: "dashed",
          }}
        >
          <FontAwesome5 name="plus" size={50} color="#7F7F7F" />
        </View>
      </View>

      {/* button */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 16,
            paddingVertical: 10,
            borderRadius: 20,
          }}
        >
          <Text>Clear Route</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 16,
            paddingVertical: 10,
            borderRadius: 20,
          }}
        >
          <Text>Create Route</Text>
        </View>
      </View>

      {/* button Next */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 10,
          //backgroundColor: "#EEF2FF",
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
              Next
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
