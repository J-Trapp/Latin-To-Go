// import * as Notifications from "expo-notifications";
// import * as Permissions from "expo-permissions";

// async function registerForPushNotificationsAsync() {
//   const { status: existingStatus } = await Permissions.getAsync(
//     Permissions.NOTIFICATIONS
//   );

//   if (existingStatus !== "granted") {
//     const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

//     if (status !== "granted") {
//       console.error("Permission to receive notifications was denied");
//       return;
//     }
//   }

//   const tokenData = await Notifications.getExpoPushTokenAsync();
//   const expoPushToken = tokenData.data;

//   // Save the expoPushToken in your app's state or send it to your server
//   // for later use when sending notifications.

//   console.log("Expo Push Token:", expoPushToken);
// }

// export async function initializeNotifications() {
//   Notifications.setNotificationHandler({
//     handleNotification: async () => ({
//       shouldShowAlert: true,
//       shouldPlaySound: false,
//       shouldSetBadge: false,
//     }),
//   });

//   registerForPushNotificationsAsync();
// }
