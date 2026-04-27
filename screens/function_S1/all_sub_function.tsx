import { View, StatusBar, Image, Text, FlatList } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/mystyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Card_function from "../../components/card_function";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type all_sub_function = {
  S1_lead_the_way: undefined;
  S1_deliveries: undefined;
  S1_explain: undefined;
  S1_mask_detection: undefined;
  S1_music: undefined;
  S1_following: undefined;
  S1_video: undefined;
  S1_dance: undefined;
  S1_ai_chat: undefined;
  S1_video_call: undefined;
  S1_invitation: undefined;
  Tasks: undefined;
};

export type TaskItem = {
  id: string;
  text: string;
  image: any;
  screen: keyof all_sub_function;
};
const data: TaskItem[] = [
  {
    id: "1",
    text: "Lead the way",
    image: require("../../assets/icon/S1/s1_lead the way.png"),
    screen: "S1_lead_the_way",
  },
  {
    id: "2",
    text: "Guest\nInvitation",
    image: require("../../assets/icon/S1/s1_guest Invitation.png"),
    screen: "S1_invitation",
  },
  {
    id: "3",
    text: "Deliveries",
    image: require("../../assets/icon/S1/s1_deliveries.png"),
    screen: "S1_deliveries",
  },
  {
    id: "4",
    text: "Explain",
    image: require("../../assets/icon/S1/s1_explain.png"),
    screen: "S1_explain",
  },
  {
    id: "5",
    text: "Mask\nDetection",
    image: require("../../assets/icon/S1/s1_maskdetection.png"),
    screen: "S1_mask_detection",
  },
  {
    id: "6",
    text: "Music",
    image: require("../../assets/icon/S1/s1_music.png"),
    screen: "S1_music",
  },
  {
    id: "7",
    text: "Following",
    image: require("../../assets/icon/S1/s1_following.png"),
    screen: "S1_following",
  },
  {
    id: "8",
    text: "Video",
    image: require("../../assets/icon/S1/s1_video.png"),
    screen: "S1_video",
  },
  {
    id: "9",
    text: "Dance",
    image: require("../../assets/icon/S1/s1_dance.png"),
    screen: "S1_dance",
  },
  {
    id: "10",
    text: "AI Chat",
    image: require("../../assets/icon/S1/s1_AIChat.png"),
    screen: "S1_ai_chat",
  },
  {
    id: "11",
    text: "Video call",
    image: require("../../assets/icon/S1/s1_videocall.png"),
    screen: "S1_video_call",
  },
];

export default function All_sub_function() {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<all_sub_function>>();
  return (
    <View
      style={[
        globalStyles.container,
        {
          backgroundColor: "#EEF2FF",
          paddingHorizontal: 20,
        },
      ]}
    >
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
          backgroundColor: "#EEF2FF",
          paddingHorizontal: 20,
          paddingBottom: 10,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: insets.top + 8,
        }}
      >
        <View>
          <Image
            style={{
              width: 120,
              height: 60,
              resizeMode: "contain", // ปรับขนาดรูปให้พอดีกับกรอบ
              alignSelf: "center", // จัดให้อยู่ตรงกลาง
            }}
            source={require("../../assets/icon/naratai.png")}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              minHeight: 100, // ✅ ขยายตามเนื้อหา
              backgroundColor: "#FFFFFF",
              borderRadius: 30,
              overflow: "hidden",
              shadowColor: "#5e76ffff",
              paddingBottom: 20,
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            numColumns={3}
            contentContainerStyle={{
              paddingHorizontal: 20,
              paddingTop: 30,
            }}
            columnWrapperStyle={{
              justifyContent: "flex-start",

              columnGap: 30,
              marginBottom: 20,
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Card_function
                image={item.image}
                text={item.text}
                onPress={() => navigation.navigate(item.screen)}
              />
            )}
          />
        </View>
      </View>

      {/* Set off Button */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 16,
          backgroundColor: "#EEF2FF",
          paddingBottom: insets.bottom + 20,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Tasks")}
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
              END
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
