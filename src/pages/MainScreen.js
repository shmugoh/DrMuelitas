import { StatusBar } from 'expo-status-bar';
import { View, Button, Alert, BackHandler, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../styles';

import WelcomeBottom from './WelcomeBottom';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.HeadingText}>DrMuelitas</Text> */}
      <TouchableOpacity
        style={styles.ButtonSheet.bigButton}
        onPress={() => navigation.navigate('KnowMePage')}
      >
        <Text style={styles.ButtonSheet.bigButtonText}>Conóceme</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ButtonSheet.bigButton}
        onPress={() => navigation.navigate('ExplainMePage')}
      >
        <Text style={styles.ButtonSheet.bigButtonText}>Explícame</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ButtonSheet.bigButton}
        onPress={() => navigation.navigate('RemindMePage')}
      >
        <Text style={styles.ButtonSheet.bigButtonText}>Recuérdamelo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ButtonSheet.mediumButton}
        onPress={() =>
          Alert.alert('Confirmar Salida', '¿Estás seguro/a de que deseas salir de la aplicación?', [
            {
              text: 'Si',
              onPress: () => BackHandler.exitApp(),
            },
            {
              text: 'No',
              onPress: () => null,
            },
          ])
        }
      >
        <Text style={styles.ButtonSheet.mediumButtonText}>Salir</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
