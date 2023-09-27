import React from "react";
import { colorsCardsData } from "../cards/ColorsCardsData";
import FlashcardScreen from "../components/FlashcardScreen";

type Props = {
  navigation: any;
  route: any;
};

const ColorsScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <FlashcardScreen
      navigation={navigation}
      cards={colorsCardsData}
      category="Colors"
    />
  );
};

export default ColorsScreen;
