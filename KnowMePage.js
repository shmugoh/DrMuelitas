import { View, Text, Button } from 'react-native'
import styles from './styles';

export default function KnowMePage({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.HeadingText}>Conoceme</Text>
            <Button
                title="Volver Atras"
                onPress={() => navigation.navigate('MainScreen')}
            />
        </View>
    )
}