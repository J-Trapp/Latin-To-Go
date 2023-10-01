import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  AnimalsScreen,
  ColorsScreen,
  MonthsScreen,
  NumberScreen,
  WeekdaysScreen,
} from "./screens/FlashcardCategoryScreen";
import ScoreScreen from "./screens/ScoreScreen";

export type RootStackParamList = {
  Home: { category: string };
  Numbers: { category: string };
  Animals: { category: string };
  Months: { category: string };
  Weekdays: { category: string };
  Colors: { category: string };
  Score: {
    rightAnswers: number;
    wrongAnswers: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" backgroundColor="lavender" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Numbers" component={NumberScreen} />
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
