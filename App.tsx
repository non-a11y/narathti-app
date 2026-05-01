import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RobotProvider } from "./contexts/RobotContext";

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
import Reception from "./screens/function_T1/reception/reception";
import Music from "./screens/function_T1/music";
import MultiPointDelivery from "./screens/function_T1/multi_point_delivery/main_multi_point_delivery";
import Lead_the_way from "./screens/function_T1/Lead_the_way";
import Cruise from "./screens/function_T1/cruise/cruise";

//  function_R2 — หน้า Function ต่างๆ ที่เปิดทับ Tab Bar
import Deliver from "./screens/functions_R2/deliver_good";
import Cruise_r2 from "./screens/functions_R2/cruise_show/cruise_show_main";
import Reception_r2 from "./screens/functions_R2/reception/reception";
import Lead_the_way_r2 from "./screens/functions_R2/lead_the_way";
import Walkthrough_r2 from "./screens/functions_R2/walkthrough";
import Take_a_picture_r2 from "./screens/functions_R2/take_a_picture";
import Upload_video_r2 from "./screens/functions_R2/upload_video";
import Settings_r2 from "./screens/functions_R2/settings/settings_main";
import mode_selection from "./screens/functions_R2/settings/mode_selection";

// S1 — หน้าหลักของหุ่นยนต์ S1
import HomeS1 from "./screens/main_S1/home";
import TasksS1 from "./screens/main_S1/tasks";
import PickupS1 from "./screens/main_S1/pickup";
import ManagementS1 from "./screens/main_S1/management";
import SOSS1 from "./screens/main_S1/sos";

// sub function_T1
import standby_point from "./screens/function_T1/multi_point_delivery/standby_point/standby_point";
import fetch_reminder from "./screens/function_T1/multi_point_delivery/fetch_reminder";
import notice_setting from "./screens/function_T1/multi_point_delivery/notice_setting";
import vice_mode from "./screens/function_T1/multi_point_delivery/vice_mode";
import reception_location from "./screens/function_T1/reception/reception_location";
import voice_mode from "./screens/function_T1/reception/voice_mode";
import greeting_words from "./screens/function_T1/reception/greeting_words";
import lead_the_list from "./screens/function_T1/reception/lead_the_list";
import Call_robot_T1 from "./screens/function_T1/Call_robot/Call_robot_T1";
import Call_rebot_list_T1 from "./screens/function_T1/Call_robot/Call_rebot_list_T1";

// sub function_R2
import cruise_shows from "./screens/functions_R2/cruise_show/cruise_show";
import select_route from "./screens/functions_R2/cruise_show/select_route/select_route";
import cruise_show_main from "./screens/functions_R2/cruise_show/cruise_show_main";
import cruise_show_select from "./screens/functions_R2/cruise_show/cruise_show_select";
import cruise_setting from "./screens/functions_R2/cruise_show/cruise_setting";
import walkthrough_routes from "./screens/functions_R2/reception/walkthrough_routes";
import leading_list from "./screens/functions_R2/reception/leading_list";
import reception_time from "./screens/functions_R2/reception/reception_time";
import reception_location_r2 from "./screens/functions_R2/reception/reception_location";
import voice_list from "./screens/functions_R2/reception/voice_list";
import about_status from "./screens/functions_R2/settings/about_status";
import password_protection from "./screens/functions_R2/settings/password_protection";
import battery_level from "./screens/functions_R2/settings/battery_level";
import voice_settings from "./screens/functions_R2/settings/voice_settings";
import volume from "./screens/functions_R2/settings/volume";
import deilvery_settings from "./screens/functions_R2/settings/deilvery_settings";
import guide_explanation_settings from "./screens/functions_R2/settings/guide_explanation_settings";
import media_settings from "./screens/functions_R2/settings/media_settings";
import language_setting from "./screens/functions_R2/settings/language_setting";
import theme_settings from "./screens/functions_R2/settings/theme_settings";
import Call_Robot_R2 from "./screens/functions_R2/Call_robot/Call_robot_R2";
import Call_rebot_list_R2 from "./screens/functions_R2/Call_robot/Call_rebot_list_R2";
import Work_report from "./screens/functions_R2/work_report";
import All_R2 from './screens/functions_R2/order_data/All';
import task_datas from "./screens/functions_R2/task_data/task_datas";
import delivery_information from "./screens/functions_R2/delivery_information";

