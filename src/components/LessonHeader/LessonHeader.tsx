import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Alert, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LeftChevronIcon from '../../assets/svg/LeftChevronIcon';
import SoundIcon from '../../assets/svg/SoundIcon';
import NoSoundIcon from '../../assets/svg/NoSoundIcon';
import {HomeTabParamList} from '../../navigations/HomeNavigation/HomeTab';
import {AppStateType} from '../../store/store';
import Typography from '../Typography';
import {styles} from './styles';
import {setSoundAvailableAction} from '../../store/actions/actions';
import {useTranslation} from 'react-i18next';

export const LessonHeader = () => {
  const navigation = useNavigation<StackNavigationProp<HomeTabParamList>>();
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const {currentStep} = useSelector((states: AppStateType) => states.home);
  const {soundAvailable} = useSelector((states: AppStateType) => states.lesson);

  const goToThePrevPage = () => {
    Alert.alert(t('Main.areyousure2') as string, '', [
      {
        text: t('Main.stay') as string,
        style: 'cancel',
      },
      {
        text: t('Main.quit') as string,
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  const onPressSoundSwitcher = () => {
    dispatch(setSoundAvailableAction());
  };

  const soundIcon = soundAvailable ? <SoundIcon /> : <NoSoundIcon />;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={goToThePrevPage}>
        <LeftChevronIcon style={styles.backIcon} />
      </TouchableOpacity>
      <Typography.H1 style={styles.title}>{currentStep}</Typography.H1>
      <TouchableOpacity onPress={onPressSoundSwitcher}>
        {soundIcon}
      </TouchableOpacity>
    </View>
  );
};
