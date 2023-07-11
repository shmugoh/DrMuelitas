import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import { Text, TouchableOpacity, Dimensions, Platform } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Video, ResizeMode } from 'expo-av';

import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';

const storeFirstTimeSheetClosed = async () => {
  try {
    await AsyncStorage.setItem('ClosedFirstTimeSheet', JSON.stringify(true));
  } catch (error) {
    console.log(error);
    return false;
  }
};

const hasClosedFirstTimeSheet = async () => {
  try {
    const closedFirstTimeSheet = await AsyncStorage.getItem('ClosedFirstTimeSheet');
    return !!closedFirstTimeSheet; // Return true if closedFirstTimeSheet has a value, otherwise return false
  } catch (error) {
    console.log(error);
    return false; // Return false in case of an error
  }
};

const WelcomeBottom = () => {
  const [sheetClosed, setSheetClosed] = useState(null);

  useEffect(() => {
    const checkSheetClosed = async () => {
      const isSheetClosed = await hasClosedFirstTimeSheet();
      setSheetClosed(isSheetClosed);
    };

    checkSheetClosed();
  }, []);

  useEffect(() => {
    if (sheetClosed === false) {
      presentBottomSheetModal();
    }
  }, [sheetClosed]);

  const bottomSheetModalRef = useRef(null);
  const video = useRef(null);
  const snapPoints = useMemo(() => ['80%'], []);

  const presentBottomSheetModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSnapPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const renderWelcomeBottom = () => {
    if (!sheetClosed) {
      const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

      const videoWidth = Math.round(screenWidth * 0.6); // Adjust the scaling factor as needed
      const videoHeight = Math.round((videoWidth / 243) * 432); // Maintain aspect ratio

      return (
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            enablePanDownToClose={false}
            index={0}
            snapPoints={snapPoints}
            style={styles.BottomSheet.bottomStyle}
          >
            <BottomSheetView style={styles.BottomSheet.bottomContainer}>
              <Text
                style={{
                  ...styles.BottomSheet.bottomTitle,
                  fontSize: Platform.OS == 'android' ? 28 : 32,
                }}
              >
                ¡Hola, Soy Doc Muelitas!
              </Text>
            </BottomSheetView>
            <BottomSheetScrollView style={styles.BottomSheet.bottomContainer}>
              <Text style={styles.BottomSheet.bottomText}>
                ¡Conoce al increíble Doc Muelitas: tu héroe de la sonrisa!
              </Text>
              <Video
                ref={video}
                style={{
                  ...styles.VideoSheet,
                  width: videoWidth,
                  height: videoHeight,
                  marginTop: Platform.OS == 'android' ? 5 : 15,
                  marginBottom: Platform.OS == 'ios' ? 15 : -5,
                }}
                source={{
                  uri: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
                }}
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                shouldPlay
              />
              <TouchableOpacity
                style={{ ...styles.ButtonSheet.mediumButton }}
                onPress={async () => {
                  handleSnapPress(0);
                  storeFirstTimeSheetClosed();
                }}
              >
                <Text style={{ ...styles.ButtonSheet.bigButtonText }}>Iniciar</Text>
              </TouchableOpacity>
            </BottomSheetScrollView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      );
    }

    return null;
  };

  return sheetClosed === null ? null : renderWelcomeBottom();
};

export default WelcomeBottom;
