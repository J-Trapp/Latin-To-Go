// App.tsx
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AnimalsScreen from "./screens/AnimalsScreen";
import ColorsScreen from "./screens/ColorsScreen";
import HomeScreen from "./screens/HomeScreen";
import MonthsScreen from "./screens/MonthsScreen";
import NumbersScreen from "./screens/NumbersScreen";
import ScoreScreen from "./screens/ScoreScreen";
import WeekdaysScreen from "./screens/WeekdaysScreen";

export type RootStackParamList = {
  Home: undefined;
  Numbers: { category: string };
  Animals: undefined;
  Months: undefined;
  Weekdays: undefined;
  Colors: undefined;
  Score: {
    rightAnswers: number;
    wrongAnswers: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Numbers" component={NumbersScreen} />
          <Stack.Screen name="Animals" component={AnimalsScreen} />
          <Stack.Screen name="Months" component={MonthsScreen} />
          <Stack.Screen name="Weekdays" component={WeekdaysScreen} />
          <Stack.Screen name="Colors" component={ColorsScreen} />
          <Stack.Screen name="Score" component={ScoreScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
