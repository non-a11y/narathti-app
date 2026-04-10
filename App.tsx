import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./screens/main";

// T1 — หน้าหลักของหุ่นยนต์ T1
import HomeT1 from "./screens/main_T1/home";
import TasksT1 from "./screens/main_T1/tasks";
import PickupT1 from "./screens/main_T1/pickup";
import ManagementT1 from "./screens/main_T1/management";
import SOST1 from "./screens/main_T1/sos";

// R2 — หน้าหลักของหุ่นยนต์ R2
import HomeR2 from "./screens/main_R2/home";
import TasksR2 from "./screens/main_R2/tasks";
import PickupR2 from "./screens/main_R2/pickup";
import ManagementR2 from "./screens/main_R2/management";
import SOSR2 from "./screens/main_R2/sos";

// function_T1 — หน้า Function ต่างๆ ที่เปิดทับ Tab Bar
import Reception from "./screens/function_T1/reception";
import Music from "./screens/function_T1/music";
import MultiPointDelivery from "./screens/function_T1/multi_point_delivery";
import Lead_the_way from "./screens/function_T1/Lead_the_way/Lead_the_way";
import Cruise from "./screens/function_T1/cruise/cruise";

//  function_R2 — หน้า Function ต่างๆ ที่เปิดทับ Tab Bar
import Deliver from "./screens/functions_R2/deliver/deliver_good";
import Cruise_r2 from "./screens/functions_R2/cruise_show";
import Reception_r2 from "./screens/functions_R2/reception/reception";
import Lead_the_way_r2 from "./screens/functions_R2/lead_the_way/lead_the_way";
import Walkthrough_r2 from "./screens/functions_R2/walkthrough";
import Take_a_picture_r2 from "./screens/functions_R2/take_a_picture";
import Upload_video_r2 from "./screens/functions_R2/upload_video";
import Settings_r2 from "./screens/functions_R2/settings/settings";

// TabBar — Custom Tab Bar ที่ใช้ร่วมกันทั้ง T1 และ R2
import CustomTabBar from "./components/custotabbar";

// สร้าง Navigator ทั้ง 2 ประเภท
const Tab = createBottomTabNavigator(); // สำหรับ Tab Bar ด้านล่าง
const Stack = createNativeStackNavigator(); // สำหรับเปลี่ยนหน้าแบบ Stack (มีประวัติย้อนกลับ)

// Tab Navigator ของหุ่นยนต์ T1
// แยกออกมาเป็น Component เพื่อให้ Stack ครอบได้
function TabNavigatorT1() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />} // ใช้ Custom Tab Bar แทน Default
      screenOptions={{ headerShown: false }} // ซ่อน Header ทุกหน้า
    >
      <Tab.Screen name="Home" component={HomeT1} />
      <Tab.Screen name="Tasks" component={TasksT1} />
      <Tab.Screen name="Pickup" component={PickupT1} />
      <Tab.Screen name="Management" component={ManagementT1} />
      <Tab.Screen name="SOS" component={SOST1} />
    </Tab.Navigator>
  );
}

// Tab Navigator ของหุ่นยนต์ R2
// โครงสร้างเหมือน T1 แต่ใช้หน้าของ R2 แทน
function TabNavigatorR2() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeR2} />
      <Tab.Screen name="Tasks" component={TasksR2} />
      <Tab.Screen name="Pickup" component={PickupR2} />
      <Tab.Screen name="Management" component={ManagementR2} />
      <Tab.Screen name="SOS" component={SOSR2} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    // SafeAreaProvider — ให้ทุกหน้าใช้ useSafeAreaInsets() เพื่อเว้นระยะ Notch และ Home Bar ได้
    <SafeAreaProvider>
      {/* NavigationContainer — ครอบสุดนอก ทำหน้าที่เก็บ Navigation State ทั้งหมด */}
      <NavigationContainer>
        {/* Stack Navigator — จัดการการเปลี่ยนหน้าแบบมีประวัติ (กด Back ย้อนกลับได้) */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Main — หน้าแรกสุด ใช้เลือกว่าจะเข้า Robot T1 หรือ R2 */}
          <Stack.Screen name="Main" component={Main} />

          {/* Robot Tabs — แต่ละ Robot มี Tab Bar แยกกัน
              navigate("TabT1") → เข้า Tab Bar ของ T1
              navigate("TabR2") → เข้า Tab Bar ของ R2 */}
          <Stack.Screen name="TabT1" component={TabNavigatorT1} />
          <Stack.Screen name="TabR2" component={TabNavigatorR2} />

          {/* Functions — หน้า Function ที่เปิดทับเต็มจอ ไม่มี Tab Bar
              เรียกด้วย navigation.navigate("ชื่อหน้า") จากทุกที่ใน App
              และกด Back กลับได้ด้วย navigation.goBack() */}
          <Stack.Screen
            name="MultiPointDelivery"
            component={MultiPointDelivery}
          />
          <Stack.Screen name="Music" component={Music} />
          <Stack.Screen name="Reception" component={Reception} />
          <Stack.Screen name="Lead_the_way" component={Lead_the_way} />
          <Stack.Screen name="Cruise" component={Cruise} />

          {/* Functions - R2 */}
          <Stack.Screen name="Deliver" component={Deliver} />
          <Stack.Screen name="Cruise_r2" component={Cruise_r2} />
          <Stack.Screen name="Reception_r2" component={Reception_r2} />
          <Stack.Screen name="Lead_the_way_r2" component={Lead_the_way_r2} />
          <Stack.Screen name="Walkthrough_r2" component={Walkthrough_r2} />
          <Stack.Screen
            name="Take_a_picture_r2"
            component={Take_a_picture_r2}
          />
          <Stack.Screen name="Upload_video_r2" component={Upload_video_r2} />
          <Stack.Screen name="Settings_r2" component={Settings_r2} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
