import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../App";

type ScoreScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Score"
>;

type ScoreScreenRouteProp = RouteProp<RootStackParamList, "Score">;

type ScoreScreenProps = {
  navigation: ScoreScreenNavigationProp;
  route: ScoreScreenRouteProp;
};

const ScoreScreen: React.FC<ScoreScreenProps> = ({ navigation, route }) => {
  const { rightAnswers, wrongAnswers } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.starContainer}>
        <Text style={styles.star}>★</Text>
        <Text style={styles.star}>★</Text>
        <Text style={styles.star}>★</Text>
      </View>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Score</Text>
        <Text style={styles.scoreValue}>Right Answers: {rightAnswers}</Text>
        <Text style={styles.scoreValue}>Wrong Answers: {wrongAnswers}</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={{ color: "yellow" }}>Go back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 20, // Adjust padding for spacing
  },
  starContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  star: {
    fontSize: 30,
    color: "yellow",
  },
  scoreContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 24,
    color: "yellow",
  },
  scoreValue: {
    fontSize: 18,
    color: "yellow",
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default ScoreScreen;
