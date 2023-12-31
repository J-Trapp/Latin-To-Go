## Titel:

Latin-To-Go

## GitHub:

J-Trapp / Latin-To-Go

## Beskrivning:

En app för att lära sig enkla, användbara ord på Latin genom att skriva och lyssna på orden.
På hemskärmen (HomeScreen) finns ett inputfält där användaren kan skriva in enskilda ord (på engelska) som översätts till Latin från ett tredje-part api som sedan skrivs ut på skämen (https://www.latin-is-simple.com). Hemskärmen består även av de olika kategorierna som finns att välja mellan.
Klickar man sig in på en kategori så finns alltid kategorititeln synlig ovanför kortet och det finns en ljudfil till samtliga ord i appen. Skriver man i fel ord vibrerar moblien till, skärmen blir röd, ordet "Wrong!" visas och det riktiga ordet syns på kortet. Skriver du in rätt ord blir skärmen grön, ordet "Correct!" visas tillsammans med det riktiga ordet på kortet. Man trycker "Continue" för att fortsätta till nästa ord.
När orden i en kategori tar slut så visas Poängsidan (ScoreScreen) där det visas hur många rätt och hur många fel man har, samt får en notis antingen grön, orange eller röd beroende på hur många rätt man har. Sist finns en knapp som tar en tillbaka till Hemsidan (HomeScreen)

## Uppbyggnad:

Använt React native med react navigation och expo (Jag har hela tiden tetat på både emulatorn och min android-mobil.)
assets-mapp med mp3 filer
cards-mapp med all data
config-mapp med ljudmappningen
screens-mapp med de olika skärmarna
utils-mapp med NotificationManager
App.tsx i root-filen

## Komponenter Expo:

- StatusBar från expo-status-bar
  Använder i App.tsx med styling för att få färgen att matcha med min färg-skala.
  Använder den även i FlashcardScreenComponents.tsx för att ändra färgen efter skärmen

- Audio från expo-av
  Använder i FlashcardScreen.tsx för att hantera mina mp3-filer så att de kan spelas upp i appen.

- Haptics från expo-haptics
  Använder i FlashcardScren.tsx för att hantera vibrationer, om användaren skriver in fel ord vibrerar mobilen till.

- Notifications från expo-notifications
  Använder i NotificationManager.ts för att skicka en notis till användaren efter avslutad kategori.

## Komponenter React Native:

- Button
  Använder I FlashcardScreen.tsx för att kontrollera användarens input-ord.

- TextInput
  Använder i HomeScreen.tsx för att användaren ska kunna skriva in ett ord som översätts via tredje part api.
  Använder i FlashcardScreen.tsx för att användaren ska kunna skriva i det latinska ordet.

- Card
  Använder i FlashcardScreen.tsx som mitt flashcard, där engelska ordet ska stå på en sida och det latinska ordet på andra sidan och använder boolean isFlipped för att tyda vilken sida som ska visas.

- TouchableOpacity
  Använder i FlashhcardScreen.tsx, HomeScreen.tsx och ScoreScreen.tsx för att ge användaren feedback när de klickar på en knapp/icon.

## Uppfyllda krav:

Krav för godkänt:
[X] Projektet använder minst 4 stycken RN-komponenter och minst 4 stycken Expo komponenter.
[X] De utvalda komponenterna MÅSTE antecknas i README filen tillsammans med en lista över genomförda krav.
[X] React Navigation används för att skapa en bättre upplevelse i appen.
[X] Git & GitHub har använts
[X] Projektmappen innehåller en README.md fil
[X] Uppgiften lämnas in i tid!
[X] Muntlig presentation är genomförd

Krav för väl godkänt:
[X] Alla punkter för godkänt är uppfyllda
[X] Ytterligare en valfri extern modul används i projektet.
[X] Appen ska prata med ett Web-API för att hämta data.
[X] Appen ska lanseras på en Appstore (Deadline samma dag som kursen slutar)
