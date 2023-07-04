import { View, Text, Button } from 'react-native'
import styles from './styles';

export default function RemindMePage({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.HeadingText}>Recuerdame...</Text>
            <Button
                title="Volver Atras"
                onPress={() => navigation.navigate('MainScreen')}
            />
        </View>
    )
}