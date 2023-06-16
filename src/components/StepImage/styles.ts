import {StyleSheet} from 'react-native';

const imageStyles = {
  width: 150,
  height: 150,
};

export const styles = StyleSheet.create({
  leftImage: {
    ...imageStyles,
    marginRight: 75,
  },
  rightImage: {
    ...imageStyles,
    marginLeft: 75,
  },
});
