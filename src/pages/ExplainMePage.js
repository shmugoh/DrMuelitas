import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Platform, Dimensions, Animated } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function ExplainMePage({ navigation }) {
  const video = useRef(null);
  const videoWidth = Math.round(screenWidth * 0.8); // Adjust the scaling factor as needed
  const videoHeight = Math.round((videoWidth / 243) * 432); // Maintain aspect ratio
  const [isPlaying, setIsPlaying] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isPlaying ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    console.log(fadeAnim);
  }, [isPlaying, fadeAnim]);

  const playPauseButtonStyle = {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1,
    opacity: fadeAnim,
  };

  return (
    <View style={styles.container}>
      <Animated.View style={playPauseButtonStyle}>
        <TouchableOpacity style={playPauseButtonStyle} onPress={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <Ionicons name="pause" size={64} color="white" />
          ) : (
            <Ionicons name="play" size={64} color="white" />
          )}
        </TouchableOpacity>
      </Animated.View>

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
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        shouldPlay={isPlaying}
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
