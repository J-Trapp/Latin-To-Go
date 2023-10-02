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
export type LatinNumberWord = (typeof numberCardsData)[number]["latin"];

export const animalsCardsData = [
  { id: 1, english: "cat", latin: "felis" },
  { id: 2, english: "dog", latin: "canis" },
  { id: 3, english: "parrot", latin: "psittacus" },
  { id: 4, english: "horse", latin: "equus" },
  { id: 5, english: "weasel", latin: "mustella" },
  { id: 6, english: "guinea pig", latin: "cavia porcellus" },
  { id: 7, english: "lynx", latin: "lynx" },
  { id: 8, english: "hamster", latin: "Cricetus" },
  { id: 9, english: "fish", latin: "piscis" },
  { id: 10, english: "elk", latin: "alces" },
] as const;
export type LatinAnimalWord = (typeof animalsCardsData)[number]["latin"];

export const monthsCardsData = [
  { id: 1, english: "January", latin: "Ianuarius" },
  { id: 2, english: "February", latin: "Februarius" },
  { id: 3, english: "March", latin: "Martius" },
  { id: 4, english: "April", latin: "Aprilis" },
  { id: 5, english: "May", latin: "Maius" },
  { id: 6, english: "June", latin: "Iunius" },
  { id: 7, english: "July", latin: "Iulius" },
  { id: 8, english: "August", latin: "Augustus" },
  { id: 9, english: "September", latin: "Septembris" },
  { id: 10, english: "October", latin: "Octobris" },
  { id: 11, english: "November", latin: "Novembris" },
  { id: 12, english: "December", latin: "Decembris" },
] as const;
export type LatinMonthWord = (typeof monthsCardsData)[number]["latin"];

export const weekdaysCardsData = [
  { id: 1, english: "Monday", latin: "dies Lunae" },
  { id: 2, english: "Tuesday", latin: "dies Martis" },
  { id: 3, english: "Wednesday", latin: "dies Mercurii" },
  { id: 4, english: "Thursday", latin: "dies Iovis" },
  { id: 5, english: "Friday", latin: "dies Veneris" },
  { id: 6, english: "Saturday", latin: "dies Saturni" },
  { id: 7, english: "Sunday", latin: "dies Solis" },
] as const;
export type LatinWeekdayWord = (typeof weekdaysCardsData)[number]["latin"];

export const colorsCardsData = [
  { id: 1, english: "red", latin: "rubeus" },
  { id: 2, english: "blue", latin: "caerulus" },
  { id: 3, english: "green", latin: "viridis" },
  { id: 4, english: "yellow", latin: "flavus" },
  { id: 5, english: "purple", latin: "purpureus" },
  { id: 6, english: "pink", latin: "roseus" },
  { id: 7, english: "white", latin: "candidus" },
  { id: 8, english: "gold", latin: "aureus" },
] as const;
export type LatinColorWord = (typeof colorsCardsData)[number]["latin"];

export type LatinWord =
  | LatinNumberWord
  | LatinAnimalWord
  | LatinMonthWord
  | LatinWeekdayWord
  | LatinColorWord;
