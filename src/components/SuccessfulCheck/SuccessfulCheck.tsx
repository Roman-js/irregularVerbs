import React, {FC} from 'react';
import LottieView from 'lottie-react-native';
import {styles} from './styles';

type SuccessfulCheckType = {
  showAnimation?: boolean;
  onAnimationFinish: () => void;
};

export const SuccessfulCheck: FC<SuccessfulCheckType> = ({
  showAnimation = true,
  onAnimationFinish,
}): JSX.Element => {
  if (!showAnimation) {
    return <></>;
  }

  return (
    <LottieView
      speed={1}
      autoPlay
      loop={false}
      source={require('../../assets/animations/successfulCheck.json')}
      style={styles.checkPosition}
      onAnimationFinish={onAnimationFinish}
    />
  );
};
