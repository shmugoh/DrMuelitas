import * as Notifications from 'expo-notifications';

export const registerForPushNotifications = async () => {
  // Check if the notification permission has been granted
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== 'granted') {
    // Permission not granted, request it
    await Notifications.requestPermissionsAsync();
  }
};

export const pushLocalNotification = async (name, trigger = null) => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  const notifId = await Notifications.scheduleNotificationAsync({
    content: {
      title: 'DrMuelitas',
      body: `¡Oye ${name}! Es la hora de lavarte los dientes. ¡Cuida tu sonrisa! 😁🦷`,
      sound: 'default',
    },
    trigger: trigger,
  });
  console.log(notifId);
  return notifId;
};

export async function schedulePushNotification(data) {
  var notifsId = [];
  const scheduledWeekdays = data[0];
  const scheduledHours = data[1];
  const name = data[2];

  for (let index = 0; index < scheduledWeekdays.length; index++) {
    const weekday = scheduledWeekdays[index];
    if (weekday === true) {
      for (let hour of scheduledHours) {
        const [h, m] = hour.time.split(':').map((numString) => parseInt(numString));

        Notifications.setNotificationHandler({
          handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: false,
          }),
        });

        const id = await Notifications.scheduleNotificationAsync({
          content: {
            title: 'DrMuelitas',
            body: `¡Oye ${name}! Es la hora de lavarte los dientes. ¡Cuida tu sonrisa! 😁🦷`,
            sound: 'default',
          },
          trigger: {
            weekday: index + 1, // Use the index of the weekday
            hour: h,
            minute: m,
            repeats: true,
          },
        });
        notifsId.push(id);
      }
    }
  }

  return notifsId;
}

export async function clearScheduledNotifications() {
  await Notifications.dismissAllNotificationsAsync();
  await Notifications.cancelAllScheduledNotificationsAsync();
}
