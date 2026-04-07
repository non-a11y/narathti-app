import { View, Text, Image } from "react-native";
import Header from "../components/header";
import { Ionicons } from "@expo/vector-icons";
import { pickupStyles, globalStyles } from "../styles/mystyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function pickup() {
  const insets = useSafeAreaInsets();
  return (
    <View style={pickupStyles.container}>
      <Header />
      <Text style={globalStyles.textheader}>Pickup/Delivery assistance</Text>
      <View
        style={[
          pickupStyles.ios,
          pickupStyles.android,
          {
            flex: 1,
            backgroundColor: "#ffffffff",
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 30,
          },
        ]}
      >
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#E8E8E8",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ marginLeft: 20 }}>Choose a robot</Text>
          <Ionicons
            name="caret-back-sharp"
            size={20}
            color="#000000ff"
            style={{ marginRight: 20, transform: [{ rotate: "-180deg" }] }}
          />
        </View>
        <View style={{alignItems: "center"}}>
           <Image 
            style={{
              width: 100,
              height: 80,
              resizeMode: "contain",
              //backgroundColor: "#0a60ff",
            }}
            source={require("../assets/icon/Choose_your.png")}
            />
          <Text>Choose your delivery staff</Text>
        </View>
      </View>
      <View
        style={[
          pickupStyles.ios,
          pickupStyles.android,
          {
            flex: 2,
            backgroundColor: "#ffffffff",
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 30,
          },
        ]}
      ></View>
      <View
        style={{
          backgroundColor: "#0a60ff",
          height: 50,
          width: "90%",
          alignSelf: "center",
          borderRadius: 25,
          marginTop: 20,
          // เพิ่ม marginBottom ไม่ให้ปุ่มติดขอบแผ่นกระดาษขาวด้านล่างมากเกินไป
          marginBottom: 100 + Math.max(insets.bottom, 0),
          // จัดตำแหน่งกึ่งกลางด้วย Flexbox แทนการดัน Component ด้วย margin
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#ffffff",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Call
        </Text>
      </View>
    </View>
  );
}
