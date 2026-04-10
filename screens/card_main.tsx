import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../styles/mystyles";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;

type CardProps = {
  robot: string;
  name: string;
  jobId: string;
  battery: number;
  status: "online" | "offline";
  image: any; // require(...)
};

export default function card_main({
  robot,
  name,
  jobId,
  battery,
  status,
  image,
}: CardProps) {
  const navigation = useNavigation();

  const handlePress = () => {
    if (robot === "T1") {
      navigation.navigate("TabT1" as never);
    } else if (robot === "R2") {
      navigation.navigate("TabR2" as never);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={handlePress}
      style={[
        globalStyles.ios,
        globalStyles.android,
        {
          width: (screenWidth - 16 * 2 - 12) / 2, // 👈 หักขอบซ้าย-ขวา และ gap กลาง
          height: 150,
          backgroundColor: "#ffffffff",
          borderRadius: 20,
        },
      ]}
    >
      <Text
        style={{
          marginTop: 10,
          fontSize: 20,
          fontWeight: "bold",
          color: "#000000ff",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        {robot}
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          marginHorizontal: 10,
        }}
      >
        <Image
          style={{
            width: 50,
            height: 100,
            resizeMode: "contain",
          }}
          source={image}
        />
        <View
          style={{
            rowGap: 2,
          }}
        >
          {/* ชื่อโปรเจกต์ */}
          <Text>{name}</Text>
          {/* รหัสงาน */}
          <Text>{jobId}</Text>

          {/* แบตเตอรี่ */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                marginRight: 5,
              }}
              source={require("../assets/icon/power.png")}
            />
            <Text style={[globalStyles.defaulttextstyles, { fontSize: 12 }]}>
              {battery}%
            </Text>
          </View>

          {/* สถานะ */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 5,
            }}
          >
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: status === "online" ? "#00ff00" : "#ff0000", // 👈 สีตาม status
              }}
            />
            <Text style={[globalStyles.defaulttextstyles, { fontSize: 12 }]}>
              {status === "online" ? "Online" : "Offline"}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
