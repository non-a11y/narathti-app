import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/mystyles";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";

export default function call_status() {
  return (
    <View
      style={[
        //globalStyles.ios,
        //globalStyles.android,
        {
          width: "90%",
          height: 60,
          backgroundColor: "#ffffffff",
          marginTop: 10,
          borderRadius: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          columnGap: 10,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: "#0B92FF",
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
        }}
      >
        <View
          //colors={["#7699FF", "#0040FF"]}
          //start={{ x: 0, y: 0 }}
          //end={{ x: 0, y: 1 }}
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              width: 40,
              height: 40,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#C5D2FD",
              backgroundColor: "#C5D2FD",
            },
          ]}
        >
          <Foundation name="telephone" size={30} color="#4635FF" />
        </View>
        <View
          style={{
            rowGap: 5,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Voice Call ended
          </Text>
          <Text
            style={[
              globalStyles.defaulttextstyles,
              {
                fontSize: 12,
              },
            ]}
          >
            Today, 14:00 • Duration 06:12
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 5,
        }}
      >
        <View
          style={{
            backgroundColor: "#C3FFCA",
            width: 80,
            height: 30,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            columnGap: 5,
          }}
        >
          <Entypo name="check" size={13} color="#06B60C" />
          <Text style={{ fontSize: 10, color: "#06B60C", fontWeight: "500" }}>
            Completed
          </Text>
        </View>
        <Ionicons
          name="chevron-back"
          size={24}
          color="#000000ff"
          style={{ transform: [{ rotate: "180deg" }] }}
        />
      </View>
    </View>
  );
}
