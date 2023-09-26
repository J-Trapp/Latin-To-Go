import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { RootStackParamList } from "../App";
import { numberCardsData } from "../cards/NumberCardsData";

type Props = StackScreenProps<RootStackParamList, "Numbers">;

const NumbersScreen: React.FC<Props> = ({ navigation, route }) => {
  const { category } = route.params;
  const [userAnswer, setUserAnswer] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Track the current card index

  const cards = numberCardsData; // Assign card data to a variable

  const checkAnswer = () => {
    setIsFlipped(true);

    if (
      userAnswer.toLowerCase() === cards[currentCardIndex].latin.toLowerCase()
    ) {
      setFeedback("Correct!");
    } else {
      setFeedback("Wrong!");
    }
  };

  const goToNextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false); // Reset card flip state
      setUserAnswer(""); // Clear user's answer
      setFeedback(null); // Clear feedback
    } else {
      console.log("All cards completed!");
    }
  };

  const backgroundColor =
    feedback === "Correct!" ? "green" : feedback === "Wrong!" ? "red" : "white";

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.categoryText}>{category}</Text>
      <Card style={styles.card}>
        <TouchableOpacity onPress={() => setIsFlipped(!isFlipped)}>
          <Text style={styles.cardText}>
            {isFlipped
              ? cards[currentCardIndex].latin
              : cards[currentCardIndex].english}
          </Text>
        </TouchableOpacity>
      </Card>
      {!isFlipped && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter Latin translation"
            onChangeText={(text) => setUserAnswer(text)}
            value={userAnswer}
          />
          <Button mode="contained" onPress={checkAnswer}>
            Check
          </Button>
        </>
      )}
      {isFlipped && <Text style={styles.feedback}>{feedback}</Text>}
      {feedback && (
        <Button mode="contained" onPress={goToNextCard}>
          Continue
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "serif",
    fontWeight: "bold",
  },
  card: {
    width: 200,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    marginTop: 16,
    fontSize: 16,
    backgroundColor: "white",
    marginBottom: 16,
  },
  feedback: {
    fontSize: 18,
    marginTop: 16,
    fontFamily: "serif",
    fontWeight: "bold",
  },
});

export default NumbersScreen;
