import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/home";
import Tasks from "./screens/tasks";
import Pickup from "./screens/pickup";
import Management from "./screens/management";
import SOS from "./screens/sos";

import CustomTabBar from "./components/CustomTabBar";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
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
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
