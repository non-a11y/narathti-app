import { View, Text, StatusBar, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../styles/mystyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function header() {
  const insets = useSafeAreaInsets();
  return (
    <View >
      {/* -----Header----- 
      paddingTop = insets.top หลีกเลี่ยง notch + status bar
      */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true} // สำคัญ! ให้ status bar โปร่งใส
      />

      <View style={[globalStyles.header, { paddingTop: insets.top + 8 }]}>
        <View>
          <Ionicons
            name="chevron-back-circle-outline"
            size={35}
            color="black"
          />
        </View>
        <View>
          <Image
            style={{
              width: 120,
              height: 60,
              resizeMode: "contain",
              alignSelf: "center",
            }}
            source={require("../assets/icon/naratai.png")}
          />
        </View>
        <View>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/icon/user.png")}
          />
        </View>
      </View>
    </View>
  );
}
