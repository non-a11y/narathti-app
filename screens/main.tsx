import {
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { globalStyles } from "../styles/mystyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Card_main from "./card_main";

export type RobotData = {
  id: string;
  robot: string;
  name: string;
  jobId: string;
  battery: number;
  status: "online" | "offline";
  image: any;
};

export default function Main() {
  const insets = useSafeAreaInsets();
  const [data, setData] = useState<RobotData[]>([]);
  const [loading, setLoading] = useState(true);

  // ─────────────────────────────────────────────────────────────
  // useEffect — รันครั้งเดียวตอน Component โหลดครั้งแรก
  // [] หมายถึง dependency array ว่าง → ไม่ re-run เมื่อ state เปลี่ยน
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    // ประกาศฟังก์ชัน async ข้างใน เพราะ useEffect callback เองเป็น async โดยตรงไม่ได้
    const fetchData = async () => {
      try {
        // ─── ขั้นที่ 1: ดึงรายชื่อหุ่นยนต์ทั้งหมด ────────────────────────
        const response = await fetch("http://10.0.2.2:3000/api/robots");
        const json = await response.json();

        let rawData: any[] = [];
        if (Array.isArray(json)) rawData = json;
        else if (json && Array.isArray(json.data)) rawData = json.data;
        else if (json && json.data && Array.isArray(json.data.list))
          rawData = json.data.list;
        else if (json && json.data && Array.isArray(json.data.data))
          rawData = json.data.data;
        else if (json && Array.isArray(json.list)) rawData = json.list;

        // ─── ขั้นที่ 2: ดึงข้อมูลแผนที่ทั้งหมด เพื่อเอา buildingNum ───────────
        let mapsList: any[] = [];
        try {
          const mapRes = await fetch("http://10.0.2.2:3000/api/maps");
          const mapJson = await mapRes.json();
          if (Array.isArray(mapJson)) mapsList = mapJson;
          else if (mapJson && Array.isArray(mapJson.data))
            mapsList = mapJson.data;
          else if (mapJson && mapJson.data && Array.isArray(mapJson.data.list))
            mapsList = mapJson.data.list;
        } catch (err) {
          console.error("Error fetching maps:", err);
        }

        // ─── ขั้นที่ 3: วนลูปเพื่อไปขอรายละเอียด (Detail) ของหุ่นแต่ละตัว ────────
        // เพื่อให้ได้ข้อมูลแบตเตอรี่ (power), mapUuid และ สถานะ (online) ที่แท้จริง
        const detailedRobots = await Promise.all(
          rawData.map(async (robot: any) => {
            try {
              if (!robot.uuid) return robot;
              const detailRes = await fetch(
                `http://10.0.2.2:3000/api/robots/${robot.uuid}`,
              );
              const detailJson = await detailRes.json();
              const detail = detailJson.data || detailJson;

              // รวมข้อมูลตั้งต้น กับ ข้อมูล detail ที่เพิ่งดึงมา
              return { ...robot, ...detail };
            } catch (err) {
              console.error(`Error fetching detail for ${robot.uuid}`, err);
              return robot;
            }
          }),
        );

        // ─── ขั้นที่ 4: แปลงข้อมูลดิบให้ตรงกับ RobotData type ───────────
        const mappedData: RobotData[] = detailedRobots.map(
          (item: any, index: number) => {
            // เช็คสถานะออนไลน์
            let isOnline = false;
            if (item.online === true || item.online === "true") {
              isOnline = true;
            } else if (item.status !== undefined) {
              if (typeof item.status === "string") {
                isOnline =
                  item.status.toLowerCase() === "online" ||
                  item.status.toLowerCase() === "idle";
              } else if (item.status === 1 || item.status === true) {
                isOnline = true;
              }
            }

            // เช็คประเภทหุ่นยนต์
            let robotImage = undefined;
            let robotType = String(item.number);
            if (item.number && item.number.startsWith("J")) {
              robotType = "S1";
              robotImage = require("../assets/icon/S1/robot_s1.png");
            } else if (item.number && item.number.startsWith("R")) {
              robotType = "T1";
              robotImage = require("../assets/icon/T1-007.png");
            } else if (item.number && item.number.startsWith("H")) {
              robotType = "R2";
              robotImage = require("../assets/icon/R2-008.png");
            }

            // หา buildingNum จาก mapList โดยเทียบ mapUuid จากหุ่นยนต์
            let buildingName = "demo_CPF";
            if (item.mapUuid) {
              const matchedMap = mapsList.find(
                (m: any) => m.mapUuid === item.mapUuid,
              );
              if (matchedMap && matchedMap.buildingNum) {
                buildingName = matchedMap.buildingNum;
              }
            }

            return {
              id: item.uuid || String(index + 1),
              robot: robotType,
              // ใช้ buildingName จากแผนที่ หรือชื่อเล่น ถ้าหาแผนที่ไม่เจอ
              name: buildingName || item.nickname || "ไม่ระบุชื่อ",
              jobId: item.number || "HR1381",
              battery:
                item.power !== undefined
                  ? Math.round(parseFloat(item.power))
                  : 100,
              status: isOnline ? "online" : "offline",
              image: robotImage,
            };
          },
        );

        setData(mappedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    // เรียกใช้ฟังก์ชันที่ประกาศข้างบน
    fetchData();
  }, []); // [] = รันแค่ครั้งเดียวตอน mount (เหมือน componentDidMount ใน class component)
  return (
    <View style={globalStyles.container}>
      {/* -----Header----- 
      paddingTop = insets.top หลีกเลี่ยง notch + status bar
      */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true} // สำคัญ! ให้ status bar โปร่งใส
      />

      <View
        style={{
          backgroundColor: "#ffffffff",
          paddingHorizontal: 20,
          paddingBottom: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: insets.top + 8,
        }}
      >
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
      <Text
        style={{
          marginLeft: 20,
          color: "#000000ff",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Control Center
      </Text>

      {/* ส่วนแสดงรายชื่อหุ่นยนต์ */}
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={{ marginTop: 10 }}>Loading robots data...</Text>
        </View>
      ) : (
        <FlatList
          data={data} // ข้อมูล
          numColumns={2} // 👈 2 คอลัมน์
          keyExtractor={(item) => item.id} // key
          // จัดการช่องว่างระหว่างคอลัมน์
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 12,
          }}
          // 👈 ห่างซ้าย-ขวา และเว้นช่องว่างระหว่างแถว
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingTop: 20,
          }}
          // 👈 สร้าง card
          renderItem={({ item }) => (
            <Card_main
              uuid={item.id} // ส่ง UUID ไปให้ Card_main
              robot={item.robot}
              name={item.name}
              jobId={item.jobId}
              battery={item.battery}
              status={item.status}
              image={item.image}
            />
          )}
          // 👈 ไม่มีข้อมูล
          ListEmptyComponent={
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>No information found.</Text>
            </View>
          }
        />
      )}
    </View>
  );
}
