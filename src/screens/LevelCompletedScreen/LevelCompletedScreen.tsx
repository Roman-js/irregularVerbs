import React from 'react';
import {ImageBackground} from 'react-native';
import {SuccessfulCheck} from '../../components/SuccessfulCheck/SuccessfulCheck';
import {useLevelCompletedScreen} from './hooks/useLevelCompletedScreen';
import {styles} from './styles';

export const LevelCompletedScreen = () => {
  const {onAnimationFinish} = useLevelCompletedScreen();

  return (
    <ImageBackground
      source={require('../../assets/imgs/lessonBackground.jpg')}
      style={styles.wrapper}>
      <SuccessfulCheck onAnimationFinish={onAnimationFinish} />
    </ImageBackground>
  );
};
