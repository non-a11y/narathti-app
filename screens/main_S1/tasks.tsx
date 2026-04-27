import { View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../components/header";
import { globalStyles, main } from "../../styles/mystyles";
import { StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// 1. Import useNavigation hook จาก React Navigation
import { useNavigation } from "@react-navigation/native";

export type RootStackParamList = {
  Home: undefined;
  Tasks: undefined;
  Pickup: undefined;
  Management: undefined;
  SOS: undefined;
  S1_fixed_point_reception: undefined;
  S1_security_patrol: undefined;
  S1_mobile_reception: undefined;
  S1_work_plan: undefined;
  S1_settings: undefined;
};

export default function Tasks() {
  const insets = useSafeAreaInsets();

  // 2. เรียกใช้ useNavigation เพื่อได้ object navigation
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={globalStyles.container}>
      <Header />

      <Text style={main.textheader}>Project Name</Text>

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
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 20,
          },
        ]}
      >
        {/* card 1 */}
        <View
          style={[
            globalStyles.android,
            globalStyles.ios,
            {
              backgroundColor: "#fbfbfbff",
              shadowColor: "#5e66ffff",
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderRadius: 30,
            },
          ]}
        >
          <View
            style={{
              rowGap: 5,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#7f7f7fff",
              }}
            >
              Reception mode
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#7f7f7fff",
              }}
            >
              Joy will start reception work at the designated location or
              according to the selected route
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            {/* card 1 button fixed-point reception */}
            <TouchableOpacity
              onPress={() => navigation.navigate("S1_fixed_point_reception")}
              style={{
                backgroundColor: "#A8ACFF",
                borderRadius: 40,
                paddingVertical: 10,
                paddingHorizontal: 30,
                alignItems: "center",
                justifyContent: "center",
                // กรอบ
                borderWidth: 1,
                borderColor: "#7277FF",
              }}
            >
              <Text
                style={{
                  color: "#ffffffff",
                  fontSize: 14,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Fixed - point{"\n"}reception
              </Text>
            </TouchableOpacity>
            {/* card 2 button mobile reception */}
            <TouchableOpacity
              onPress={() => navigation.navigate("S1_mobile_reception")}
              style={{
                backgroundColor: "#A8ACFF",
                borderRadius: 40,
                paddingVertical: 10,
                paddingHorizontal: 40,
                alignItems: "center",
                justifyContent: "center",
                // กรอบ
                borderWidth: 1,
                borderColor: "#7277FF",
              }}
            >
              <Text
                style={{
                  color: "#ffffffff",
                  fontSize: 14,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Mobile{"\n"}reception
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* card 2 */}
        <View
          style={[
            globalStyles.android,
            globalStyles.ios,
            {
              backgroundColor: "#fbfbfbff",
              shadowColor: "#5e66ffff",
              paddingHorizontal: 20,
              paddingVertical: 20,
              borderRadius: 30,
              marginTop: 30,
            },
          ]}
        >
          <View
            style={{
              rowGap: 5,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#7f7f7fff",
              }}
            >
              Security patrol
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#7f7f7fff",
              }}
            >
              after clicking patrol,joy will go to the designated place to start
              patrolling
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            {/* card 3 button security patrol */}
            <TouchableOpacity
              onPress={() => navigation.navigate("S1_security_patrol")}
              style={{
                backgroundColor: "#A8ACFF",
                borderRadius: 40,
                paddingVertical: 20,
                paddingHorizontal: 20,
                alignItems: "center",
                justifyContent: "center",
                // กรอบ
                borderWidth: 1,
                borderColor: "#7277FF",
              }}
            >
              <Text
                style={{
                  color: "#ffffffff",
                  fontSize: 14,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Security patrol
              </Text>
            </TouchableOpacity>
            {/* card 4 button Patrol record  */}
            <View
              style={{
                backgroundColor: "#A8ACFF",
                borderRadius: 40,
                paddingVertical: 20,
                paddingHorizontal: 30,
                alignItems: "center",
                justifyContent: "center",
                // กรอบ
                borderWidth: 1,
                borderColor: "#7277FF",
              }}
            >
              <Text
                style={{
                  color: "#ffffffff",
                  fontSize: 14,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Patrol record
              </Text>
            </View>
          </View>
        </View>

        {/* 2 button */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
            width: "100%",
          }}
        >
          {/* button work plan */}
          <TouchableOpacity
            onPress={() => navigation.navigate("S1_work_plan")}
            style={{
              backgroundColor: "#FFE4A1",
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 40,
              // กรอบ
              borderWidth: 1,
              borderColor: "#fdb500ff",
            }}
          >
            <Text
              style={{
                color: "#555555",
                fontSize: 14,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Work plan
            </Text>
          </TouchableOpacity>

          {/* button settings */}
          <TouchableOpacity
            onPress={() => navigation.navigate("S1_settings")}
            style={{
              backgroundColor: "#FFE4A1",
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 40,
              // กรอบ
              borderWidth: 1,
              borderColor: "#fdb500ff",
            }}
          >
            <Text
              style={{
                color: "#555555",
                fontSize: 14,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Settings
            </Text>
          </TouchableOpacity>
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
