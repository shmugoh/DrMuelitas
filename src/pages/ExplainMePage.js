import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import styles from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function ExplainMePage({ navigation }) {
  const video = useRef(null);
  const videoWidth = Math.round(screenWidth * 0.8); // Adjust the scaling factor as needed
  const videoHeight = Math.round((videoWidth / 243) * 432); // Maintain aspect ratio

  return (
    <View style={styles.container}>
      {/* <Text style={styles.HeadingText}>Explicame</Text> */}
      <Video
        ref={video}
        style={{
          ...styles.VideoSheet,
          width: videoWidth,
          height: videoHeight,
          marginTop: Platform.OS == 'ios' ? 120 : -10,
          marginBottom: Platform.OS == 'ios' ? 20 : -10,
        }}
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
          // await AsyncStorage.removeItem('ClosedFirstTimeSheet');
          navigation.navigate('MainScreen');
        }}
      >
        <Text style={styles.ButtonSheet.mediumButtonText}>Volver Atrás</Text>
      </TouchableOpacity>
    </View>
  );
}
