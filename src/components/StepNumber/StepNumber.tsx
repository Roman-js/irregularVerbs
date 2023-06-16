import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {STATUSSTEP} from '../../types/commonTypes';
import {styles} from './styles';
import {colors} from '../../constants/colors';

type StepNumber = {
  position: number; //right = 0, left = 1
  status: STATUSSTEP;
  stepNumber: number;
};

export const StepNumber: FC<StepNumber> = ({position, status, stepNumber}) => {
  const borderColor =
    status === STATUSSTEP.ACTIVE
      ? {borderColor: colors.active}
      : status === STATUSSTEP.COMPLETED
      ? {borderColor: colors.completed}
      : {borderColor: colors.disabled};

  return (
    <View
      style={
        position
          ? [styles.circleLeft, borderColor]
          : [styles.circleRight, borderColor]
      }>
      <Text style={styles.textNumber}>{stepNumber}</Text>
    </View>
  );
};
