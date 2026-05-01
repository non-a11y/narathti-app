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
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { API_BASE_URL } from "../../../src/config";
import CardDeilver from "../../../src/components/card_list";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Call_rebot_list_T1: {
    uuid: string;
    target?: string;
  };
};

export default function Call_rebot_list_T1() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, "Call_rebot_list_T1">>();
  const insets = useSafeAreaInsets();

  const [points, setPoints] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get robot uuid from navigation params
        const { uuid } = (route.params as any) ?? {};
        if (!uuid) {
          setError("Robot UUID not provided");
          setLoading(false);
          return;
        }
        // Fetch robot detail to obtain mapUuid
        const robotRes = await fetch(`${API_BASE_URL}/api/robots/${uuid}`);
        if (!robotRes.ok) {
          throw new Error("Failed to fetch robot detail");
        }
        const robotJson = await robotRes.json();
        const robotData = robotJson.data || robotJson;
        const mapUuid = robotData.mapUuid;
        if (!mapUuid) {
          throw new Error("mapUuid not found in robot data");
        }
        const res = await fetch(
          `${API_BASE_URL}/api/maps/${mapUuid}/points`,
        );
        if (!res.ok) {
          throw new Error("Failed to fetch map points");
        }
        const data = await res.json();
        // Handle response data structure
        let list = [];
        if (Array.isArray(data)) list = data;
        else if (data && Array.isArray(data.data)) list = data.data;
        else if (data && data.data && Array.isArray(data.data.list))
          list = data.data.list;

        // Filter out points where pointGroupType is DEFAULT_CHARGE_BASE
        const filteredList = list.filter(
          (item: any) => item.pointGroupType !== "DEFAULT_CHARGE_BASE",
        );
        setPoints(filteredList);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
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
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          {/* body */}
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
              <ActivityIndicator
                size="large"
                color="#0a60ff"
                style={{ width: "100%", marginTop: 20 }}
              />
            ) : error ? (
              <Text
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginTop: 20,
                  color: "#ff4444",
                }}
              >
                {error}
              </Text>
            ) : points.length > 0 ? (
              (() => {
                // 1. กรองรายการ points ตามชื่อที่พิมพ์ในช่อง Search (ตัวเล็ก/ใหญ่ไม่มีผล)
                const filtered = points.filter((p) =>
                  p.name.toLowerCase().includes(searchQuery.toLowerCase()),
                );
                // 2. ถ้ากรองแล้วไม่พบรายการที่ตรงกับคำค้นหาเลย ให้แสดงข้อความแจ้งเตือน
                if (filtered.length === 0) {
                  return (
                    <Text style={{ color: "#999", marginTop: 10 }}>
                      No results for "{searchQuery}"
                    </Text>
                  );
                }
                // 3. แสดงรายการที่กรองแล้ว
                return filtered.map((point, index) => (
                  <CardDeilver
                    key={index}
                    text={point.name}
                    onPress={() => {
                      const { target } = (route.params as any) ?? {};
                      
                      // ส่งค่ากลับไปที่หน้า Call_robot_T1 ด้วยพารามิเตอร์แทนการใช้ Callback
                      navigation.navigate({
                        name: "Call_robot_T1",
                        params: {
                          returnedPointName: point.name,
                          returnedPointUuid: point.pointUuid,
                          target: target,
                        },
                        merge: true,
                      } as any);
                    }}
                  />
                ));
              })()
            ) : (
              <Text
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginTop: 20,
                  color: "#999",
                }}
              >
                No locations found
              </Text>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
