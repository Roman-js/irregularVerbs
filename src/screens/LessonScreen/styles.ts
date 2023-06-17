import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.lightBlue,
    padding: 20,
  },
  placeholderContainer: {
    backgroundColor: colors.skinColor,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    padding: 10,
    borderColor: colors.yellow,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  questionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
    borderColor: colors.yellow,
    borderWidth: 1,
    backgroundColor: colors.skinColor,
    shadowOffset: {width: 3, height: 3},
    shadowColor: colors.yellow,
    shadowOpacity: 1,
    elevation: 1,
  },
  input: {
    padding: 15,
    backgroundColor: colors.white,
    borderColor: colors.yellow,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    borderWidth: 1,
    borderTopColor: 'transparent',
    shadowOffset: {width: 1, height: 1},
    shadowColor: colors.black,
    shadowOpacity: 1,
    elevation: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  soundContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
