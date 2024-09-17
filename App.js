import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import HomeScreen from './components/HomeScreen';
import AddRoutine from './components/AddRoutine';
import AddTask from './components/AddTask';
import UpdateRoutine from './components/UpdateRoutine';
import UpdateTask from './components/UpdateTask';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#333"
        translucent={false}
      />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddRoutine" component={AddRoutine} />
        <Stack.Screen name="AddTask" component={AddTask} />
        <Stack.Screen name="UpdateRoutine" component={UpdateRoutine} />
        <Stack.Screen name="UpdateTask" component={UpdateTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
