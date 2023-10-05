import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";

const generateDeviceId = async () => {
  let deviceId = await AsyncStorage.getItem("device_id");

  if (!deviceId) {
    deviceId = Math.random().toString(36).substring(7);
    await AsyncStorage.setItem("device_id", deviceId);
  }
  return deviceId;
};

const sendNotification = async (title: string, body: string) => {
  const deviceId = await generateDeviceId();
  const message = {
    to: deviceId,
    sound: "default",
    title: title,
    body: body,
  };

  try {
    await Notifications.scheduleNotificationAsync({
      content: message,
      trigger: null,
    });
    console.log("Push notification sent:", message);
  } catch (error) {
    console.error("Error sending push notification:", error);
  }
};
const sendCongratulatoryNotification = async (incorrectCount: number) => {
  let title, body;

  if (incorrectCount === 0) {
    title = "Congratulations!";
    body = "You completed the category successfully!";
  } else if (incorrectCount <= 5) {
    title = "Good job...almost there!";
    body = "You got some answers wrong, but you're making progress!";
  } else {
    title = "You have to keep practicing!";
    body = "You got quite a few answers wrong, but don't give up!";
  }

  sendNotification(title, body);
};

export const getCongratulatoryMessage = (incorrectCount: number) => {
  let message = "";

  if (incorrectCount === 0) {
    message = "Congratulations! You completed the category successfully!";
  } else if (incorrectCount <= 5) {
    message = "You got some answers wrong, but you're making progress!";
  } else {
    message = "You got quite a few answers wrong, but don't give up!";
  }

  return message;
};

export default {
  sendCongratulatoryNotification,
  getCongratulatoryMessage,
};
