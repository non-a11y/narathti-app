import { View, Text, StatusBar, Image } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import { homeStyles } from "../styles/mystyles";
import { Shadow } from "react-native-shadow-2";

export default function home() {
  const insets = useSafeAreaInsets();
  return (
    <View style={homeStyles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />
      {/* -----Header----- 
      paddingTop = insets.top หลีกเลี่ยง notch + status bar
      */}
      <View style={[homeStyles.header, { paddingTop: insets.top + 8 }]}>
        <View>
          <Ionicons
            name="chevron-back-circle-outline"
            size={35}
            color="black"
          />
        </View>
        <View>
          <Image
            style={{
              width: 120,
              height: 60,
              resizeMode: "contain",
              alignSelf: "center",
            }}
            source={require("../assets/icon/naratai.png")}
          />
        </View>
        <View>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/icon/user.png")}
          />
        </View>
      </View>

      {/* ----- CONTENT----- 
    
      */}
      <View style={homeStyles.content}>
        <Text
          style={{
            color: "#444444",
            marginLeft: 20,
            marginTop: 10,
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Project Name
        </Text>
        {/* View ข้างนอกมี flex:1 และ margin */}
        <View style={{ flex: 1, margin: 20 }}>
          <Shadow
            distance={10}
            startColor={"rgba(0, 0, 0, 0.13)"}
            endColor={"#970e8500"}
            offset={[0, 0]}
            stretch // ← ยืดตาม parent แทน flex:1
            style={{ borderRadius: 30, flex: 1 }}
            containerStyle={{ flex: 1 }} // ← สำคัญ! ต้องใส่ containerStyle ด้วย
          >
            <View
              // shadow อีกแบบ [homeStyles.ios, homeStyles.android,]
              style={{
                flex: 1,
                backgroundColor: "#ffffff",
                //margin: 20,
                borderRadius: 30,
              }}
            >
              <View
                style={{
                  flexDirection: "row",

                  marginHorizontal: 20,
                  marginTop: 20,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={[homeStyles.textstyles, { fontSize: 20 }]}>
                  JU0633
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      resizeMode: "contain",
                      marginRight: 10,
                    }}
                    source={require("../assets/icon/power.png")}
                  />
                  <Text style={homeStyles.textstyles}>100%</Text>
                </View>
              </View>
              <Text
                style={[
                  homeStyles.textstyles,
                  { fontSize: 12, alignSelf: "center" },
                ]}
              >
                Click to Map
              </Text>
              <Image
                style={{
                  alignSelf: "center",
                  marginTop: 20,
                  //width: 100,
                  height: "70%",
                  resizeMode: "contain",
                  //backgroundColor: "#ff0000",
                }}
                source={require("../assets/icon/T1-007.png")}
              />
              <View
                style={{
                  backgroundColor: "#0a60ff",
                  height: 50,
                  width: "90%",
                  alignSelf: "center",
                  borderRadius: 25,
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 18,
                    alignSelf: "center",
                    marginTop: 12,
                    fontWeight: "bold",
                  }}
                >
                  Call
                </Text>
              </View>
            </View>
          </Shadow>
        </View>
      </View>

      {/* ----- TAB BAR ----- */}
      <View style={{ paddingBottom: Math.max(insets.bottom, 8) }}>
        <View
          style={[
            homeStyles.ios,
            homeStyles.android,
            {
              width: "90%",
              height: 80,
              backgroundColor: "#ffffff",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              borderRadius: 40,
            },
          ]}
        >
          <View style={{ margin : 20 }}>
            <Image
              source={require("../assets/icon/home.png")}
              style={{ width: 30, height: 30, resizeMode: "contain" }}
            />
            <Text style={{ color: "#000000", fontSize: 12 }}>Home</Text>
          </View>

          <View style={{ backgroundColor: "red" }}>
            <Image
              source={require("../assets/icon/home.png")}
              style={{ width: 30, height: 30, resizeMode: "contain" }}
            />
            <Text style={{ color: "#000000", fontSize: 12 }}>Home</Text>
          </View>

          <View style={{ backgroundColor: "red" }}>
            <Image
              source={require("../assets/icon/home.png")}
              style={{ width: 30, height: 30, resizeMode: "contain" }}
            />
            <Text style={{ color: "#000000", fontSize: 12 }}>Home</Text>
          </View>

          <View style={{ backgroundColor: "red" }}>
            <Image
              source={require("../assets/icon/home.png")}
              style={{ width: 30, height: 30, resizeMode: "contain" }}
            />
            <Text style={{ color: "#000000", fontSize: 12 }}>Home</Text>
          </View>

          <View style={{ backgroundColor: "red" }}>
            <Image
              source={require("../assets/icon/home.png")}
              style={{ width: 30, height: 30, resizeMode: "contain" }}
            />
            <Text style={{ color: "#000000", fontSize: 12 }}>Home</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
