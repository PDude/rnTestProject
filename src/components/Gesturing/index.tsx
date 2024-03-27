import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const SIZE = 80;
const CIRCLE_RADIUS = SIZE * 2;

type ContextInterface = {
  translateX: number;
  translateY: number;
};

export const Gesturing = memo(() => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextInterface
  >({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);

      if (distance < CIRCLE_RADIUS + SIZE / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  return (
    <GestureHandlerRootView>
      <View style={styles.wrapper}>
        <PanGestureHandler onGestureEvent={panGestureHandler}>
          <Animated.View style={[styles.item, rStyle]} />
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
});

const styles = StyleSheet.create({
  item: {
    alignSelf: 'center',
    backgroundColor: '#03f4fc',
    width: SIZE,
    height: SIZE,
    borderRadius: 20,
  },
  wrapper: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: '#03f4fc',
    alignSelf: 'center',
  },
});
