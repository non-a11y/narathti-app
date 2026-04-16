import {
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { globalStyles } from "../styles/mystyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Card_main from "./card_main";

const data = [
  {
    id: "1",
    robot: "T1",
    name: "task_1",
    jobId: "RJ0503",
    battery: 100,
    status: "online" as const,
    image: require("../assets/icon/T1-007.png"),
  },
  {
    id: "2",
    robot: "R2",
    name: "task_2",
    jobId: "HT0503",
    battery: 100,
    status: "offline" as const,
    image: require("../assets/icon/R2-008.png"),
  },
  {
    id: "3",
    robot: "R2",
    name: "task_3",
    jobId: "HT0503",
    battery: 100,
    status: "offline" as const,
    image: require("../assets/icon/R2-008.png"),
  },
  
];

export default function main() {
  const insets = useSafeAreaInsets();
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
    </View>
  );
}
