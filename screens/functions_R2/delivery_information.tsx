import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { globalStyles } from "../../styles/mystyles";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Header_sub_functions from "../../src/components/header_sub_functions";
import Card_list from "../../src/components/card_list";
import { API_BASE_URL } from "../../src/config";
import { StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  delivery_information: {
    uuid: string;
    target?: string;
    returnTab?: "TabR2" | "TabT1";
    returnScreen?: "Pickup";
    currentFrom?: string;
    currentTo?: string;
    currentPhone?: string;
  };
  TabR2: {
    screen: "Pickup";
    params: {
      returnedPointName?: string;
      returnedPhone?: string;
      target?: string;
      currentFrom?: string;
      currentTo?: string;
      currentPhone?: string;
    };
  };
  TabT1: {
    screen: "Pickup";
    params: {
      returnedPointName?: string;
      returnedPhone?: string;
      target?: string;
      currentFrom?: string;
      currentTo?: string;
      currentPhone?: string;
    };
  };
  Pickup: {
    returnedPointName?: string;
    returnedPhone?: string;
    target?: string;
    currentFrom?: string;
    currentTo?: string;
    currentPhone?: string;
  };
};

export default function Delivery_information() {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, "delivery_information">>();

  const [points, setPoints] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPointName, setSelectedPointName] =
    useState<string>("Choose a site");
  const [phonePrefix, setPhonePrefix] = useState<string>("+66");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // รับ uuid ของหุ่นยนต์จาก navigation params
        const uuid = (route.params as any)?.uuid;
        if (!uuid) {
          setError("Robot UUID not provided");
          setLoading(false);
          return;
        }

        // ดึง robot detail เพื่อหา mapUuid
        const robotRes = await fetch(`${API_BASE_URL}/api/robots/${uuid}`);
        if (!robotRes.ok) throw new Error("Failed to fetch robot detail");
        const robotJson = await robotRes.json();
        const robotData = robotJson.data || robotJson;
        const mapUuid = robotData?.mapUuid;
        if (!mapUuid) {
          setError("Map UUID not found for this robot");
          setLoading(false);
          return;
        }
        const res = await fetch(
          `${API_BASE_URL}/api/maps/${mapUuid}/points`,
        );
        if (!res.ok) throw new Error("Failed to fetch map points");
        const data = await res.json();

        // รองรับโครงสร้าง response ได้หลายรูปแบบ
        let list: any[] = [];
        if (Array.isArray(data)) list = data;
        else if (data && Array.isArray(data.data)) list = data.data;
        else if (data && data.data && Array.isArray(data.data.list))
          list = data.data.list;

        // กรอง DEFAULT_CHARGE_BASE ออก
        const filteredList = list.filter(
          (item: any) => item.pointGroupType !== "DEFAULT_CHARGE_BASE",
        );
        setPoints(filteredList);
      } catch (err) {
        console.error("Error fetching map points:", err);
        setError(err instanceof Error ? err.message : String(err));
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
      <Header_sub_functions title="Delivery Information" />

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
              minHeight: 100,
              backgroundColor: "#FFFFFF",
              borderRadius: 30,
              overflow: "hidden",
              //alignItems: "center",
              shadowColor: "#5e76ffff",
              paddingVertical: 20,
              paddingHorizontal: 20,
            },
          ]}
        >
          {/* Point of departure */}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={headerStyles.text_left}>Point of departure</Text>
            <Text
              style={[
                headerStyles.text_right,
                selectedPointName !== "Choose a site" && { color: "#2979FF" }, // ถ้าเลือก point เปลี่ยนสี
              ]}
            >
              {selectedPointName}
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#E0E0E0",
              marginVertical: 10,
            }}
          />
          {/* Destination */}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={headerStyles.text_left}>Delivery phone No.</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TextInput
                style={headerStyles.text_right}
                placeholder="+66"
                placeholderTextColor="#8a8a8aff"
                keyboardType="number-pad"
                value={phonePrefix}
                onChangeText={setPhonePrefix}
              />
              <View
                style={{
                  width: 1,
                  height: 20,
                  backgroundColor: "#8a8a8aff",
                }}
              />
              <TextInput
                style={headerStyles.text_right}
                placeholder="Optional"
                placeholderTextColor="#8a8a8aff"
                keyboardType="number-pad"
                maxLength={10}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          </View>
        </View>

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
              width: "90%",
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
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "center",
            columnGap: 10,
            rowGap: 20,
          }}
        >
          {loading ? (
            <Text style={{ color: "#999" }}>Loading...</Text>
          ) : error ? (
            <Text style={{ color: "#ff4444" }}>{error}</Text>
          ) : points.length > 0 ? (
            // ─── ระบบค้นหาและกรองรายการจุด ──────────────────────────────────
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

              // 3. แสดงผลรายการที่กรองผ่านแล้วออกมาเป็น Card_list
              return filtered.map((point, index) => (
                <Card_list
                  key={index}
                  text={point.name}
                  isSelected={selectedPointName === point.name}
                  onPress={() => setSelectedPointName(point.name)}
                />
              ));
            })()
          ) : (
            <Text style={{ color: "#999" }}>No locations found</Text>
          )}
        </View>
      </View>
      {/* Set off Button */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 10,
          backgroundColor: "#EEF2FF",
          paddingBottom: insets.bottom + 20,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.85}
          style={{ borderRadius: 30, overflow: "hidden" }}
          onPress={() => {
            if (selectedPointName === "Choose a site") {
              alert("Please select a point");
              return;
            }
            const { target, returnTab, returnScreen } = route.params ?? {};
            const fullPhone = phoneNumber
              ? `${phonePrefix}${phoneNumber}`
              : "";
            
            if (returnTab === "TabR2") {
              console.log("Delivery_info returning to TabR2 with params:", {
                returnedPointName: selectedPointName,
                target: target,
              });
              navigation.navigate({
                name: "TabR2",
                params: {
                  screen: returnScreen as "Pickup",
                  params: {
                    returnedPointName: selectedPointName,
                    returnedPhone: fullPhone || route.params?.currentPhone,
                    target: target,
                    currentFrom: route.params?.currentFrom,
                    currentTo: route.params?.currentTo,
                    currentPhone: route.params?.currentPhone,
                  },
                },
                merge: true,
              });
            } else if (returnTab === "TabT1") {
              navigation.navigate({
                name: "TabT1",
                params: {
                  screen: returnScreen as "Pickup",
                  params: {
                    returnedPointName: selectedPointName,
                    returnedPhone: fullPhone || route.params?.currentPhone,
                    target: target,
                    currentFrom: route.params?.currentFrom,
                    currentTo: route.params?.currentTo,
                    currentPhone: route.params?.currentPhone,
                  },
                },
                merge: true,
              });
            } else {
              // สำรองในกรณีที่ไม่ได้ส่ง Tab/Screen มา
              console.log("Delivery_info returning to Pickup (Fallback) with params:", {
                returnedPointName: selectedPointName,
                target: target,
              });
              navigation.navigate({
                name: "Pickup",
                params: {
                  returnedPointName: selectedPointName,
                  returnedPhone: fullPhone || route.params?.currentPhone,
                  target: target,
                  currentFrom: route.params?.currentFrom,
                  currentTo: route.params?.currentTo,
                  currentPhone: route.params?.currentPhone,
                },
                merge: true,
              });
            }
          }}
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
              OK
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const headerStyles = StyleSheet.create({
  text_left: {
    fontSize: 16,
    color: "#1A1A2E",
    fontWeight: "500",
  },
  text_right: {
    fontSize: 14,
    color: "#8a8a8aff",
    fontWeight: "600",
  },
});
