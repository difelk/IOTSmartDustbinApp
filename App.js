import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import global from "./styles/global";
import Header from "./components/Header/Header";
// import  Navigation  from "../smartdustbin/routes/navigation";
import Home from "./components/Home/Home";
import Battery from "./components/Pages/Battery/Battery";
import Bin from "./components/Pages/Bin/Bin";
import About from "./components/Pages/About/About";

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
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
