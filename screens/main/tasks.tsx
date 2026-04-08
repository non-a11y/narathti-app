import { View, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../components/header";
import { globalStyles } from "../../styles/mystyles";
import { StyleSheet } from "react-native";
import Card_function from "../../components/card_function";

// 1. Import useNavigation hook จาก React Navigation
import { useNavigation } from "@react-navigation/native";

export default function tasks() {
  const insets = useSafeAreaInsets();

  // 2. เรียกใช้ useNavigation เพื่อได้ object navigation
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Header />

      <Text style={globalStyles.textheader}>Project Name</Text>

      <View
        style={[
          globalStyles.ios,
          globalStyles.android,
          {
            flex: 1,
            backgroundColor: "#ffffffff",
            marginHorizontal: 20,
            marginTop: 20,
            marginBottom: 100 + Math.max(insets.bottom, 0),
            borderRadius: 30,
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "center",
            columnGap: 30,
            rowGap: 20,
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          {/* 3. ส่ง onPress เข้า Card โดยใช้ navigation.navigate()
              พร้อมระบุชื่อ Screen ที่ต้องการไป */}
          <Card_function
            image={require("../../assets/icon/multi-point_delivery.png")}
            text={"Multi-Point\nDelivery"}
            onPress={() => navigation.navigate("MultiPointDelivery" as never)}
          />
          <Card_function
            image={require("../../assets/icon/cruise.png")}
            text={"Cruise"}
          />
          <Card_function
            image={require("../../assets/icon/music.png")}
            text={"Music"}
            onPress={() => navigation.navigate("Music" as never)}
          />
          <Card_function
            image={require("../../assets/icon/lead the way.png")}
            text={"Lead the way"}
          />
          <Card_function
            image={require("../../assets/icon/reception.png")}
            text={"Reception"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});