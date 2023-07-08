import { View, Text, TouchableOpacity, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Checkbox from 'expo-checkbox';
import styles from '../styles';

const storeReminders = async (reminders_time, reminders_weeekdays) => {
  try {
    await AsyncStorage.setItem('REMINDERS_TIME', JSON.stringify(reminders_time));
    await AsyncStorage.setItem('REMINDERS_WEEKDAYS', JSON.stringify(reminders_weeekdays));
  } catch (e) {
    console.log(e);
  }
};
const readReminders = async () => {
  try {
    const reminders_time = await AsyncStorage.getItem('REMINDERS_TIME');
    const reminders_weeekdays = await AsyncStorage.getItem('REMINDERS_WEEKDAYS');
    if (reminders_time !== null) {
      return [JSON.parse(reminders_time), JSON.parse(reminders_weeekdays)];
    }
  } catch (e) {
    console.log(e);
  }
};

export default function RemindMePage({ navigation }) {
  // Weekdays
  const weekdays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const [checkedWeekdays, setCheckedWeekdays] = useState(Array(7).fill(false));
  const handleCheckboxChange = (index) => {
    const updatedCheckedWeekdays = [...checkedWeekdays];
    updatedCheckedWeekdays[index] = !updatedCheckedWeekdays[index];
    setCheckedWeekdays(updatedCheckedWeekdays);
  };

  // Reminders
  const [remindersTime, setRemindersTime] = useState([
    { label: 'Recordatorio 1', time: '00:00', isDatePickerVisible: false },
    { label: 'Recordatorio 2', time: '00:00', isDatePickerVisible: false },
    { label: 'Recordatorio 3', time: '00:00', isDatePickerVisible: false },
  ]);
  const showDatePicker = (index) => {
    const updatedReminders = [...remindersTime];
    updatedReminders[index].isDatePickerVisible = true;
    setRemindersTime(updatedReminders);
  };
  const hideDatePicker = (index) => {
    const updatedReminders = [...remindersTime];
    updatedReminders[index].isDatePickerVisible = false;
    setRemindersTime(updatedReminders);
  };
  const handleConfirm = (index, date) => {
    // Handle the selected date/time for the specific reminder
    // console.warn('A date has been picked: ', date);
    const updatedReminders = [...remindersTime];
    updatedReminders[index].time = formatTime(date);
    setRemindersTime(updatedReminders);
    hideDatePicker(index);
  };
  const formatTime = (date) => {
    // Format the date object to a string in the desired format
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  // Load Data from Storage
  React.useEffect(() => {
    (async () => {
      const remindersData = await readReminders();
      // console.log(remindersData);
      setCheckedWeekdays(remindersData[0]);
      setRemindersTime(remindersData[1]);
    })();

    return () => {
      // cleans up function once components are unmounted
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.HeadingText}>Recuerdame</Text> */}
      <Text style={styles.SubHeadingText}>Defina cada cuanto quieres que te lo recuerde</Text>
      {weekdays.map((day, index) => (
        <View key={day} style={styles.ButtonSheet.buttonRowContainer}>
          <Text style={{ marginBottom: 4, fontSize: 18 }}>{day}</Text>
          <Checkbox
            value={checkedWeekdays[index]}
            onValueChange={() => handleCheckboxChange(index)}
            style={{ marginRight: 5 }}
          />
        </View>
      ))}

      <View style={styles.TimeCard.container}>
        {remindersTime.map((reminder, index) => (
          <View key={index}>
            <View style={styles.ButtonSheet.buttonRowContainer}>
              <Text style={styles.TimeCard.text}>{reminder.label}</Text>
              <TouchableOpacity
                style={styles.TimeCard.button}
                onPress={() => showDatePicker(index)}
              >
                <Text style={styles.TimeCard.buttonText}>{reminder.time}</Text>
              </TouchableOpacity>

              <DateTimePickerModal
                isVisible={reminder.isDatePickerVisible}
                mode="time"
                display="spinner"
                onConfirm={(date) => handleConfirm(index, date)}
                onCancel={() => hideDatePicker(index)}
              />
            </View>
            {index !== remindersTime.length - 1 && <View style={styles.TimeCard.separator} />}
          </View>
        ))}
      </View>

      <View style={styles.ButtonSheet.buttonRowContainer}>
        <TouchableOpacity
          style={styles.ButtonSheet.smallButton}
          onPress={async () => {
            storeReminders(checkedWeekdays, remindersTime);
            navigation.navigate('MainScreen');
          }}
        >
          <Text style={styles.ButtonSheet.smallButtonText}>Guardar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ButtonSheet.smallButton}
          onPress={async () => {
            navigation.navigate('MainScreen');
          }}
        >
          <Text style={styles.ButtonSheet.smallButtonText}>Volver Atras</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
