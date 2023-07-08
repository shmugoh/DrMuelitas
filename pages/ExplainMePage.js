import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import styles from '../styles';

export default function ExplainMePage({ navigation }) {
  const video = useRef(null);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.HeadingText}>Explicame</Text> */}
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

      <TouchableOpacity
        style={styles.ButtonSheet.mediumButton}
        onPress={async () => {
          navigation.navigate('MainScreen');
        }}
      >
        <Text style={styles.ButtonSheet.mediumButtonText}>Volver Atras</Text>
      </TouchableOpacity>
    </View>
  );
}
