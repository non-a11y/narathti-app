import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { globalStyles } from "../../../styles/mystyles";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CardDeilver from "../../../components/card_list";

export default function Call_rebot_list() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [points, setPoints] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const mapUuid = "da00cd478541475f8cf21bb1cc8cb3ad"; // ไม่ต้อง ฟิก mapUuid
        const res = await fetch(`http://10.0.2.2:3000/api/maps/${mapUuid}/points`);
        const data = await res.json();

        // Handle response data structure
        let list = [];
        if (Array.isArray(data)) list = data;
        else if (data && Array.isArray(data.data)) list = data.data;
        else if (data && data.data && Array.isArray(data.data.list)) list = data.data.list;

        // Filter out "DEFAULT_CHARGE_BASE"
        const filteredList = list.filter(
          (point: any) => point.pointGroupType !== "DEFAULT_CHARGE_BASE"
        );

        setPoints(filteredList);
      } catch (error) {
        console.error("Error fetching map points:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPoints();
  }, []);

  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <LinearGradient
        colors={["#5B9BFF", "#3D7FFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingBottom: 80,
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
            // flex: 1 เต็มพื้นที่
            flex: 1,
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: 20,
            fontWeight: "600",
            // -36 คือขนาดของ Icon เพื่อให้ข้อความอยู่ตรงกลาง
            marginRight: 36,
          }}
        >
          Location List
        </Text>
      </LinearGradient>

      {/* White Settings Card */}
      <View
        style={{
          flex: 1,
          marginTop: -60,
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            backgroundColor: "#EAF2FF",
            alignSelf: "flex-end",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "#508EFF",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "#0060FE",
            }}
          >
            Custom Sart
          </Text>
        </View>
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              flex: 1,
              backgroundColor: "#ffffffff",
              borderRadius: 20,
              overflow: "hidden",
              paddingHorizontal: 10,
              shadowColor: "#5e76ffff",
              marginBottom: 50 + Math.max(insets.bottom, 0),
            },
          ]}
        >
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
                width: "100%",
                height: 40,
                borderRadius: 20,
                paddingHorizontal: 10,
              }}
              placeholder="Search"
              placeholderTextColor="#999999"
            />
          </View>
          {/* body */}
          <View>
            <Text>Recommended Location</Text>
          </View>
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "center",
              rowGap: 20,
              columnGap: 10,
            }}
          >
            {loading ? (
              <ActivityIndicator size="large" color="#0a60ff" style={{ width: "100%", marginTop: 20 }} />
            ) : points.length > 0 ? (
              points.map((point, index) => (
                <CardDeilver key={index} text={point.name} />
              ))
            ) : (
              <Text style={{ width: "100%", textAlign: "center", marginTop: 20, color: "#999" }}>
                No locations found
              </Text>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
