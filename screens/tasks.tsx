import { View, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../components/header";
import { globalStyles } from "../styles/mystyles";

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
          <View style={{ alignItems: "center" }}>
            <Image
              style={{
                width: 90,
                height: 90,
                resizeMode: "contain",
              }}
              source={require("../assets/icon/multi-point_delivery.png")}
            />
            <Text>Multi-Point</Text>
            <Text>Delivery</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{
                width: 90,
                height: 90,
                resizeMode: "contain",
              }}
              source={require("../assets/icon/cruise.png")}
            />
            <Text>Cruise</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{
                width: 90,
                height: 90,
                resizeMode: "contain",
              }}
              source={require("../assets/icon/music.png")}
            />
            <Text>Music</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Image
              style={{
                width: 90,
                height: 90,
                resizeMode: "contain",
              }}
              source={require("../assets/icon/lead the way.png")}
            />
            <Text>Lead the way</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Image
              style={{
                width: 90,
                height: 90,
                resizeMode: "contain",
              }}
              source={require("../assets/icon/reception.png")}
            />
            <Text>Reception</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
