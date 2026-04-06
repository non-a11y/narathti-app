import { View, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../components/header";

import { homeStyles, globalStyles } from "../styles/mystyles";
import { Shadow } from "react-native-shadow-2";

export default function home() {
  const insets = useSafeAreaInsets();
  return (
    <View style={homeStyles.container}>
      <Header />

      {/* ----- CONTENT-----*/}
      
        <Text style={globalStyles.textheader}>Project Name</Text>

        <View
          style={[
            homeStyles.ios,
            homeStyles.android,
            {
              flex: 1,
              backgroundColor: "#ffffffff",
              marginHorizontal: 20,
              marginTop: 20,
              // ส่วนที่ 1: เว้นระยะด้านล่างเผื่อ TabBar ที่เป็น absolute position เพื่อไม่ให้ TabBar ทับเนื้อหา
              marginBottom: 100 + Math.max(insets.bottom, 0),
              borderRadius: 30,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",

              marginHorizontal: 20,
              marginTop: 20,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[homeStyles.textstyles, { fontSize: 20 }]}>
              JU0633
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "contain",
                  marginRight: 10,
                }}
                source={require("../assets/icon/power.png")}
              />
              <Text style={homeStyles.textstyles}>100%</Text>
            </View>
          </View>
          <Text
            style={[
              homeStyles.textstyles,
              { fontSize: 12, alignSelf: "center" },
            ]}
          >
            Click to Map
          </Text>
          <Image
            style={{
              // ส่วนที่ 2: ใช้ flex: 1 แทน height: "70%" เพื่อให้ความสูงยืดหรือตกลงตามพื้นที่ว่างที่เหลือโดยไม่ดันให้ layout พัง
              flex: 1,
              //width: "80%",
              alignSelf: "center",
              marginTop: 10,
              resizeMode: "contain",
              //backgroundColor: "#ff00eaff",
            }}
            source={require("../assets/icon/T1-007.png")}
          />
          <View
            style={{
              backgroundColor: "#0a60ff",
              height: 50,
              width: "90%",
              alignSelf: "center",
              borderRadius: 25,
              marginTop: 20,
              // ส่วนที่ 3: เพิ่ม marginBottom ไม่ให้ปุ่มติดขอบแผ่นกระดาษขาวด้านล่างมากเกินไป
              marginBottom: 20,
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
      </View>
  );
}
