import { View, Text, Button, TextInput } from 'react-native'
import styles from './styles';

export default function KnowMePage({navigation}) {
    // TODO: Implement AsyncStorage
    return (
        <View style={styles.container}>
            <Text style={styles.HeadingText}>Conoceme</Text>
            <Text style={styles.SubHeadingText}>Dime Tus Datos</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Nombre"
            />
            <TextInput
                style={{height: 40}}
                placeholder="Apellido"
            />
            
            <Button
                title="Guardar"
                onPress={() => navigation.navigate('MainScreen')}
            />
            <Button
                title="Volver Atras"
                onPress={() => navigation.navigate('MainScreen')}
            />
        </View>
    )
}