// sub function_S1
import s1_fixed_point_reception from "./screens/function_S1/fixed_point_reception";
import s1_all_sub_function from "./screens/function_S1/all_sub_function";
import s1_ai_chat from "./screens/function_S1/sub_function/ai_chat";
import s1_dance from "./screens/function_S1/sub_function/dance";
import s1_deliveries from "./screens/function_S1/sub_function/deliveries";
import s1_explain from "./screens/function_S1/sub_function/explain";
import s1_following from "./screens/function_S1/sub_function/following";
import s1_lead_the_way from "./screens/function_S1/sub_function/lead_the_way/lead_the_way";
import s1_mask_detection from "./screens/function_S1/sub_function/mask_detection";
import s1_music from "./screens/function_S1/sub_function/music";
import s1_video_call from "./screens/function_S1/sub_function/video_call";
import s1_video from "./screens/function_S1/sub_function/video";
import s1_invitation from "./screens/function_S1/sub_function/invitation";
import s1_security_patrol from "./screens/function_S1/security_patrol";
import s1_mobile_reception from "./screens/function_S1/mobile_reception";
import s1_work_plan from "./screens/function_S1/work_plan";
import s1_settings from "./screens/function_S1/settings";

// sub function_settings_S1
import s1_initiative from "./screens/function_S1/sub_function_setting.tsx/initiative";
import s1_reception from "./screens/function_S1/sub_function_setting.tsx/reception";
import s1_advanced from "./screens/function_S1/sub_function_setting.tsx/advanced";
import s1_about from "./screens/function_S1/sub_function_setting.tsx/about";
import s1_patrol from "./screens/function_S1/sub_function_setting.tsx/patrol";
import s1_network from "./screens/function_S1/sub_function_setting.tsx/network";
import s1_sound from "./screens/function_S1/sub_function_setting.tsx/sound";

// TabBar — Custom Tab Bar ที่ใช้ร่วมกันทั้ง T1 และ R2
import CustomTabBar from "./src/components/custotabbar";

// types/navigation.ts
export type RootStackParamList = {
  // Main
  Main: undefined;

  // Tabs
  TabT1: undefined;
  TabR2: undefined;
  TabS1: undefined;

  // function_T1
  MultiPointDelivery: undefined;
  Music: undefined;
  Reception: undefined;
  Lead_the_way: undefined;
  Cruise: undefined;
  reception_location: undefined;
  standby_point: undefined;
  fetch_reminder: undefined;
  notice_setting: undefined;
  vice_mode: undefined;
  voice_mode: undefined;
  greeting_words: undefined;
  lead_the_list: undefined;
  Call_robot_T1: { uuid: string; target?: string };
  Call_rebot_list_T1: {
    uuid: string;
    target?: string;
  };

  // function_R2
  Deliver: undefined;
  Cruise_r2: undefined;
  Reception_r2: undefined;
  Lead_the_way_r2: undefined;
  Walkthrough_r2: undefined;
  Take_a_picture_r2: undefined;
  Upload_video_r2: undefined;
  Settings_r2: undefined;
  cruise_shows: undefined;
  select_route: undefined;
  cruise_show_main: undefined;
  cruise_show_select: undefined;
  cruise_setting: undefined;
  walkthrough_routes: undefined;
  leading_list: undefined;
  reception_time: undefined;
  reception_location_r2: undefined;
  voice_list: undefined;
  about_status: undefined;
  password_protection: undefined;
  battery_level: undefined;
  voice_settings: undefined;
  volume: undefined;
  deilvery_settings: undefined;
  guide_explanation_settings: undefined;
  media_settings: undefined;
  language_setting: undefined;
  theme_settings: undefined;
  mode_selection: undefined;
  Call_robot_R2: { uuid: string; target?: string };
  Call_rebot_list_R2: {
    uuid: string;
    target?: string;
  };
  Work_report: undefined;
  All_R2: undefined;
  Task_datas: undefined;
  delivery_information: { uuid: string; target?: string };

  // function_S1
  S1_fixed_point_reception: undefined;
  S1_all_sub_function: undefined;
  S1_ai_chat: undefined;
  S1_dance: undefined;
  S1_deliveries: undefined;
  S1_explain: undefined;
  S1_following: undefined;
  S1_invitation: undefined;
  S1_lead_the_way: undefined;
  S1_mask_detection: undefined;
  S1_music: undefined;
  S1_video_call: undefined;
  S1_video: undefined;
  S1_security_patrol: undefined;
  S1_mobile_reception: undefined;
  S1_work_plan: undefined;
  S1_settings: undefined;

  // sub function_settings_S1
  S1_initiative: undefined;
  S1_reception: undefined;
  S1_advanced: undefined;
  S1_about: undefined;
  S1_patrol: undefined;
  S1_network: undefined;
  S1_sound: undefined;
};

