import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Alert, BackHandler } from 'react-native';
import styles from '../styles';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.HeadingText}>DrMuelitas</Text> */}
      <Button title="Conóceme" onPress={() => navigation.navigate('KnowMePage')} />
      <Button title="Explícame" onPress={() => navigation.navigate('ExplainMePage')} />
      <Button title="Recuérdamelo" onPress={() => navigation.navigate('RemindMePage')} />
      <Button
        title="Salir"
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
      />
      <StatusBar style="auto" />
    </View>
  );
}
