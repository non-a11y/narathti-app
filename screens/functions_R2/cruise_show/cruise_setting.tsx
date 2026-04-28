import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import React from "react";
import { globalStyles, button_function } from "../../../styles/mystyles";
import Header_sub_functions from "../../../src/components/header_sub_functions";

import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Card_re from "../../../src/components/card_button_function";

export default function Cruise_setting() {
  const navigation = useNavigation();
  const [autoWork, setAutoWork] = useState(false);
  const [repeatType, setRepeatType] = useState("one-time"); // 'one-time' or 'multiple'
  const [selectedDays, setSelectedDays] = useState([
    "Mon.",
    "Tue.",
    "Wed.",
    "Thu.",
    "Fri.",
    "Sat.",
    "Sun.",
  ]);
  const [takeleadtheway, setTakeleadtheway] = useState(false);
  const [taketakeapicture, setTaketakeapicture] = useState(false);

  // ฟังก์ชันเลือกวัน
  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const insets = useSafeAreaInsets();

  return (
    <View style={[globalStyles.container, { backgroundColor: "#EEF2FF" }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} // ← สำคัญ! ให้ status bar โปร่งใส
      />

      {/* Blue Gradient Header */}
      <Header_sub_functions title="Cruise Setting" />

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
              flex: 1,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden",
              alignItems: "center",
              shadowColor: "#5e76ffff",
              marginBottom: 20,
            },
          ]}
        >
          {/* body */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: "100%" }} // ให้ ScrollView กางเต็มร้อยเพื่อไม่ให้หด
            contentContainerStyle={{
              flexGrow: 1, // 100% ของพื้นที่ว่าง
              alignItems: "center", // จัดให้ของข้างในอยู่ตรงกลางแนวนอน
              paddingBottom: 40,
              marginTop: 20,
              rowGap: 10,
              paddingHorizontal: 10,
            }}
          >
            {/* Automatic Cruise Group */}
            <View
              style={[
                {
                  width: "100%",
                  backgroundColor: "#ffffffff",
                  borderRadius: 40,
                  paddingHorizontal: 20,
                  borderWidth: 2,
                  borderColor: "#78bef8ff",
                },
              ]}
            >
              {/* Row 1: Automatic Cruise */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingVertical: 15,
                }}
              >
                <Text style={button_function.text_left}>Automatic Cruise</Text>
                <Switch
                  value={autoWork}
                  onValueChange={setAutoWork}
                  trackColor={{ false: "#E0E0E0", true: "#8ae9a2ff" }}
                  thumbColor={autoWork ? "#34C759" : "#FFFFFF"}
                  ios_backgroundColor="#E0E0E0"
                />
              </View>

              {autoWork && (
                <>
                  <View
                    style={{
                      height: 1,
                      backgroundColor: "#EEEEEE",
                      width: "100%",
                    }}
                  />

                  {/* Row 2: Repeat */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingVertical: 15,
                    }}
                  >
                    <Text style={button_function.text_left}>Repeat</Text>

                    <View
                      style={{
                        flexDirection: "row",
                        backgroundColor: "#8AAFFF",
                        borderRadius: 20,
                        padding: 2,
                        width: 140,
                        height: 34,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => setRepeatType("one-time")}
                        style={{
                          flex: 1,
                          backgroundColor:
                            repeatType === "one-time"
                              ? "#ffffff"
                              : "transparent",
                          borderRadius: 18,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                            color:
                              repeatType === "one-time" ? "#8AAFFF" : "#ffffff",
                          }}
                        >
                          one - time
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setRepeatType("multiple")}
                        style={{
                          flex: 1,
                          backgroundColor:
                            repeatType === "multiple"
                              ? "#ffffff"
                              : "transparent",
                          borderRadius: 18,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                            textAlign: "center",
                            color:
                              repeatType === "multiple" ? "#8AAFFF" : "#ffffff",
                          }}
                        >
                          Multiple{"\n"}times
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View
                    style={{
                      height: 1,
                      backgroundColor: "#EEEEEE",
                      width: "100%",
                    }}
                  />

                  {/* Row 3: Date / Every Week */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingVertical: 15,
                    }}
                  >
                    <Text style={button_function.text_left}>
                      {repeatType === "one-time" ? "Date" : "Every Week"}
                    </Text>

                    {repeatType === "one-time" ? (
                      <View
                        style={{
                          backgroundColor: "#8AAFFF",
                          paddingVertical: 6,
                          paddingHorizontal: 15,
                          borderRadius: 8,
                        }}
                      >
                        <Text style={{ color: "#fff", fontSize: 12 }}>
                          yyyy-mm-dd
                        </Text>
                      </View>
                    ) : (
                      <View style={{ flexDirection: "row", columnGap: 2 }}>
                        {[
                          "Mon.",
                          "Tue.",
                          "Wed.",
                          "Thu.",
                          "Fri.",
                          "Sat.",
                          "Sun.",
                        ].map((day) => {
                          const isSelected = selectedDays.includes(day);
                          return (
                            <TouchableOpacity
                              key={day}
                              onPress={() => toggleDay(day)}
                              style={{
                                backgroundColor: isSelected
                                  ? "#8AAFFF"
                                  : "#E0E0E0",
                                width: 24,
                                height: 24,
                                borderRadius: 12,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Text
                                style={{
                                  color: isSelected ? "#fff" : "#888",
                                  fontSize: 8,
                                }}
                              >
                                {day}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    )}
                  </View>

                  <View
                    style={{
                      height: 1,
                      backgroundColor: "#EEEEEE",
                      width: "100%",
                    }}
                  />

                  {/* Row 4: Starting time */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingVertical: 15,
                    }}
                  >
                    <Text style={button_function.text_left}>Starting time</Text>
                    <View
                      style={{
                        backgroundColor: "#8AAFFF",
                        paddingVertical: 6,
                        paddingHorizontal: 15,
                        borderRadius: 8,
                      }}
                    >
                      <Text style={{ color: "#fff", fontSize: 12 }}>11:47</Text>
                    </View>
                  </View>
                </>
              )}
            </View>

            {/* Cruise Duration */}
            <Card_re text="Cruise Duration" value="Only once" />

            {/* Cruise Destination */}
            <Card_re text="Cruise Destination" value="Charging Pile" />

            {/* Loop Broadcast During Cruise */}
            <Card_re text="Loop Broadcast During Cruise" value="Yes" />

            {/* Broadcast Method */}
            <Card_re text="Broadcast Method" value="Fixed - point bro..." />

            {/* Voice Mode */}
            <Card_re text="Voice Mode" value="Chat while working" />

            {/* Door */}
            <Card_re text="Door" value="OpenSesame!" />

            {/* Walkthrough routes */}
            <Card_re text="Walkthrough routes" value="Test" />

            {/* Lead the Way */}
            <TouchableOpacity
              style={[
                //globalStyles.ios,
                //globalStyles.android,
                button_function.list,
              ]}
              // ความจางของปุ่มเมื่อกด
              activeOpacity={0.7}
            >
              {/* Text left */}
              <Text style={button_function.text_left}>Lead the Way</Text>
              {/* Text right */}
              <Switch
                value={takeleadtheway}
                onValueChange={setTakeleadtheway}
                trackColor={{ false: "#E0E0E0", true: "#8ae9a2ff" }}
                thumbColor={takeleadtheway ? "#34C759" : "#FFFFFF"}
                ios_backgroundColor="#E0E0E0"
              />
            </TouchableOpacity>

            {/* Select Leading List */}
            <Card_re text="Select Leading List" value="Test" />

            {/* Take a Picture */}
            <TouchableOpacity
              style={[
                globalStyles.ios,
                globalStyles.android,
                button_function.list,
              ]}
              // ความจางของปุ่มเมื่อกด
              activeOpacity={0.7}
            >
              {/* Text left */}
              <Text style={button_function.text_left}>Take a Picture</Text>
              {/* Text right */}
              <Switch
                value={taketakeapicture}
                onValueChange={setTaketakeapicture}
                trackColor={{ false: "#E0E0E0", true: "#8ae9a2ff" }}
                thumbColor={taketakeapicture ? "#34C759" : "#FFFFFF"}
                ios_backgroundColor="#E0E0E0"
              />
            </TouchableOpacity>
          </ScrollView>
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
                fontSize: 18,
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
