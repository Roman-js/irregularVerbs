import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    height: 100,
    backgroundColor: colors.lightBlue,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  backIcon: {
    transform: [{rotate: '90deg'}],
  },
  title: {
    color: colors.orange,
  },
});
