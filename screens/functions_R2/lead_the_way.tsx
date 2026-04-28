import { View, Text, StatusBar } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/mystyles";
import Header_sub_functions from "../../src/components/header_sub_functions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CardLTW from "../../src/components/card_list";

export default function Lead_the_way() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="I Guess you want to go" />

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
