import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';

const storeName = async (FirstName, LastName) => {
  try {
    await AsyncStorage.setItem('FirstName', FirstName);
    await AsyncStorage.setItem('LastName', LastName);
  } catch (e) {
    Alert.alert('Error', e);
  }
};

const readName = async () => {
  try {
    const FirstName = await AsyncStorage.getItem('FirstName');
    const LastName = await AsyncStorage.getItem('LastName');
    if (FirstName !== null) {
      return [FirstName, LastName];
    }
  } catch (e) {
    Alert.alert('Error', e);
  }
};

export default function KnowMePage({ navigation }) {
  const [FirstName, onChangeFirstName] = React.useState();
  const [LastName, onChangeLastName] = React.useState();

  React.useEffect(() => {
    (async () => {
      const name = await readName();
      onChangeFirstName(name[0]);
      onChangeLastName(name[1]);
    })();

    return () => {
      // cleans up function once components are unmounted
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.TimeCard.container}>
        <Text style={{ ...styles.HeadingText, padding: 8, marginBottom: 12 }}>Dime Tus Datos</Text>
        <Text style={styles.SmallText}>Nombre</Text>
        <TextInput
          style={styles.TextBox}
          placeholder="Nombre"
          autoComplete="given-name"
          value={FirstName}
          onChangeText={onChangeFirstName}
        />
        <Text style={styles.SmallText}>Apellido</Text>
        <TextInput
          style={styles.TextBox}
          placeholder="Apellido"
          autoComplete="family-name"
          value={LastName}
          onChangeText={onChangeLastName}
        />
      </View>

      <View style={styles.ButtonSheet.buttonRowContainer}>
        <TouchableOpacity
          style={styles.ButtonSheet.smallButton}
          onPress={async () => {
            storeName(FirstName, LastName);
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
