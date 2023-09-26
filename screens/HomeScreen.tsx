import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";

type ButtonType = {
  label: string;
  screen: keyof RootStackParamList;
  color: string;
};

export type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const navigateToScreen = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Latin-To-Go</Text>
      <View style={styles.buttonContainer}>
        {circleButtons.map((button, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: button.color },
              pressed ? styles.pressedButton : null,
            ]}
            onPress={() => navigateToScreen(button.screen)}
          >
            <Text style={styles.buttonText}>{button.label}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const circleButtons: ButtonType[] = [
  { label: "Numbers", screen: "Numbers", color: "#3498db" },
  { label: "Animals", screen: "Numbers", color: "#e74c3c" },
  { label: "Months", screen: "Numbers", color: "#2ecc71" },
  { label: "Weekdays", screen: "Numbers", color: "#f1c40f" },
  { label: "Colors", screen: "Numbers", color: "#9b59b6" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: "serif",
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  pressedButton: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 18,
    color: "black",
    fontFamily: "serif",
    fontWeight: "bold",
  },
});

export default HomeScreen;
