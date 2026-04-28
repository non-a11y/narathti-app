import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { globalStyles } from "../../styles/mystyles";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Header_sub_functions from "../../src/components/header_sub_functions";
import Card_list from "../../src/components/card_list";

export default function Delivery_information() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Delivery Information" />

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
              minHeight: 100,
              backgroundColor: "#FFFFFF",
              borderRadius: 30,
              overflow: "hidden",
              //alignItems: "center",
              shadowColor: "#5e76ffff",
              paddingVertical: 20,
              paddingHorizontal: 10,
            },
          ]}
        >
          {/* Point of departure */}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>Point of departure</Text>
            <Text>Choose a site</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#E0E0E0",
              marginVertical: 10,
            }}
          />
          {/* Destination */}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>Delivery phone No.</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TextInput
                placeholder="+66"
                placeholderTextColor="#555"
                keyboardType="number-pad"
              />
              <View
                style={{
                  width: 1,
                  height: 20,
                  backgroundColor: "#E0E0E0",
                }}
              />
              <TextInput
                placeholder="Optional"
                placeholderTextColor="#555"
                keyboardType="number-pad"
                maxLength={10}
              />
            </View>
          </View>
        </View>

        {/* search */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#EAF2FF",
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "#508EFF",
            paddingHorizontal: 10,
            marginVertical: 20,
            alignSelf: "center",
          }}
        >
          <Ionicons name="search" size={24} color="#508EFF" />
          <TextInput
            style={{
              width: "90%",
              height: 40,
              borderRadius: 20,
              paddingHorizontal: 10,
            }}
            placeholder="Search"
            placeholderTextColor="#999999"
          />
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
          }}
        >
          <Card_list text="Lobby001" />
          <Card_list text="Lobby002" />
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
                fontSize: 20,
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
