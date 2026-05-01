import { View, Text, Image, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../src/components/header";
import { globalStyles, main } from "../../styles/mystyles";
import { StyleSheet } from "react-native";
import Card_function from "../../src/components/card_function";

// 1. Import useNavigation hook จาก React Navigation
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const data = [
  {
    id: "1",
    text: "Deliver goods",
    image: require("../../assets/icon/im_functions_R2/deliver.webp"),
    screen: "Deliver",
  },
  {
    id: "2",
    text: "Cruise show",
    image: require("../../assets/icon/im_functions_R2/cruise_r2.webp"),
    screen: "Cruise_r2",
  },
  {
    id: "3",
    text: "Reception",
    image: require("../../assets/icon/im_functions_R2/reception_r2.webp"),
    screen: "Reception_r2",
  },
  {
    id: "4",
    text: "Lead the way",
    image: require("../../assets/icon/im_functions_R2/lead.webp"),
    screen: "Lead_the_way_r2",
  },
  {
    id: "5",
    text: "Walkthrough",
    image: require("../../assets/icon/im_functions_R2/walkthrough.webp"),
    screen: "Walkthrough_r2",
  },
  {
    id: "6",
    text: "Take a Picture",
    image: require("../../assets/icon/im_functions_R2/take.webp"),
    screen: "Take_a_picture_r2",
  },
  {
    id: "7",
    text: "Upload Video",
    image: require("../../assets/icon/im_functions_R2/upload.webp"),
    screen: "Upload_video_r2",
  },
  {
    id: "8",
    text: "Settings",
    image: require("../../assets/icon/im_functions_R2/settings_r12.webp"),
    screen: "Settings_r2",
  },
];

export default function Tasks() {
  const insets = useSafeAreaInsets();

  // 2. เรียกใช้ useNavigation เพื่อได้ object navigation
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

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
          },
        ]}
      >
        <FlatList
          //key={3}
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 20,
          }}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            columnGap: 30,
            marginBottom: 20,
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card_function
              image={item.image}
              text={item.text}
              onPress={() => navigation.navigate(item.screen)}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});
