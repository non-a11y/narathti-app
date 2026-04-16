import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import { globalStyles, cruiseStyles } from "../../../../styles/mystyles";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import CardCruise from "../../../../components/card_list";
import CardSelect from "./card_standby";
import Header_sub_functions from "../../../../components/header_sub_functions";

export default function standby_point() {
  // ใช้ State selectedPoints เก็บ Array ของชื่อจุดที่เลือกแทน
  const [selectedPoints, setSelectedPoints] = useState<string[]>([]);
  const insets = useSafeAreaInsets();

  // ฟังก์ชันสำหรับเพิ่มจุด เมื่อกดพอยต์จากด้านล่าง
  const handleAddPoint = (point: string) => {
    // ป้องกันการเพิ่มจุดซ้ำ ถ้ารายชื่อนี้ยังไม่มีใน Array ถึงจะเพิ่มเข้าไป
    if (!selectedPoints.includes(point)) {
      setSelectedPoints([...selectedPoints, point]);
    }
  };

  // ฟังก์ชันสำหรับลบจุดที่เลือกออก
  const handleDeletePoint = (index: number) => {
    const newPoints = [...selectedPoints];
    newPoints.splice(index, 1); // ลบจุดที่ตำแหน่ง (index) นั้นๆ จำนวน 1 ตัวออก
    setSelectedPoints(newPoints); // อัปเดต State เลขลำดับจะเลื่อนและเรียงใหม่ให้อัตโนมัติ
  };

  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Setting of wait points" />

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
              height: 150, // ✅ ขยายตามเนื้อหา มีความสูงขั้นต่ำ 100
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden", // ตัดส่วนที่เกินขอบ
              shadowColor: "#5e76ffff",
              marginBottom: 10,
            },
          ]}
        >
          {selectedPoints.length > 0 ? (
            <ScrollView>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  //columnGap: 10,
                  rowGap: 20,
                  marginHorizontal: 10,
                  marginVertical: 10,


                  //backgroundColor: "#ac0000ff",
                }}
              >
                {selectedPoints.map((point, index) => (
                  <CardSelect 
                    key={point} 
                    text={point} 
                    index={index} 
                    onDelete={() => handleDeletePoint(index)} 
                  />
                ))}
              </View>
            </ScrollView>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: "#7F7F7F",
                }}
              >
                Please click the point location to add a wait point
              </Text>
            </View>
          )}
        </View>

        {/* card ที่ 2 */}
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              flex: 1,
              backgroundColor: "#ffffffff",
              borderRadius: 20,
              overflow: "hidden",
              shadowColor: "#5e76ffff",
              marginBottom: 50 + Math.max(insets.bottom, 0),
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
              marginTop: 10,
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
            }}
          >
            <CardCruise text="Lobby001" onPress={() => handleAddPoint("Lobby001")} />
            <CardCruise text="Lobby002" onPress={() => handleAddPoint("Lobby002")} />
            <CardCruise text="Lobby003" onPress={() => handleAddPoint("Lobby003")} />
          </View>
        </View>
      </View>

    </View>
  );
}
