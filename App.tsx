import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // เพิ่ม Stack

import MultiPointDelivery from "./screens/function/Multi_Point_Delivery";
import Music from "./screens/function/music";

import Home from "./screens/main/home";
import Tasks from "./screens/main/tasks";
import Pickup from "./screens/main/pickup";
import Management from "./screens/main/management";
import SOS from "./screens/main/sos";

import CustomTabBar from "./components/CustomTabBar";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); // สร้าง Stack Navigator

// แยก Tab ออกมาเป็น Component ต่างหาก
function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tasks" component={Tasks} />
      <Tab.Screen name="Pickup" component={Pickup} />
      <Tab.Screen name="Management" component={Management} />
      <Tab.Screen name="SOS" component={SOS} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* Stack ครอบนอกสุด เพื่อให้ navigate ไปหน้าอื่นได้ */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* หน้าหลักคือ Tab ทั้งหมด */}
          <Stack.Screen name="Main" component={TabNavigator} />

          {/* หน้าที่เปิดทับ Tab Bar */}
          <Stack.Screen
            name="MultiPointDelivery"
            component={MultiPointDelivery}
          />
          <Stack.Screen name="Music" component={Music} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
