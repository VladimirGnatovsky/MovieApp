import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { HomeScreen, ProfileScreen, LoginScreen, RegisterScreen } from './src/modules';
import theme from './src/constants/Color';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AutorizationScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }} >
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarActiveTintColor: theme.color.blue, tabBarIcon: ({ color }) => (<MaterialIcons name="home" color={color} size={32} />), }} />
        <Tab.Screen name="Autorization" component={AutorizationScreen} options={{ tabBarActiveTintColor: theme.color.blue, tabBarIcon: ({ color }) => (<MaterialIcons name="login" color={color} size={32} />), }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarActiveTintColor: theme.color.blue, tabBarIcon: ({ color }) => (<MaterialIcons name="people" color={color} size={32} />), }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}