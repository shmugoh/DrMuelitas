import React from 'react';
import { View, Text, Button } from 'react-native'
import { Video, ResizeMode } from 'expo-av';
import styles from './styles';

export default function ExplainMePage({navigation}) {
    const video = React.useRef(null);

    return (
        <View style={styles.container}>
            <Text style={styles.HeadingText}>Explicame</Text>
            
            <Video
                ref={video}
                style={styles.ExplainMeVideo}
                source={{
                    uri: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                shouldPlay
            />
            
            <Button
                title="Volver Atras"
                onPress={() => navigation.navigate('MainScreen')}
            />
        </View>
    )
}