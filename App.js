import { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./components/Home/Home";
import Battery from "./components/Pages/Battery/Battery";
import Bin from "./components/Pages/Bin/Bin";
import Settings from "./components/Pages/Settings/Settings";
import EditProfile from "./components/Pages/Profile/EditProfile";
import About from "./components/Pages/About/About";
import './services/i18next'; 
import Notification from "./components/Pages/Notification/Notification";
import i18next from "./services/i18next";


const Stack = createStackNavigator();
export default function App() {


  useEffect(() => {
    const getStoredLanguage = async () => {
      try {
        const storedLanguage = await AsyncStorage.getItem("selectedLanguage");
        if (storedLanguage) {
          i18next.changeLanguage(storedLanguage);
        }
      } catch (error) {
        console.error("Error retrieving stored language:", error);
      }
    };
    getStoredLanguage();
  }, []);




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
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
