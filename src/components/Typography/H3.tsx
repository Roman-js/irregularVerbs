import React from 'react';
import {Text, TextProps} from 'react-native';
import s from './styles';

interface PropsT extends TextProps {}

export const H3: React.FC<PropsT> = ({children, style, ...rest}) => (
  <Text style={[s.h3, style]} {...rest}>
    {children}
  </Text>
);
