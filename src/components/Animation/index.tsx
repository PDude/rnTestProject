import {useStyles} from '@/components/Animation/style';
import React, {memo, useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  SharedValue,
} from 'react-native-reanimated';

const SIZE = 100;

export const Animation = memo(() => {
  const styles = useStyles();

  const handlerRotation = (progress: SharedValue<number>) => {
    'worklet';
    return `${progress.value * 2 * Math.PI}rad`;
  };

  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

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

  return (
    <View style={styles.container}>
      <Animated.View
        style={[{width: SIZE, height: SIZE}, styles.item, reanimatedStyles]}
      />
    </View>
  );
});
