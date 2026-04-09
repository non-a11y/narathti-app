import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import CardLTW from "./card_ltw";

export default function Lead_the_way() {
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
          paddingBottom: 40,
          // เว้นระยะห่างจากขอบบนของจอ
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
          I can bring you to these places.
        </Text>
      </LinearGradient>

      {/* White Settings Card */}
      <View
        style={{
          flex: 1,
          marginTop: -20,
          paddingHorizontal: 16,
        }}
      >
        {/* card ที่ 1 */}
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              flex: 1,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              //alignItems: "center",
              shadowColor: "#5e76ffff",
              marginBottom: 80 + Math.max(insets.bottom, 0),
            },
          ]}
        >
          {/* header */}
          <View
            style={{
              width: "100%",
              height: 50,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
              marginVertical: 10,
              //backgroundColor: "#ac0000ff",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "500" }}>Tsn01-1</Text>

            <View
              style={{
                backgroundColor: "#EAF2FF",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 120,
                borderWidth: 1,
                borderColor: "#508EFF",
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "500" }}>Tsn001</Text>
            </View>
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
              //backgroundColor: "#ac0000ff",
            }}
          >
            <CardLTW text="Lobby001" />
            <CardLTW text="metting room" />
          </View>
        </View>
      </View>
    </View>
  );
}
