import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const spaces = 50;
const buttonSizes = {
  width: Dimensions.get('screen').width / 2 - spaces,
  height: 60,
  borderRadius: 20,
};

export const styles = StyleSheet.create({
  container: {
    ...buttonSizes,
    shadowOffset: {width: 10, height: 10},
    shadowColor: colors.black,
    shadowOpacity: 1,
    elevation: 3,
  },
  gradient: {
    ...buttonSizes,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
