import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import Checkbox from 'expo-checkbox';
import styles from '../styles';

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
  const [reminders, setReminders] = useState([
    { label: 'Recordatorio 1:', time: '00:00', isDatePickerVisible: false },
    { label: 'Recordatorio 2:', time: '00:00', isDatePickerVisible: false },
    { label: 'Recordatorio 3:', time: '00:00', isDatePickerVisible: false },
  ]);
  const showDatePicker = (index) => {
    const updatedReminders = [...reminders];
    updatedReminders[index].isDatePickerVisible = true;
    setReminders(updatedReminders);
  };
  const hideDatePicker = (index) => {
    const updatedReminders = [...reminders];
    updatedReminders[index].isDatePickerVisible = false;
    setReminders(updatedReminders);
  };
  const handleConfirm = (index, date) => {
    // Handle the selected date/time for the specific reminder
    // console.warn('A date has been picked: ', date);
    const updatedReminders = [...reminders];
    updatedReminders[index].time = formatTime(date);
    setReminders(updatedReminders);
    hideDatePicker(index);
  };
  const formatTime = (date) => {
    // Format the date object to a string in the desired format
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.HeadingText}>Recuerdame</Text>
      <Text style={styles.SubHeadingText}>Defina cada cuanto quieres que te lo recuerde</Text>
      {weekdays.map((day, index) => (
        <View key={day} style={{ flexDirection: 'row', marginTop: 5 }}>
          <Checkbox
            value={checkedWeekdays[index]}
            onValueChange={() => handleCheckboxChange(index)}
            style={{ marginRight: 5 }}
          />
          <Text style={{ marginBottom: 4, fontSize: 18 }}>{day}</Text>
        </View>
      ))}

      {reminders.map((reminder, index) => (
        <View key={index} style={{ flexDirection: 'row' }}>
          <Text style={{ marginTop: 7, fontSize: 18 }}>{reminder.label}</Text>
          <Button title={reminder.time} onPress={() => showDatePicker(index)} />
          <DateTimePickerModal
            isVisible={reminder.isDatePickerVisible}
            mode="time"
            display="inline"
            onConfirm={(date) => handleConfirm(index, date)}
            onCancel={() => hideDatePicker(index)}
          />
        </View>
      ))}

      <Button
        title="Guardar"
        onPress={() => {
          navigation.navigate('MainScreen');
          console.warn(reminders);
        }}
      />
      <Button title="Volver Atras" onPress={() => navigation.navigate('MainScreen')} />
    </View>
  );
}
