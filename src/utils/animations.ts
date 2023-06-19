import {
  useAnimatedStyle,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export const AnimationFeatures = () => {
  const bounceAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSequence(
            withTiming(2.5, {duration: 100}),
            withSpring(1.0),
          ),
        },
      ],
    };
  });

  return {
    bounceAnimatedStyles,
  };
};
