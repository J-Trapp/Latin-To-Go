import { Audio } from "expo-av";
import React from "react";
import { Button } from "react-native";

interface AudioPlayerProps {
  soundFile: string;
}

export default function AudioPlayer({ soundFile }: AudioPlayerProps) {
  async function playSound() {
    try {
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync(require(soundFile)); // Load the sound file from assets
      await soundObject.playAsync();
    } catch (error) {
      console.error("Error playing sound: ", error);
    }
  }

  return <Button title="Play Sound" onPress={playSound} />;
}
