import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from './Index'
import HomeScreen from './Screens/HomeScreen';
import MenuScreen from './Screens/Menu/MenuScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name='Menu' component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
