// TODO: Fix Messy Codebase
import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
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
  const [SheetClosed, hasSheetClosed] = useState();
  useEffect(() => {
    (async () => {
      const isSheetClosed = await hasClosedFirstTimeSheet();
      hasSheetClosed(isSheetClosed);
    })();
    return () => {
      // cleans up function once components are unmounted
    };
  }, []);

  if (true) {
    // ref
    const bottomSheetModalRef = useRef(null);
    const video = useRef(null);
    // variables
    const snapPoints = useMemo(() => ['80%'], []);
    // callbacks
    const presentBottomSheetModal = useCallback(() => {
      bottomSheetModalRef.current?.present();
    }, []);
    const handleSnapPress = useCallback(() => {
      bottomSheetModalRef.current?.dismiss();
    }, []);

    // effects
    useEffect(() => {
      presentBottomSheetModal();
    }, []);

    // renders
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
            <Text style={styles.BottomSheet.bottomTitle}>¡Hola, Soy Doc Muelitas!</Text>
          </BottomSheetView>
          <BottomSheetScrollView style={styles.BottomSheet.bottomContainer}>
            <Text style={styles.BottomSheet.bottomText}>
              ¡Conoce al increíble Doc Muelitas: tu héroe de la sonrisa!
            </Text>
            <Video
              ref={video}
              style={styles.BottomSheet.bottomWelcomeVideo}
              source={{
                uri: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
              }}
              resizeMode={ResizeMode.CONTAIN}
              isLooping
              shouldPlay
            />
            <TouchableOpacity
              style={{ ...styles.ButtonSheet.bigButton, marginBottom: 20 }}
              onPress={async () => {
                handleSnapPress(0);
                storeFirstTimeSheetClosed();
              }}
            >
              <Text style={styles.ButtonSheet.bigButtonText}>Iniciar</Text>
            </TouchableOpacity>
          </BottomSheetScrollView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  } else {
    return 1;
  }
};

export default WelcomeBottom;
