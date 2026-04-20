import { View, StatusBar, Text, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import Header_sub_functions from "../../../components/header_sub_functions";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function cruise_show() {
  const navigation = useNavigation<any>();
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Cruise Show" />

      {/* White Settings Card */}
      <View
        style={{
          flex: 1,
          marginTop: -20,
          paddingHorizontal: 16,
        }}
      >
        {/* body */}
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              minHeight: 100, // ✅ ขยายตามเนื้อหา มีความสูงขั้นต่ำ 100
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              //overflow: "hidden",
              alignItems: "center",
              shadowColor: "#5e76ffff",
              //marginBottom: 20,
              paddingVertical: 20,
              paddingHorizontal: 20,
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("cruise_setting")}
            style={[
              globalStyles.ios,
              globalStyles.android,
              {
                width: 160,
                height: 100,
                backgroundColor: "#ffffffff",
                paddingHorizontal: 10,
                borderRadius: 20,
                shadowColor: "#435fffff",

                alignItems: "center",
                justifyContent: "center",
                columnGap: 10,
              },
            ]}
          >
            <FontAwesome5 name="plus" size={40} color="#7F7F7F" />
            <Text style={[globalStyles.defaulttextstyles, { fontSize: 12 }]}>
              Create Route
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("select_route")}
            style={[
              globalStyles.ios,
              globalStyles.android,
              {
                width: 160,
                height: 100,
                backgroundColor: "#ffffffff",
                borderRadius: 20,
                shadowColor: "#435fffff",
                alignItems: "center",
                justifyContent: "center",
                columnGap: 10,
              },
            ]}
          >
            <FontAwesome5 name="route" size={40} color="#7F7F7F" />
            <Text style={[globalStyles.defaulttextstyles, { fontSize: 12 }]}>
              Select Route
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
