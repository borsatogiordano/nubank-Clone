import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import { ThemeProvider } from "./src/ThemeContext";

import Home from "./src/components/Home";
import PixScreen from "./src/components/PixScreen";
import HomeLogada from "./src/components/HomeLogada";


const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      
      <StatusBar
        backgroundColor="rgba(255, 255, 255, 0)"
        translucent
        barStyle="dark-content"
      />
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeLogada"
              component={HomeLogada}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="PixScreen" component={PixScreen}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
