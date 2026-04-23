import { View, Text, Image, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../components/header";
import { globalStyles, main } from "../../styles/mystyles";
import { StyleSheet } from "react-native";
import Card_function from "../../components/card_function";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Tasks: undefined;
  Pickup: undefined;
  Management: undefined;
  SOS: undefined;
  MultiPointDelivery: undefined;
  Cruise: undefined;
  Music: undefined;
  Lead_the_way: undefined;
  Reception: undefined;
};

export type TaskItem = {
  id: string;
  text: string;
  image: any;
  screen: keyof RootStackParamList;
};

const data: TaskItem[] = [
  {
    id: "1",
    text : "Multi-Point\nDelivery",
    image : require("../../assets/icon/multi-point_delivery.png"),
    screen: "MultiPointDelivery"
  },
  {
    id: "2",
    text : "Cruise",
    image : require("../../assets/icon/cruise.png"),
    screen: "Cruise"
  },
  {
    id: "3",
    text : "Music",
    image : require("../../assets/icon/musics.png"),
    screen: "Music"
  },
  {
    id: "4",
    text : "Lead the way",
    image : require("../../assets/icon/lead the way.png"),  
    screen: "Lead_the_way"
  },
  {
    id: "5",
    text : "Reception",
    image : require("../../assets/icon/reception.png"),
    screen: "Reception"
  },
];

// 1. Import useNavigation hook จาก React Navigation
import { useNavigation } from "@react-navigation/native";

export default function tasks() {
  const insets = useSafeAreaInsets();

  // 2. เรียกใช้ useNavigation เพื่อได้ object navigation
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
            justifyContent: "center",
            
        
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