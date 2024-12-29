/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import './gesture-handler';
import {StatusBar, useColorScheme} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Hello from './screens/Hello';
import Login from './screens/Login';
import Signup from './screens/Signup';
import {NavigationContainer} from '@react-navigation/native';
import Colors from './Colors';
const Stack = createStackNavigator();

function AuthStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: Colors.text,
        cardStyle: {
          backgroundColor: Colors.primary800, // Set global background color
          padding: 8,
        },
        // con: { backgroundColor: Colors.primary500 },
      }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
}
function AuthenticatedNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: 'white',
        cardStyle: {
          backgroundColor: Colors.primary800, // Set global background color
          padding: 8,
        },
      }}>
      <Stack.Screen name="hello" component={Hello} />
    </Stack.Navigator>
  );
}
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <AuthStackNavigation />
        {/* <AuthenticatedNavigation /> */}
      </NavigationContainer>
    </>
  );
}

export default App;
