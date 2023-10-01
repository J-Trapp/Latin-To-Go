import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../App";

type Props = StackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const navigateToScreen = (screenName: keyof RootStackParamList) => {
    switch (screenName) {
      case "Numbers":
        navigation.navigate("Numbers", { category: "Numbers" });
        break;
      case "Animals":
        navigation.navigate("Animals", { category: "Animals" });
        break;
      case "Months":
        navigation.navigate("Months", { category: "Months" });
        break;
      case "Weekdays":
        navigation.navigate("Weekdays", { category: "Weekdays" });
        break;
      case "Colors":
        navigation.navigate("Colors", { category: "Colors" });
        break;
      default:
        break;
    }
  };

  const circleButtons: {
    label: string;
    screen: keyof RootStackParamList;
    color: string;
  }[] = [
    { label: "Numbers", screen: "Numbers", color: "#3498db" },
    { label: "Animals", screen: "Animals", color: "#e74c3c" },
    { label: "Months", screen: "Months", color: "#2ecc71" },
    { label: "Weekdays", screen: "Weekdays", color: "#f1c40f" },
    { label: "Colors", screen: "Colors", color: "#9b59b6" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latin-To-Go</Text>
      <View style={styles.buttonContainer}>
        {circleButtons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, { backgroundColor: button.color }]}
            onPress={() => navigateToScreen(button.screen)}
          >
            <Text style={styles.buttonText}>{button.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "lavender",
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
  buttonText: {
    fontSize: 18,
    color: "white",
    fontFamily: "serif",
    fontWeight: "bold",
  },
});

export default HomeScreen;
