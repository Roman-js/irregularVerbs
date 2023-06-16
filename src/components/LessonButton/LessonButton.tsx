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
};

export const LessonButton: FC<LessonButtonProps> = ({
  onPress,
  buttonStyle,
  title,
}) => {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onPress}>
      <LinearGradient
        colors={colors.secondArrayOfGradients}
        style={styles.gradient}>
        <Typography.H3>{title}</Typography.H3>
      </LinearGradient>
    </TouchableOpacity>
  );
};
