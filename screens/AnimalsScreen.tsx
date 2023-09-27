import React from "react";
import { animalsCardsData } from "../cards/AnimalsCardsData";
import FlashcardScreen from "../components/FlashcardScreen";

type Props = {
  navigation: any;
  route: any;
};

const AnimalsScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <FlashcardScreen
      navigation={navigation}
      cards={animalsCardsData}
      category="Animals"
    />
  );
};

export default AnimalsScreen;
