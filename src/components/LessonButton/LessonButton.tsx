import React, {FC} from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../constants/colors';
import Typography from '../Typography';
import {styles} from './styles';

type LessonButtonProps = {
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  title: string;
  disabled?: boolean;
};

export const LessonButton: FC<LessonButtonProps> = ({
  onPress,
  buttonStyle,
  title,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, buttonStyle]}
      onPress={onPress}
      disabled={disabled}>
      <LinearGradient
        colors={
          disabled
            ? colors.thirdArrayOfGradients
            : colors.secondArrayOfGradients
        }
        style={styles.gradient}>
        <Typography.H3>{title}</Typography.H3>
      </LinearGradient>
    </TouchableOpacity>
  );
};
