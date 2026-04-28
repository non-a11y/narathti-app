import { View, Text, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/mystyles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";


export default function Work_report() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
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
          paddingBottom: 20,
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
            marginRight: 36,
          }}
        >
          Work Report
        </Text>
      </LinearGradient>
      
      {/* White Settings Card */}
      <View
        style={{
          flex: 1,
          marginTop: 20,
          paddingHorizontal: 10,
         
        }}
      >
        <ScrollView style={{
         
        }}
        contentContainerStyle = {{
          //backgroundColor : '#da0707ff',
          paddingHorizontal: 10,
          rowGap: 20,
        }}
        >
        {/* Task times */}
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              minHeight: 100,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden", // กันไม่ให้เนื้อหาทะลุขอบที่โค้งมน
              //alignItems: "center",
              shadowColor: "#5e76ffff",
              paddingHorizontal: 20,
              paddingVertical: 10,
            },
          ]}
        >
          <Text>Task times</Text>
          <Text>
            There are 1 tasks in the recent 7d more than those in tha last 7d
          </Text>
        </View>

        {/* Robot state */}
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              minHeight: 100,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden", // กันไม่ให้เนื้อหาทะลุขอบที่โค้งมน
              //alignItems: "center",
              shadowColor: "#5e76ffff",
              paddingHorizontal: 20,
              paddingVertical: 10,
            },
          ]}
        >
          <Text>Robot state</Text>
          <Text>
            In the recent 7d, the number of robot users is the most at about
            15:00 every day.
          </Text>
        </View>

        {/* Robot service */}
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              minHeight: 100,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden", // กันไม่ให้เนื้อหาทะลุขอบที่โค้งมน
              //alignItems: "center",
              shadowColor: "#5e76ffff",
              paddingHorizontal: 20,
              paddingVertical: 10,
            },
          ]}
        >
          <Text>Robot service</Text>
          <Text>
            In the recent 7d, the total service hours are 0.0h more than than
            those of the last 7 days.
          </Text>
        </View>

         {/* Operation mileage */}
         <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              minHeight: 100,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              overflow: "hidden", // กันไม่ให้เนื้อหาทะลุขอบที่โค้งมน
              //alignItems: "center",
              shadowColor: "#5e76ffff",
              paddingHorizontal: 20,
              paddingVertical: 10,
            },
          ]}
        >
          <Text>Operation mileage</Text>
          <Text>
           In the recent 7d, the robot mileage is 2m more then that of the last 7 days.
          </Text>
        </View>
        </ScrollView>
      </View>
    </View>
  );
}
