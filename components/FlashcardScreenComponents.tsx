import { FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";
import React, { useEffect, useState } from "react";
import {
  Keyboard,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import audioMapping, { LatinWord } from "../config/audioMapping";
import NotificationManager from "../utils/NotificationManager";

type CardType = {
  id: number;
  english: string;
  latin: LatinWord;
};

type FlashcardScreenComponentsProps = {
  navigation: any;
  cards: readonly CardType[];
  category: string;
};

const FlashcardScreenComponents: React.FC<FlashcardScreenComponentsProps> = ({
  navigation,
  cards,
  category,
}) => {
  const [userAnswer, setUserAnswer] = useState(Array(cards.length).fill(""));
  const [isFlipped, setIsFlipped] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [, setAllAnswersCorrect] = useState(false);
  const [inputAutoFocus, setInputAutoFocus] = useState(true);

  const playLatinWordAudio = async (latinWord: LatinWord) => {
    try {
      const audioPath = audioMapping[latinWord];

      if (audioPath) {
        const { sound } = await Audio.Sound.createAsync(audioPath);

        await sound.playAsync();
      } else {
        console.error(`Audio file not found for Latin word: ${latinWord}`);
      }
    } catch (error) {
      console.error("Error playing audio", error);
    }
  };

  const triggerWrongAnswerVibration = async () => {
    await Haptics.selectionAsync();
  };

  const checkAnswer = () => {
    setIsFlipped(true);
    const currentUserAnswer = userAnswer[currentCardIndex].trim();

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
      setInputAutoFocus(true);
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

      if (correctCount === cards.length && incorrectCount === 0) {
        NotificationManager.sendCongratulatoryNotification(incorrectCount);
        setAllAnswersCorrect(true);
      } else {
        setAllAnswersCorrect(false);
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

  useEffect(() => {
    StatusBar.setBackgroundColor(backgroundColor);

    return () => {
      StatusBar.setBackgroundColor("lavender");
    };
  }, [backgroundColor]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={styles.categoryText}>{category}</Text>
        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <TouchableOpacity onPress={() => setIsFlipped(!isFlipped)}>
              <Text style={styles.cardText}>
                {isFlipped
                  ? cards[currentCardIndex].latin
                  : cards[currentCardIndex].english}
              </Text>
            </TouchableOpacity>
            {!isFlipped && (
              <View style={styles.cardTop}>
                <TouchableOpacity
                  onPress={() =>
                    playLatinWordAudio(cards[currentCardIndex].latin)
                  }
                  style={styles.soundIcon}
                >
                  <FontAwesome name="volume-up" size={24} color="black" />
                </TouchableOpacity>
              </View>
            )}
          </Card>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, isFlipped && styles.disabledInput]}
            placeholder="Enter Latin translation"
            autoFocus={inputAutoFocus}
            onChangeText={(text) => {
              if (!isFlipped) {
                const updatedAnswers = [...userAnswer];
                updatedAnswers[currentCardIndex] = text;
                setUserAnswer(updatedAnswers);
              }
            }}
            value={userAnswer[currentCardIndex]}
            editable={!isFlipped}
          />
        </View>
        {feedback && (
          <View style={[styles.buttonContainer, { marginBottom: 10 }]}>
            <Text style={styles.feedback}>
              {feedback === "Correct!" ? "Correct!" : "Wrong!"}
            </Text>
          </View>
        )}
        {isFlipped && (
          <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={goToNextCard}>
              Continue
            </Button>
          </View>
        )}
        {!isFlipped && (
          <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={checkAnswer}>
              Check
            </Button>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D8BFD8",
    marginTop: 0,
  },

  categoryText: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "serif",
    fontWeight: "bold",
  },

  cardContainer: {
    alignItems: "center",
    marginBottom: 10,
  },

  card: {
    width: 200,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
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
    paddingVertical: 50,
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 1,
  },

  soundIcon: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
  },

  inputContainer: {
    justifyContent: "center",
    marginBottom: 5,
  },

  input: {
    width: 230,
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    marginTop: 16,
    fontSize: 16,
    backgroundColor: "white",
    marginBottom: 10,
  },

  buttonContainer: {
    alignItems: "center",
    marginTop: 10,
  },

  disabledInput: {
    backgroundColor: "#f5f5f5",
    borderColor: "#ccc",
    opacity: 0.7,
  },

  feedback: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: "serif",
    fontWeight: "bold",
  },
});

export default FlashcardScreenComponents;
