import React, {FC} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import Typography from '../../components/Typography';
import {colors} from '../../constants/colors';
import {useProfileScreen} from './hooks/useProfileScreen';
import LottieView from 'lottie-react-native';
import {styles} from './styles';

type ProfileScreenType = {};

export const ProfileScreen: FC<ProfileScreenType> = (): JSX.Element => {
  const {valueOfProgress, spiritAnimal, t, removeMyProgress, activeDaysValue} =
    useProfileScreen();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.indicatorContainer}>
        <CircularProgress
          value={valueOfProgress}
          activeStrokeColor={colors.completed}
          activeStrokeSecondaryColor={colors.green}
          subtitle={'your progress'}
        />
        <View style={styles.indicatorDescription}>
          <Typography.H1>
            {activeDaysValue + ' ' + t('Main.daylimited')}
          </Typography.H1>
          <Typography.H2>{t('Main.streaktooltip')}</Typography.H2>
        </View>
      </View>
      <Typography.H1 style={styles.animationTitle}>
        Your spirit animal is {spiritAnimal.name}
      </Typography.H1>
      <View style={styles.animation}>
        <LottieView
          speed={1}
          autoPlay
          loop={true}
          source={spiritAnimal.animation}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={removeMyProgress} style={styles.button}>
          <Typography.H3>{t('Main.resetbutton')}</Typography.H3>
        </TouchableOpacity>
        <TouchableOpacity onPress={removeMyProgress} style={styles.button}>
          <Typography.H3>{t('Main.removeads')} 1.99$</Typography.H3>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
