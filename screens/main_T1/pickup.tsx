import { View, Text, Image } from "react-native";
import Header from "../../components/header";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles, main } from "../../styles/mystyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function pickup() {
  const insets = useSafeAreaInsets();
  return (
    <View style={globalStyles.container}>
      <Header />
      <Text style={main.textheader}>Pickup/Delivery assistance</Text>
      {/* Choose a robot */}
      <View
        style={[
          globalStyles.ios,
          globalStyles.android,
          {
            flex: 1,
            backgroundColor: "#ffffffff",
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 20,
          },
        ]}
      >
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#E8E8E8",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              fontSize: 20,
              fontWeight: "bold",
              color: "#7F7F7F",
            }}
          >
            Choose a robot
          </Text>
          <Ionicons
            name="caret-back-sharp"
            size={20}
            color="#7F7F7F"
            style={{ marginRight: 20, transform: [{ rotate: "-180deg" }] }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: 100,
                height: 80,
                resizeMode: "contain",
                //backgroundColor: "#0a60ff",
              }}
              source={require("../../assets/icon/Choose_your.png")}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "#7F7F7F",
              }}
            >
              Choose your delivery staff
            </Text>
          </View>
        </View>
      </View>
      {/* Address */}
      <View
        style={[
          globalStyles.ios,
          globalStyles.android,
          {
            flex: 2,
            backgroundColor: "#ffffffff",
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 30,
          },
        ]}
      >
        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            fontSize: 20,
            fontWeight: "bold",
            color: "#7F7F7F",
          }}
        >
          Address
        </Text>
        <View
          style={{
            width: "90%",
            height: 85,
            backgroundColor: "#EFEFEF",
            alignSelf: "center",
            borderRadius: 20,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 11,
              height: 11,
              backgroundColor: "#000DFF",
              marginLeft: 20,
              borderRadius: 25,
            }}
          ></View>
          <View
            style={{
              marginLeft: 20,
              rowGap: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Where to deliver from?
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#7F7F7F",
              }}
            >
              Click to fill in delivery information
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "90%",
            height: 85,
            backgroundColor: "#EFEFEF",
            alignSelf: "center",
            borderRadius: 20,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 11,
              height: 11,
              backgroundColor: "#FF6600",
              marginLeft: 20,
              borderRadius: 25,
            }}
          ></View>
          <View
            style={{
              marginLeft: 20,
              rowGap: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              To where?
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#7F7F7F",
              }}
            >
              Click to fill in receive information
            </Text>
          </View>
        </View>
      </View>

      {/* Call button */}
      <View
        style={{
          backgroundColor: "#0a60ff",
          height: 50,
          width: "90%",
          alignSelf: "center",
          borderRadius: 25,
          marginTop: 20,
          // เพิ่ม marginBottom ไม่ให้ปุ่มติดขอบแผ่นกระดาษขาวด้านล่างมากเกินไป
          marginBottom: 100 + Math.max(insets.bottom, 0), // เกิดเป็นค่าลบขึ้นมา ให้ใช้ 0 แทน
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
          Go
        </Text>
      </View>
    </View>
  );
}
