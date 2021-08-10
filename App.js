import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

// screens
import LoginScreen from "./app/screens/auth/Index"
import HomeScreen from "./app/screens/HomeScreen"
import PostDetails from './app/screens/PostDetails';
import SearchPostsScreen from './app/screens/SearchPostsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="HomeScreen" >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PostDetails" component={PostDetails} />
        <Stack.Screen name="SearchPostsScreen" component={SearchPostsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}