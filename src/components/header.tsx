import { View, StatusBar, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { headerStyles } from "../../styles/mystyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function header() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View>
      {/* -----Header----- 
      paddingTop = insets.top หลีกเลี่ยง notch + status bar
      */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true} // สำคัญ! ให้ status bar โปร่งใส
      />

      <View style={[headerStyles.header, { paddingTop: insets.top + 8 }]}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Main" as never)}
          activeOpacity={0.7}
        >
          <Ionicons
            name="chevron-back-circle-outline"
            size={35}
            color="black"
          />
        </TouchableOpacity>
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
        <View>
          <Image
            style={{
              width: 40,
              height: 40,
              resizeMode: "contain",
            }}
            source={require("../../assets/icon/user.png")}
          />
        </View>
      </View>
    </View>
  );
}
