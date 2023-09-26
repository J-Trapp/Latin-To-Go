import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";

export default function NumbersScreen() {
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const correctAnswer = "unus";

  const checkAnswer = () => {
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      setFeedback("Correct!");
    } else {
      setFeedback("Wrong!");
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardText}>one</Text>
        </Card.Content>
      </Card>
      <TextInput
        style={styles.input}
        label="Enter Latin translation"
        onChangeText={(text) => setUserAnswer(text)}
        value={userAnswer}
      />
      <Button mode="contained" style={styles.checkButton} onPress={checkAnswer}>
        Check
      </Button>
      <Text style={styles.feedback}>{feedback}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0d1ff",
  },
  card: {
    width: 200,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 24,
    fontFamily: "serif",
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
  },

  input: {
    width: 200,
    marginTop: 16,
    marginBottom: 16,
  },
  checkButton: {
    marginTop: 16,
  },
  feedback: {
    fontSize: 18,
    marginTop: 16,
  },
});
