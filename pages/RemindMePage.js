import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import Checkbox from 'expo-checkbox';
import styles from '../styles';

export default function RemindMePage({ navigation }) {
  const [isChecked, setChecked] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.HeadingText}>Recuerdame</Text>
      <Text style={styles.SubHeadingText}>Defina cada cuanto quieres que te lo recuerde</Text>

      {/* TODO: Repetir el CheckBox-Dia por Bucle */}
      <View style={{ flexDirection: 'row' }}>
        <Checkbox value={isChecked} onValueChange={setChecked}></Checkbox>
        <Text>Lunes</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Checkbox value={isChecked} onValueChange={setChecked}></Checkbox>
        <Text>Martes</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Checkbox value={isChecked} onValueChange={setChecked}></Checkbox>
        <Text>Miercoles</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Checkbox value={isChecked} onValueChange={setChecked}></Checkbox>
        <Text>Jueves</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Checkbox value={isChecked} onValueChange={setChecked}></Checkbox>
        <Text>Viernes</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Checkbox value={isChecked} onValueChange={setChecked}></Checkbox>
        <Text>Sabado</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Checkbox value={isChecked} onValueChange={setChecked}></Checkbox>
        <Text>Domingo</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text>Recordatorio 1: </Text>
        <Button title="00:00" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>Recordatorio 2: </Text>
        <Button title="00:00" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>Recordatorio 3: </Text>
        <Button title="00:00" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>

      <Button title="Guardar" onPress={() => navigation.navigate('MainScreen')} />
      <Button title="Volver Atras" onPress={() => navigation.navigate('MainScreen')} />
    </View>
  );
}
