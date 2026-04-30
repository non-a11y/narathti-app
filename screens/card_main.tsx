import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../styles/mystyles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useRobot } from "../contexts/RobotContext";

type RootStackParamList = {
  TabT1: { screen: string; params: { uuid: string; status: string } };
  TabR2: { screen: string; params: { uuid: string; status: string } };
  TabS1: { screen: string; params: { uuid: string; status: string } };
};

const screenWidth = Dimensions.get("window").width;

type CardProps = {
  uuid: string; // เพิ่ม uuid
  robot: string;
  name: string;
  jobId: string;
  battery: number;
  status: "online" | "offline";
  image: any; // require(...)
  taskStatus?: string;
};

export default function Card_main({
  uuid,
  robot,
  name,
  jobId,
  battery,
  status,
  image,
  taskStatus,
}: CardProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { setUuid } = useRobot();

  const handlePress = () => {
    // บันทึก uuid ลง Context เพื่อให้ทุก Tab อ่านได้เสมอ
    setUuid(uuid);
    if (robot === "T1") {
      navigation.navigate("TabT1", {
        screen: "Home",
        params: { uuid, status },
      });
    } else if (robot === "R2") {
      navigation.navigate("TabR2", {
        screen: "Home",
        params: { uuid, status },
      });
    } else if (robot === "S1") {
      navigation.navigate("TabS1", {
        screen: "Home",
        params: { uuid, status },
      });
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 5,
            }}
          >
            <Image
              style={{
                width: 20,
                aspectRatio: 2 / 3,
                resizeMode: "contain",
                marginRight: 5,
                // ปรับภาพให้เป็นแนวนอน
                transform: [{ rotate: "90deg" }],
              }}
              source={(() => {
                if (taskStatus === "CHARGE") {
                  return require("../assets/icon/battery/CHARGE.webp");
                }
                if (battery <= 25) {
                  return require("../assets/icon/battery/0-25.webp");
                } else if (battery <= 50) {
                  return require("../assets/icon/battery/25-50.webp");
                } else if (battery <= 75) {
                  return require("../assets/icon/battery/50-75.webp");
                } else {
                  return require("../assets/icon/battery/75-100.webp");
                }
              })()}
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
