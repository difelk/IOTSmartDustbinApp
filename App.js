import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home/Home";
import Battery from "./components/Pages/Battery/Battery";
import Bin from "./components/Pages/Bin/Bin";
import Settings from "./components/Pages/Settings/Settings";
import EditProfile from "./components/Pages/Profile/EditProfile";
import About from "./components/Pages/About/About";
import './services/i18next'; 

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Battery" component={Battery} />
        <Stack.Screen name="Bin" component={Bin} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="EDITPROFILE" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
