import { View, Text, Image } from "react-native";
import Header from "../components/header";
import { globalStyles } from "../styles/mystyles";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function sos() {
  return (
    <View style={globalStyles.container}>
      <Header />
      {/* SOS Header */}
      <View
        style={{
          alignItems: "center",
          //backgroundColor:"#aa0101ff",
        }}
      >
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            //paddingHorizontal: 20,
            marginVertical: 10,
            columnGap: 20,

            //backgroundColor:"#aa0101ff"
          }}
        >
          <View
            style={{
              width: 36,
              height: 36,
              backgroundColor: "#CCCCCC", // สีเทาเหมือนรูปตัวอย่าง
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 12 }}>36 x 36</Text>
          </View>

          <View>
            <Text
              style={[
                globalStyles.defaulttextstyles,
                {
                  fontSize: 24,
                  fontWeight: "bold",
                  color: "#000000",
                },
              ]}
            >
              SOS
            </Text>
            <Text
              style={[globalStyles.defaulttextstyles, { color: "#000000" }]}
            >
              Need help from engineer?
            </Text>
          </View>
        </View>

        {/* SOS card */}
        <View
          style={[
            globalStyles.ios,
            globalStyles.android,
            {
              width: "90%",
              height: 120,
              backgroundColor: "#ffffffff",
              borderRadius: 10,
              flexDirection: "row",
              columnGap: 10,
              paddingHorizontal: 20,
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 40,
            },
          ]}
        >
          {/* cart right */}
          <View
            style={{
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginVertical: 5,
              }}
            >
              RJ0633
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 5,
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 20,
                  backgroundColor: "#80A0FF",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  Idle
                </Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    marginRight: 5,
                  }}
                  source={require("../assets/icon/power.png")}
                />
                <Text
                  style={[
                    globalStyles.defaulttextstyles,
                    {
                      fontSize: 14,
                      color: "#000000",
                    },
                  ]}
                >
                  100%
                </Text>
              </View>
            </View>
          </View>
          {/* cart light */}
          <View>
            <View
              style={{
                width: 137,
                height: 137,
                backgroundColor: "#D6EEFF",
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 180,
                  height: 180,
                  resizeMode: "contain",
                }}
                source={require("../assets/icon/T1-007.png")}
              />
            </View>
          </View>
        </View>

        {/* SOS button */}
        <View
          style={{
            width: "95%",
            marginTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* cart 1 */}
          <View
            style={[
              globalStyles.ios,
              globalStyles.android,
              {
                width: 125,
                height: 150,
                backgroundColor: "#ffffffff",
                borderRadius: 20,
                //justifyContent : 'center',
                //alignItems : 'center',
              },
            ]}
          >
            <LinearGradient
              colors={["#7699FF", "#0040FF"]}
              //start={{ x: 0, y: 0 }}
              //end={{ x: 0, y: 1 }}
              style={[
                globalStyles.ios,
                globalStyles.android,
                {
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 10,
                  marginTop: 10,
                  marginBottom: 5,
                  shadowColor: "#0745FF",
                  backgroundColor: "#ffffffff",
                },
              ]}
            >
              <Foundation name="telephone" size={25} color="white" />
            </LinearGradient>
            <View
              style={{
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Voice Call
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: "#7F7F7F",
                }}
              >
                Fastest way to get support
              </Text>
            </View>
            {/* button call */}
            <LinearGradient
              colors={["#0022FF", "#4AB0FF"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={[
                globalStyles.ios,
                globalStyles.android,
                {
                  width: "90%",
                  height: 30,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  marginTop: 10,
                  shadowColor: "#0745FF",
                  backgroundColor: "#ffffffff",
                  columnGap: 5,
                },
              ]}
            >
              <Foundation name="telephone" size={20} color="white" />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  color: "#ffffffff",
                }}
              >
                Call Engineer
              </Text>
            </LinearGradient>
          </View>

          {/* cart 2 */}
          <View
            style={[
              globalStyles.ios,
              globalStyles.android,
              {
                width: 125,
                height: 150,
                backgroundColor: "#ffffffff",
                borderRadius: 20,
                //justifyContent : 'center',
                //alignItems : 'center',
              },
            ]}
          >
            <LinearGradient
              colors={["#7699FF", "#FF6ABC"]}
              //start={{ x: 0, y: 0 }}
              //end={{ x: 0, y: 1 }}
              style={[
                globalStyles.ios,
                globalStyles.android,
                {
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 10,
                  marginTop: 10,
                  marginBottom: 5,
                  shadowColor: "#FB6BBE",
                  backgroundColor: "#ffffffff",
                },
              ]}
            >
              <Ionicons name="videocam" size={25} color="white" />
            </LinearGradient>
            <View
              style={{
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Video Call
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: "#7F7F7F",
                }}
              >
                Real-time visual support
              </Text>
            </View>
            {/* button call */}
            <LinearGradient
              colors={["#FF76CC", "#4AB0FF"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={[
                globalStyles.ios,
                globalStyles.android,
                {
                  width: "90%",
                  height: 30,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  marginTop: 10,
                  shadowColor: "#4AB0FF",
                  backgroundColor: "#ffffffff",
                  columnGap: 5,
                },
              ]}
            >
              <Ionicons name="videocam" size={20} color="white" />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  color: "#ffffffff",
                }}
              >
                Start Video
              </Text>
            </LinearGradient>
          </View>

          {/* cart 3 */}
          <View
            style={[
              globalStyles.ios,
              globalStyles.android,
              {
                width: 125,
                height: 150,
                backgroundColor: "#ffffffff",
                borderRadius: 20,
                //justifyContent : 'center',
                //alignItems : 'center',
              },
            ]}
          >
            <LinearGradient
              colors={["#76CFFF", "#008CFF"]}
              //start={{ x: 0, y: 0 }}
              //end={{ x: 0, y: 1 }}
              style={[
                globalStyles.ios,
                globalStyles.android,
                {
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 10,
                  marginTop: 10,
                  marginBottom: 5,
                  shadowColor: "#0B93FF",
                  backgroundColor: "#ffffffff",
                },
              ]}
            >
              <Ionicons name="chatbubbles" size={25} color="white" />
            </LinearGradient>
            <View
              style={{
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Live Chat
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: "#7F7F7F",
                }}
              >
                Send message to engineer
              </Text>
            </View>
            {/* button call */}
            <LinearGradient
              colors={["#0022FF", "#4AB0FF"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={[
                globalStyles.ios,
                globalStyles.android,
                {
                  width: "90%",
                  height: 30,
                  borderRadius: 20,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  marginTop: 10,
                  shadowColor: "#0745FF",
                  backgroundColor: "#ffffffff",
                  columnGap: 5,
                },
              ]}
            >
              <Ionicons
                name="chatbubble-ellipses-sharp"
                size={20}
                color="white"
                //style={{ transform: [{ rotate: "-180deg" }] }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  color: "#ffffffff",
                }}
              >
                Start Chat
              </Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  );
}
