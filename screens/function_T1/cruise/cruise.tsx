import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import { globalStyles, cruiseStyles } from "../../../styles/mystyles";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import CardCruise from "../../../components/card_list";
import CardSelect from "./card_select";
import { MaterialIcons } from "@expo/vector-icons";
import Header_sub_functions from "../../../components/header_sub_functions";

export default function Cruise() {
  const [isTrue, setIsTrue] = useState(true);
  const insets = useSafeAreaInsets();
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Cruise Setting" />

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
              height: 150, // ✅ ขยายตามเนื้อหา มีความสูงขั้นต่ำ 100
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden", // ตัดส่วนที่เกินขอบ
              shadowColor: "#5e76ffff",
            },
          ]}
        >
          {isTrue ? (
            <ScrollView>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  //columnGap: 10,
                  rowGap: 20,
                  marginHorizontal: 10,
                  marginVertical: 10,

                  //backgroundColor: "#ac0000ff",
                }}
              >
                <CardSelect text="Lobby001" />
                <MaterialIcons name="navigate-next" size={24} color="black" />
                <CardSelect text="Lobby001" />
                <MaterialIcons name="navigate-next" size={24} color="black" />
                <CardSelect text="Lobby001" />
              </View>
            </ScrollView>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: "#7F7F7F",
                }}
              >
                Please click the point location to add a wait point{" "}
              </Text>
            </View>
          )}
        </View>

        {/* 3 ปุ่ม */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            columnGap: 10,
            marginVertical: 16,
          }}
        >
          <View style={cruiseStyles.button}>
            <Text style={cruiseStyles.buttontext}>Save route </Text>
          </View>
          <View style={cruiseStyles.button}>
            <Text style={cruiseStyles.buttontext}>Global configuration </Text>
          </View>
          <View
            style={[
              cruiseStyles.button,
              {
                backgroundColor: "#FF6B81",
                borderColor: "#FF0000",
              },
            ]}
          >
            <Text style={cruiseStyles.buttontext}>Delete </Text>
          </View>
        </View>

        {/* card ที่ 2 */}
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              flex: 1,
              backgroundColor: "#ffffffff",
              borderRadius: 20,
              overflow: "hidden",
              shadowColor: "#5e76ffff",
              marginBottom: 20,
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
              marginTop: 10,
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
            }}
          >
            <CardCruise text="Lobby001" />
            <CardCruise text="Lobby002" />
            <CardCruise text="Lobby003" />
          </View>
        </View>
      </View>

      {/* Set off Button */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
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
              width: 160,
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
              Line list
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.85}
          style={{ borderRadius: 30, overflow: "hidden" }}
        >
          <LinearGradient
            colors={["#2979FF", "#4AB0FF"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{
              width: 160,
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
              Next step
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
