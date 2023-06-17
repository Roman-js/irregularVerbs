import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import SoundWordIcon from '../../assets/svg/SoundWordIcon';
import Typography from '../Typography';
import {styles} from './styles';

type SoundButtonType = {
  title: string;
  version: number;
  onPress: () => void;
};

export const SoundButton: FC<SoundButtonType> = ({title, version, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <>
        <View style={styles.version}>
          <Typography.H3
            style={styles.versionText}>{`v${version}`}</Typography.H3>
        </View>
        <View style={styles.soundContainer}>
          <SoundWordIcon />
          <Typography.H2 style={styles.title}> {title}</Typography.H2>
        </View>
      </>
    </TouchableOpacity>
  );
};
