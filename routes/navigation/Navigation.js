import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../components/Home';
import Battery from '../../components/Pages/Battery';
import Bin from '../../components/Pages/Bin';


const Stack = createStackNavigator();

export default function Navigation(){
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} /> 
     <Stack.Screen name="Battery" component={Battery} />
      <Stack.Screen name="Bin" component={Bin} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};