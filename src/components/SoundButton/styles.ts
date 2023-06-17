import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 10,
  },
  soundContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: colors.orangeLight,
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    shadowOffset: {width: 1, height: 1},
    shadowColor: colors.black,
    shadowOpacity: 1,
    elevation: 3,
  },
  version: {
    height: 25,
    width: 25,
    borderRadius: 12.5,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    marginBottom: -20,
  },
  versionText: {
    color: colors.white,
  },
  title: {marginTop: -2},
});
