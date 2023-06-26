import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.skinColor,
  },
  button: {
    backgroundColor: colors.lightBlue,
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: colors.orange,
    borderWidth: 1,
    shadowOffset: {width: 5, height: 5},
    shadowColor: colors.black,
    shadowOpacity: 1,
    elevation: 3,
  },
  indicatorContainer: {
    flexDirection: 'row',
    margin: 20,
    marginRight: 100,
    justifyContent: 'space-between',
  },
  indicatorDescription: {
    paddingHorizontal: 20,
  },
  buttonWrapper: {paddingHorizontal: 20},
  animation: {width: '100%', height: 200},
  animationTitle: {
    textAlign: 'center',
    color: colors.orange,
  },
});
