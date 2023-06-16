import React, {FC} from 'react';
import {Text, TextProps} from 'react-native';
import s from './styles';

interface PropsT extends TextProps {}

export const H1: FC<PropsT> = ({children, style, ...rest}) => {
  return (
    <Text style={[s.h1, style]} {...rest}>
      {children}
    </Text>
  );
};