// สร้าง Navigator ทั้ง 2 ประเภท
const Tab = createBottomTabNavigator(); // สำหรับ Tab Bar ด้านล่าง
const Stack = createNativeStackNavigator<RootStackParamList>(); // สำหรับเปลี่ยนหน้าแบบ Stack (มีประวัติย้อนกลับ)

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

// Tab Navigator ของหุ่นยนต์ S1
// โครงสร้างเหมือน T1 แต่ใช้หน้าของ S1 แทน
function TabNavigatorS1() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeS1} />
      <Tab.Screen name="Tasks" component={TasksS1} />
      <Tab.Screen name="Pickup" component={PickupS1} />
      <Tab.Screen name="Management" component={ManagementS1} />
      <Tab.Screen name="SOS" component={SOSS1} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    // SafeAreaProvider — ให้ทุกหน้าใช้ useSafeAreaInsets() เพื่อเว้นระยะ Notch และ Home Bar ได้
    <RobotProvider>
    <SafeAreaProvider>
      {/* NavigationContainer — ครอบสุดนอก ทำหน้าที่เก็บ Navigation State ทั้งหมด */}
      <NavigationContainer>
        {/* Stack Navigator — จัดการการเปลี่ยนหน้าแบบมีประวัติ (กด Back ย้อนกลับได้) */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Main — หน้าแรกสุด ใช้เลือกว่าจะเข้า Robot T1 หรือ R2 */}
          <Stack.Screen name="Main" component={Main} />

          {/* Robot Tabs — แต่ละ Robot มี Tab Bar แยกกัน
              navigate("TabT1") → เข้า Tab Bar ของ T1
              navigate("TabR2") → เข้า Tab Bar ของ R2 
              navigate("TabS1") → เข้า Tab Bar ของ S1
          */}

          <Stack.Screen name="TabT1" component={TabNavigatorT1} />
          <Stack.Screen name="TabR2" component={TabNavigatorR2} />
          <Stack.Screen name="TabS1" component={TabNavigatorS1} />

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

          {/* sub function_T1 */}
          <Stack.Screen
            name="reception_location"
            component={reception_location}
          />
          <Stack.Screen name="standby_point" component={standby_point} />
          <Stack.Screen name="fetch_reminder" component={fetch_reminder} />
          <Stack.Screen name="notice_setting" component={notice_setting} />
          <Stack.Screen name="vice_mode" component={vice_mode} />
          <Stack.Screen name="voice_mode" component={voice_mode} />
          <Stack.Screen name="greeting_words" component={greeting_words} />
          <Stack.Screen name="lead_the_list" component={lead_the_list} />
          <Stack.Screen name="Call_robot_T1" component={Call_robot_T1} />
          <Stack.Screen name="Call_rebot_list_T1" component={Call_rebot_list_T1} />

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

          {/* Functions - S1 */}
          <Stack.Screen
            name="S1_fixed_point_reception"
            component={s1_fixed_point_reception}
          />
          <Stack.Screen
            name="S1_security_patrol"
            component={s1_security_patrol}
          />
          <Stack.Screen
            name="S1_mobile_reception"
            component={s1_mobile_reception}
          />
          <Stack.Screen name="S1_work_plan" component={s1_work_plan} />
          <Stack.Screen name="S1_settings" component={s1_settings} />

          {/* sub function_R2 */}
          <Stack.Screen name="cruise_shows" component={cruise_shows} />
          <Stack.Screen name="select_route" component={select_route} />
          <Stack.Screen name="cruise_show_main" component={cruise_show_main} />
          <Stack.Screen
            name="cruise_show_select"
            component={cruise_show_select}
          />
          <Stack.Screen name="cruise_setting" component={cruise_setting} />
          <Stack.Screen
            name="walkthrough_routes"
            component={walkthrough_routes}
          />
          <Stack.Screen name="leading_list" component={leading_list} />
          <Stack.Screen name="reception_time" component={reception_time} />
          <Stack.Screen
            name="reception_location_r2"
            component={reception_location_r2}
          />
          <Stack.Screen name="voice_list" component={voice_list} />
          <Stack.Screen name="about_status" component={about_status} />
          <Stack.Screen
            name="password_protection"
            component={password_protection}
          />
          <Stack.Screen name="battery_level" component={battery_level} />
          <Stack.Screen name="voice_settings" component={voice_settings} />
          <Stack.Screen name="volume" component={volume} />
          <Stack.Screen
            name="deilvery_settings"
            component={deilvery_settings}
          />
          <Stack.Screen
            name="guide_explanation_settings"
            component={guide_explanation_settings}
          />
          <Stack.Screen name="media_settings" component={media_settings} />
          <Stack.Screen name="language_setting" component={language_setting} />
          <Stack.Screen name="theme_settings" component={theme_settings} />
          <Stack.Screen name="mode_selection" component={mode_selection} />
          <Stack.Screen name="Call_robot_R2" component={Call_Robot_R2} />
          <Stack.Screen name="Call_rebot_list_R2" component={Call_rebot_list_R2} />
          <Stack.Screen name="All_R2" component={All_R2} />
          <Stack.Screen name="delivery_information" component={delivery_information} />

          {/* sub function_S1 */}

          <Stack.Screen
            name="S1_all_sub_function"
            component={s1_all_sub_function}
          />
          <Stack.Screen name="S1_ai_chat" component={s1_ai_chat} />
          <Stack.Screen name="S1_dance" component={s1_dance} />
          <Stack.Screen name="S1_deliveries" component={s1_deliveries} />
          <Stack.Screen name="S1_explain" component={s1_explain} />
          <Stack.Screen name="S1_following" component={s1_following} />
          <Stack.Screen name="S1_lead_the_way" component={s1_lead_the_way} />
          <Stack.Screen
            name="S1_mask_detection"
            component={s1_mask_detection}
          />
          <Stack.Screen name="S1_music" component={s1_music} />
          <Stack.Screen name="S1_video_call" component={s1_video_call} />
          <Stack.Screen name="S1_video" component={s1_video} />
          <Stack.Screen name="S1_invitation" component={s1_invitation} />
          <Stack.Screen name="Work_report" component={Work_report} />
          <Stack.Screen name="Task_datas" component={task_datas} />

          {/* sub function_settings_S1 */}
          <Stack.Screen name="S1_initiative" component={s1_initiative} />
          <Stack.Screen name="S1_reception" component={s1_reception} />
          <Stack.Screen name="S1_advanced" component={s1_advanced} />
          <Stack.Screen name="S1_about" component={s1_about} />
          <Stack.Screen name="S1_patrol" component={s1_patrol} />
          <Stack.Screen name="S1_network" component={s1_network} />
          <Stack.Screen name="S1_sound" component={s1_sound} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </RobotProvider>
  );
}
