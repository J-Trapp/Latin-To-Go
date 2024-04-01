import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";

type NavigationProps = NavigationProp<RootStackParamList>;

type Props = {
  navigation: NavigationProps;
  route: any;
};

export type CardType = {
  id: number;
  english: string;
  latin: string;
};

export const numberCardsData = [
  { id: 1, english: "one", latin: "unus" },
  { id: 2, english: "two", latin: "duo" },
  { id: 3, english: "three", latin: "tres" },
  { id: 4, english: "four", latin: "quattuor" },
  { id: 5, english: "five", latin: "quinque" },
  { id: 6, english: "six", latin: "sex" },
  { id: 7, english: "seven", latin: "septem" },
  { id: 8, english: "eight", latin: "octo" },
  { id: 9, english: "nine", latin: "novem" },
  { id: 10, english: "ten", latin: "decem" },
] as const;
export type LatinNumberWord = Lowercase<
  (typeof numberCardsData)[number]["latin"]
>;

export const animalsCardsData = [
  { id: 1, english: "cat", latin: "feles" },
  { id: 2, english: "dog", latin: "canis" },
  { id: 3, english: "parrot", latin: "psittacus" },
  { id: 4, english: "horse", latin: "equs" },
  { id: 5, english: "weasel", latin: "mustella" },
  { id: 6, english: "guinea pig", latin: "cavia_porcellus" },
  { id: 7, english: "lynx", latin: "lynx" },
  { id: 8, english: "hamster", latin: "criceta" },
  { id: 9, english: "fish", latin: "piscis" },
  { id: 10, english: "elk", latin: "alces" },
] as const;
export type LatinAnimalWord = Lowercase<
  (typeof animalsCardsData)[number]["latin"]
>;

export const monthsCardsData = [
  { id: 1, english: "January", latin: "ianuarii" },
  { id: 2, english: "February", latin: "februarius" },
  { id: 3, english: "March", latin: "martius" },
  { id: 4, english: "April", latin: "aprilis" },
  { id: 5, english: "May", latin: "maius" },
  { id: 6, english: "June", latin: "iunius" },
  { id: 7, english: "July", latin: "iulius" },
  { id: 8, english: "August", latin: "augustus" },
  { id: 9, english: "September", latin: "septembris" },
  { id: 10, english: "October", latin: "octobris" },
  { id: 11, english: "November", latin: "novembris" },
  { id: 12, english: "December", latin: "decembris" },
] as const;
export type LatinMonthWord = Lowercase<
  (typeof monthsCardsData)[number]["latin"]
>;

export const weekdaysCardsData = [
  { id: 1, english: "Monday", latin: "dies_lunae" },
  { id: 2, english: "Tuesday", latin: "dies_martis" },
  { id: 3, english: "Wednesday", latin: "dies_mercurii" },
  { id: 4, english: "Thursday", latin: "dies_iovis" },
  { id: 5, english: "Friday", latin: "dies_veneris" },
  { id: 6, english: "Saturday", latin: "dies_saturni" },
  { id: 7, english: "Sunday", latin: "dies_solis" },
] as const;

export type LatinWeekdayWord = Lowercase<
  (typeof weekdaysCardsData)[number]["latin"]
>;

export const colorsCardsData = [
  { id: 1, english: "red", latin: "rubrum" },
  { id: 2, english: "blue", latin: "caeruleum" },
  { id: 3, english: "green", latin: "viridis" },
  { id: 4, english: "yellow", latin: "flavum" },
  { id: 5, english: "purple", latin: "purpureus" },
  { id: 6, english: "pink", latin: "roseus" },
  { id: 7, english: "white", latin: "candidus" },
  { id: 8, english: "gold", latin: "aureus" },
] as const;
export type LatinColorWord = Lowercase<
  (typeof colorsCardsData)[number]["latin"]
>;

export type LatinWord =
  | LatinNumberWord
  | LatinAnimalWord
  | LatinMonthWord
  | LatinWeekdayWord
  | LatinColorWord;
