import React from "react";
import { monthsCardsData } from "../cards/MonthsCardsData";
import FlashcardScreen from "../components/FlashcardScreen";

type Props = {
  navigation: any;
  route: any;
};

const MonthsScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <FlashcardScreen
      navigation={navigation}
      cards={monthsCardsData}
      category="Months"
    />
  );
};

export default MonthsScreen;
