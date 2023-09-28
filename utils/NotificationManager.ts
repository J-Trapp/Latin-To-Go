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

const sendCongratulatoryNotification = async () => {
  const deviceId = await generateDeviceId();
  const message = {
    to: deviceId,
    sound: "default",
    title: "Congratulations!",
    body: "You completed the category successfully!",
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

const getCongratulatoryMessage = () => {
  return "Congratulations! You got all the answers right in this category!";
};

const getPracticeMessage = () => {
  return "You better practice some more to get all the answers right!";
};

export default {
  sendCongratulatoryNotification,
  getCongratulatoryMessage,
  getPracticeMessage,
};
