import { FontAwesome } from "@expo/vector-icons"; // Assuming you want to use FontAwesome icons
import { AVPlaybackSource, Audio } from "expo-av";
import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import audioMapping from "../config/audioMapping"; // Adjust the import path as needed

type CardType = {
  id: number;
  english: string;
  latin: string;
};

type FlashcardScreenProps = {
  navigation: any;
  cards: CardType[];
  category: string;
};

type AudioMapping = {
  [key: string]: string;
};

const FlashcardScreen: React.FC<FlashcardScreenProps> = ({
  navigation,
  cards,
  category,
}) => {
  const [userAnswer, setUserAnswer] = useState(Array(cards.length).fill(""));
  const [isFlipped, setIsFlipped] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playLatinWordAudio = async (latinWord: string) => {
    if (sound) {
      try {
        // Use the audioMapping to get the audio file path for the Latin word
        const audioPath = audioMapping[latinWord];
        if (audioPath) {
          const source: AVPlaybackSource = {
            uri: audioPath, // Assuming audioPath is a valid URI
          };

          await sound.loadAsync(source); // Pass the source object
          await sound.playAsync();
        } else {
          console.error(`Audio file not found for Latin word: ${latinWord}`);
        }
      } catch (error) {
        console.error("Error playing audio", error);
      }
    }
  };

  const triggerWrongAnswerVibration = async () => {
    await Haptics.selectionAsync();
  };

  const checkAnswer = () => {
    setIsFlipped(true);
    const currentUserAnswer = userAnswer[currentCardIndex];

    if (
      currentUserAnswer.toLowerCase() ===
      cards[currentCardIndex].latin.toLowerCase()
    ) {
      setFeedback("Correct!");
    } else {
      setFeedback("Wrong!");
      triggerWrongAnswerVibration();
    }
  };

  const goToNextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
      setFeedback(null);
    } else {
      let correctCount = 0;
      let incorrectCount = 0;

      for (let i = 0; i < cards.length; i++) {
        if (
          userAnswer[i] &&
          userAnswer[i].toLowerCase() === cards[i].latin.toLowerCase()
        ) {
          correctCount++;
        } else {
          incorrectCount++;
        }
      }

      navigation.navigate("Score", {
        rightAnswers: correctCount,
        wrongAnswers: incorrectCount,
      });
    }
  };

  const backgroundColor =
    feedback === "Correct!"
      ? "lightgreen"
      : feedback === "Wrong!"
      ? "red"
      : "lavender";

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
        {!isFlipped && (
          <>
            <TouchableOpacity
              onPress={
                () => playLatinWordAudio(cards[currentCardIndex].latin) // Pass the Latin word to play
              }
            >
              <FontAwesome name="volume-up" size={24} color="black" />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Enter Latin translation"
              onChangeText={(text) => {
                const updatedAnswers = [...userAnswer];
                updatedAnswers[currentCardIndex] = text;
                setUserAnswer(updatedAnswers);
              }}
              value={userAnswer[currentCardIndex]}
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
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D8BFD8",
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
    width: 230,
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

export default FlashcardScreen;
