import React, {Dispatch, FC, SetStateAction} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from './styles';

type SplashScreenType = {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export const SplashScreen: FC<SplashScreenType> = ({
  setIsLoading,
}): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <LottieView
        speed={1.5}
        autoPlay
        loop={false}
        source={require('../../assets/animations/cyclingLoading.json')}
        onAnimationFinish={() => setIsLoading(false)}
      />
    </View>
  );
};
