import {StyleSheet, ViewStyle} from 'react-native';
import {colors} from '../../constants/colors';

const circleStyles: ViewStyle = {
  width: 34,
  height: 34,
  borderRadius: 17,
  borderColor: colors.completed,
  borderWidth: 4,
  justifyContent: 'center',
  alignSelf: 'center',
  position: 'absolute',
  top: 0,
  bottom: 0,
};

export const styles = StyleSheet.create({
  textNumber: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.white,
  },
  circleRight: {
    ...circleStyles,
    right: 0,
  },
  circleLeft: {
    ...circleStyles,
    left: 0,
  },
});
