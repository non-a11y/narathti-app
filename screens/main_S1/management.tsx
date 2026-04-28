import { View, Text, Image } from "react-native";
import Header from "../../src/components/header";
import { globalStyles } from "../../styles/mystyles";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Management() {
  return (
    <View style={globalStyles.container}>
      <Header />
      {/* card 1 */}
      <View
        style={[
          // เงา
          globalStyles.ios,
          globalStyles.android,
          {
            width: "90%",
            height: 230,
            backgroundColor: "#ffffffff",
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 20,
          },
        ]}
      >
        {/* header card 1 */}
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#D9F2FF",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={[
              globalStyles.defaulttextstyles,
              {
                marginLeft: 10,
                color: "#000000",
                fontWeight: "bold",
                fontSize: 20,
              },
            ]}
          >
            Data Statistics
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <Text style={globalStyles.defaulttextstyles}>Check more</Text>
            <Ionicons
              name="chevron-back"
              size={24}
              color="#7F7F7F"
              style={{ transform: [{ rotate: "180deg" }] }}
            />
          </View>
        </View>
        {/* body card 1 */}
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginTop: 10,
            }}
          >
            <View>
              <Text
                style={[
                  globalStyles.defaulttextstyles,
                  {
                    fontSize: 20,
                    color: "#0066FF",
                    fontWeight: "bold",
                  },
                ]}
              >
                153
              </Text>
              <Text style={[globalStyles.defaulttextstyles, { fontSize: 14 }]}>
                Cumulative times
              </Text>
            </View>
            <View>
              <Text
                style={[
                  globalStyles.defaulttextstyles,
                  {
                    fontSize: 20,
                    color: "#0066FF",
                    fontWeight: "bold",
                  },
                ]}
              >
                2.3
              </Text>
              <Text style={[globalStyles.defaulttextstyles, { fontSize: 14 }]}>
                Cumulative time (h)
              </Text>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: 20,
              marginTop: 10,
            }}
          >
            <Text
              style={[
                globalStyles.defaulttextstyles,
                {
                  fontSize: 20,
                  color: "#0066FF",
                  fontWeight: "bold",
                },
              ]}
            >
              200
            </Text>
            <Text style={[globalStyles.defaulttextstyles, { fontSize: 14 }]}>
              cumulative distance (m)
            </Text>
          </View>
          {/* เส้นขีด */}
          <View
            style={{
              width: "90%",
              height: 1,
              backgroundColor: "#7F7F7F",
              alignSelf: "center",
              marginTop: 10,
            }}
          ></View>
          {/* เนื้อหาใต้ขีด */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 20,
              marginTop: 10,
              columnGap: 10,
            }}
          >
            <AntDesign name="exclamation-circle" size={24} color="#7E7E7E" />
            <View>
              <Text style={[globalStyles.defaulttextstyles, { fontSize: 14 }]}>
                We have 1 friends in the project. We have been together for 29
                days
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* card 2 */}
      <View
        style={[
          globalStyles.ios,
          globalStyles.android,
          {
            width: "90%",
            height: 60,
            backgroundColor: "#ffffffff",
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            paddingLeft: 20,
          },
        ]}
      >
        <Image
          style={{
            width: 40,
            height: 40,
            resizeMode: "contain",
          }}
          source={require("../../assets/icon/order.png")}
        />
        <View style={{ rowGap: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Order data</Text>
          <Text style={{ fontSize: 12, color: "#7F7F7F" }}>
            Check the delivery order.
          </Text>
        </View>
      </View>

      {/* card 3 */}
      <View
        style={[
          globalStyles.ios,
          globalStyles.android,
          {
            width: "90%",
            height: 60,
            backgroundColor: "#ffffffff",
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            paddingLeft: 20,
          },
        ]}
      >
        <Image
          style={{
            width: 40,
            height: 40,
            resizeMode: "contain",
          }}
          source={require("../../assets/icon/Task.png")}
        />
        <View style={{ rowGap: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Task data</Text>
          <Text style={{ fontSize: 12, color: "#7F7F7F" }}>
            View the task execution details of the robot.
          </Text>
        </View>
      </View>
    </View>
  );
}
