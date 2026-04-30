import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import Card_list from "../../../src/components/card_list";
import { useRobot } from "../../../contexts/RobotContext";

export type RootStackParamList = {
  Call_rebot_list: {
    uuid: string;
    onSelect?: (name: string, pointUuid: string) => void;
  };
};

export default function Call_Robot() {
  const [choice, setChoice] = useState(true);
  const [button_call, setbutton_call] = useState(false);

  const route = useRoute();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const insets = useSafeAreaInsets();
  const { uuid } = useRobot(); // อ่าน uuid จาก RobotContext (เสถียรกว่า route.params)
  const [selectedPointName, setSelectedPointName] = useState("");
  const [selectedPointUuid, setSelectedPointUuid] = useState("");
  const [phone, setPhone] = useState("");

  const updateSelectedPoint = (pointName: string, pointUuid: string) => {
    setSelectedPointName(pointName);
    setSelectedPointUuid(pointUuid);
    setChoice(false);
    setbutton_call(true);
  };

  const handleCallRobot = async () => {
    try {
      const response = await fetch("http://10.0.2.2:3000/api/call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          robotUuid: (route.params as any)?.uuid,
          pointUuid: selectedPointUuid,
          phone: phone,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Robot called successfully");
        navigation.goBack();
      } else {
        Alert.alert("Error", result.message || "Failed to call robot");
      }
    } catch (error) {
      console.error("Error calling robot:", error);
      Alert.alert("Error", "Network error. Please check your connection.");
    }
  };

  //console.log("Call_robot_main params:", route.params);
  //console.log("selectedPointName :" + selectedPointName);
  //console.log("selectedPointUuid :" + selectedPointUuid);
  return (
    <LinearGradient
      colors={["#008CFF", "#dcf3ffff"]}
      style={[
        {
          flex: 1,
        },
      ]}
    >
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
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
              flex: 1,
              textAlign: "center",
              color: "#FFFFFF",
              fontSize: 20,
              fontWeight: "600",
              marginRight: 36,
            }}
          >
            Call Robot
          </Text>
        </View>

        {/* body */}
        <View
          style={{
            backgroundColor: "#ffffff62",
            minHeight: 100,
            borderRadius: 20,
            marginVertical: 10,
            marginHorizontal: 10,
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 20,
            rowGap: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#eeeeee4b",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              paddingVertical: 20,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Robot Selected
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: "#636363ff",
                }}
              >
                Robot name
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                minHeight: 50,
                borderRadius: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                paddingVertical: 10,
                // กรอบ
                borderWidth: 1,
                borderColor: "#ffffffff",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <Image
                  source={require("../../../assets/icon/R2-008.png")}
                  style={{
                    width: 60,
                    height: 110,
                    resizeMode: "contain",
                  }}
                />
                <View>
                  <Text>Robot id </Text>
                  <Text>Status </Text>
                </View>
              </View>
              <View
                style={{
                  //backgroundColor: "#ffffffff",
                  justifyContent: "space-around",
                  alignItems: "flex-end",
                }}
              >
                <View>
                  <Text>100%</Text>
                </View>
                <MaterialIcons
                  name="radio-button-checked"
                  size={20}
                  color="#1B00B6"
                />
              </View>
            </View>
          </View>
          <View
            // activeOpacity={0.7}
            // onPress={() => {
            //   navigation.navigate("Call_rebot_list");
            // }}
            style={{
              backgroundColor: "#eeeeee4b",
              width: "100%",
              gap: 10,
              paddingHorizontal: 10,
              paddingVertical: 20,
              borderRadius: 20,
              rowGap: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Call location information
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                navigation.navigate("Call_rebot_list", {
                  uuid: uuid,
                  onSelect: updateSelectedPoint,
                });
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: "#636363ff",
                }}
              >
                Select Other Locations
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                {choice ? (
                  // เข้ามาครั้งเเรก เป็นค่าว่าง จะปิด Button
                  <Text></Text>
                ) : (
                  <View
                    style={{
                      backgroundColor: "#ffffffff",
                      paddingHorizontal: 12,
                      paddingVertical: 6,
                      borderRadius: 20,
                      // เส้นขอบ
                      borderWidth: 1,
                      borderColor: "#868686ff",
                    }}
                  >
                    <Text>{selectedPointName}</Text>
                  </View>
                  // <Card_list
                  //   text={selectedPointName || "Select point"}
                  //   isSelected={true}
                  // />
                )}

                <Ionicons name="chevron-forward" size={18} color="#636363ff" />
              </View>
            </TouchableOpacity>
            <View
              style={{ width: "100%", height: 1, backgroundColor: "#868686ff" }}
            />
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: "#636363ff",
                }}
              >
                Contact Phone (Option)
              </Text>
              <TextInput
                placeholder="Enter Phone Number"
                placeholderTextColor="#999999"
                keyboardType="number-pad"
                value={phone}
                onChangeText={setPhone}
              />
            </View>
          </View>
        </View>
      </View>
      {/* Set off Button */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 10,
          //backgroundColor: "#EEF2FF",
          paddingBottom: insets.bottom + 20,
        }}
      >
        {button_call ? (
          <TouchableOpacity
            activeOpacity={0.85}
            style={{ borderRadius: 30, overflow: "hidden" }}
            onPress={handleCallRobot}
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
                Call Robot
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <View style={{ borderRadius: 30, overflow: "hidden" }}>
            <View
              style={{
                height: 54,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
                backgroundColor: "#bcbcbcff",
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
                Call Robot
              </Text>
            </View>
          </View>
        )}
      </View>
    </LinearGradient>
  );
}
