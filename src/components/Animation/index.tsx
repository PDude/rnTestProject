import React, {memo, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

const SIZE = 80;

export const Animation = memo(() => {
  const handlerRotation = (progress: SharedValue<number>) => {
    'worklet';
    return `${progress.value * 2 * Math.PI}rad`;
  };

  const progress = useSharedValue(1);
  const scale = useSharedValue(1.5);

  const reanimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [{scale: scale.value}, {rotate: handlerRotation(progress)}],
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      progress.value = withRepeat(withSpring(0.5), 3, true);
      scale.value = withRepeat(withSpring(1), 3, true);
    }, 500);
  }, [progress, scale]);

  return <Animated.View style={[styles.item, reanimatedStyles]} />;
});

const styles = StyleSheet.create({
  item: {
    alignSelf: 'center',
    backgroundColor: '#fcba03',
    width: SIZE,
    height: SIZE,
  },
});
