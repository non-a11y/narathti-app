import { View, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../components/header";
import { taskStyles, globalStyles } from "../styles/mystyles";

export default function tasks() {
  const insets = useSafeAreaInsets();
  return (
    <View style={taskStyles.container}>
      <Header />

      {/* ----- CONTENT----- */}

      <Text style={globalStyles.textheader}>Project Name</Text>

      <View
        style={[
          taskStyles.ios,
          taskStyles.android,
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
            justifyContent: "space-between",
            alignItems: "center",

            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <View>
            <Image />
            <Text>Multi-Point Delivery</Text>
          </View>

          <View>
            <Image />
            <Text>Cruise</Text>
          </View>

          <View>
            <Image />
            <Text>Music</Text>
          </View>

          <View>
            <Image />
            <Text>Lead the way</Text>
          </View>

          <View>
            <Image />
            <Text>Reception</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
