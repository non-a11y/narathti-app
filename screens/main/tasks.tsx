import { View, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../components/header";
import { globalStyles } from "../../styles/mystyles";
import { StyleSheet } from "react-native";
import Card_function from "../../components/card_function";

export default function tasks() {
  const insets = useSafeAreaInsets();
  return (
    <View style={globalStyles.container}>
      <Header />

      {/* ----- CONTENT----- */}
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
            // เว้นระยะด้านล่างเผื่อ TabBar ที่เป็น absolute position เพื่อไม่ให้ TabBar ทับเนื้อหา
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
          <Card_function
            image={require("../../assets/icon/multi-point_delivery.png")}
            text={"Multi-Point\nDelivery"}
          />
          <Card_function
            image={require("../../assets/icon/cruise.png")}
            text={"Cruise"}
          />
          <Card_function
            image={require("../../assets/icon/music.png")}
            text={"Music"}
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
