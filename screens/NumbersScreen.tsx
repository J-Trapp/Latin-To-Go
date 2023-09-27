import React from "react";
import { numberCardsData } from "../cards/NumberCardsData";
import FlashcardScreen from "../components/FlashcardScreen";

type Props = {
  navigation: any;
  route: any;
};

const NumberScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <FlashcardScreen
      navigation={navigation}
      cards={numberCardsData}
      category="Numbers"
    />
  );
};

export default NumberScreen;
