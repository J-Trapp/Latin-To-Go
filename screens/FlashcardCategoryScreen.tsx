import React from "react";
import {
  animalsCardsData,
  colorsCardsData,
  monthsCardsData,
  numberCardsData,
  weekdaysCardsData,
} from "../cards/ConstantsData";
import FlashcardScreenComponents from "../components/FlashcardScreenComponents";

type Props = {
  navigation: any;
  route: any;
};

const NumberScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <FlashcardScreenComponents
      navigation={navigation}
      cards={numberCardsData}
      category="Numbers"
    />
  );
};

const AnimalsScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <FlashcardScreenComponents
      navigation={navigation}
      cards={animalsCardsData}
      category="Animals"
    />
  );
};

const MonthsScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <FlashcardScreenComponents
      navigation={navigation}
      cards={monthsCardsData}
      category="Months"
    />
  );
};

const WeekdaysScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <FlashcardScreenComponents
      navigation={navigation}
      cards={weekdaysCardsData}
      category="Weekdays"
    />
  );
};

const ColorsScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <FlashcardScreenComponents
      navigation={navigation}
      cards={colorsCardsData}
      category="Colors"
    />
  );
};

export {
  AnimalsScreen,
  ColorsScreen,
  MonthsScreen,
  NumberScreen,
  WeekdaysScreen,
};
