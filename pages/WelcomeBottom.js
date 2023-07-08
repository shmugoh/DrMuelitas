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

import styles from '../styles';

const WelcomeBottom = () => {
  // ref
  const bottomSheetModalRef = useRef(null);
  const video = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['78%'], []);

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
            style={styles.BottomSheet.bottomButton}
            onPress={() => handleSnapPress(0)}
          >
            <Text style={styles.BottomSheet.bottomButtonText}>Iniciar</Text>
          </TouchableOpacity>
        </BottomSheetScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default WelcomeBottom;
