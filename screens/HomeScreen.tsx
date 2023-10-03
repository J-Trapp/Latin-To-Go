import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../App";

type Props = StackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [latinTranslation, setLatinTranslation] = useState<string>("");
  const [inputWord, setInputWord] = useState<string>("");

  useEffect(() => {}, []);

  const fetchLatinTranslation = () => {
    fetch(
      `https://www.latin-is-simple.com/api/vocabulary/search/?query=${inputWord}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLatinTranslation(data[0].full_name);
      })
      .catch((error) => console.log(error));
  };

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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a word to translate"
          onChangeText={(text) => setInputWord(text)}
          value={inputWord}
        />
      </View>
      <TouchableOpacity
        style={styles.translateButton}
        onPress={fetchLatinTranslation}
      >
        <Text style={styles.buttonText}>Translate</Text>
      </TouchableOpacity>
      {latinTranslation && (
        <View style={styles.translationContainer}>
          <Text style={styles.translationLabel}>Latin Translation:</Text>
          <Text style={styles.translationText}>{latinTranslation}</Text>
        </View>
      )}
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 40,
    maxWidth: 200,
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  translateButton: {
    backgroundColor: "#FF1493",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  translationContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  translationLabel: {
    fontSize: 16,
    fontFamily: "serif",
    fontWeight: "bold",
  },
  translationText: {
    fontSize: 18,
    fontFamily: "serif",
  },
});

export default HomeScreen;
