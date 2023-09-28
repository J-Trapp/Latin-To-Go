import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../App";
import NotificationManager from "../utils/NotificationManager";

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
  const [showCongratulatoryMessage, setShowCongratulatoryMessage] =
    useState(false);
  const [showPracticeMessage, setShowPracticeMessage] = useState(false);

  useEffect(() => {
    // Check if the user has completed the category
    const userCompletedCategory = rightAnswers === rightAnswers + wrongAnswers;

    // If the user completed the category, send a congratulatory notification
    if (userCompletedCategory) {
      NotificationManager.sendCongratulatoryNotification();
      setShowCongratulatoryMessage(true);
    } else {
      setShowPracticeMessage(true);
    }
  }, [rightAnswers, wrongAnswers]);

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

      {showCongratulatoryMessage && (
        <View style={styles.congratulatoryMessageContainer}>
          <Text style={styles.congratulatoryMessage}>
            {NotificationManager.getCongratulatoryMessage()}
          </Text>
        </View>
      )}

      {showPracticeMessage && (
        <View style={styles.practiceMessageContainer}>
          <Text style={styles.practiceMessage}>
            {NotificationManager.getPracticeMessage()}
          </Text>
        </View>
      )}

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
    padding: 20,
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
  congratulatoryMessageContainer: {
    marginTop: 20,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  congratulatoryMessage: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },

  practiceMessageContainer: {
    marginTop: 20,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  practiceMessage: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default ScoreScreen;
