import { View, Text, StatusBar, Image } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/mystyles";
import Header_sub_functions from "../../../components/header_sub_functions";

export default function theme_settings() {
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Theme settings" />

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
              minHeight: 200,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              paddingHorizontal: 10,
              paddingVertical: 40,
              alignItems: "center",
              shadowColor: "#5e76ffff",
              rowGap: 10,
            },
          ]}
        >
          <Text style = {{
            color : '#7f7f7f',
            fontSize : 16,
            fontWeight : 'bold'
            }}>Theme1</Text>
          <View style={[globalStyles.ios, globalStyles.android,{
            backgroundColor : '#fffdfdff',
            justifyContent: "center",
            alignItems: "center",
            width : '80%', 
            height : 150,
            borderRadius : 40
          }]}>
            <Image
              style={{
                width: 200,
                height: 150,
              }}
              source={require("../../../assets/icon/R2/Theme1.png")}
            />
            
          </View>
          <Text style = {{
            color : '#7f7f7f',
            fontSize : 16,
            fontWeight : 'bold'
            }}>Theme2</Text>
          <View style={[globalStyles.ios, globalStyles.android,{
            backgroundColor : '#fffdfdff',
            justifyContent: "center",
            alignItems: "center",
            width : '80%', 
            height : 150,
            borderRadius : 40
          }]}>
            <Image
              style={{
                width: 100,
                height: 100,
              }}
              source={require("../../../assets/icon/R2/Theme2.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
