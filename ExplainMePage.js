import { View, Text, Button } from 'react-native'
import styles from './styles';

export default function ExplainMePage({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.HeadingText}>Explicame</Text>
            <Button
                title="Volver Atras"
                onPress={() => navigation.navigate('MainScreen')}
            />
        </View>
    )
}