import {useEffect} from 'react';
import {RewardedAd, TestIds} from '@react-native-admob/admob';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeTabParamList} from '../../../navigations/HomeNavigation/HomeTab';

export const useLevelCompletedScreen = () => {
  const adUnitId = TestIds.REWARDED;
  const rewarded = RewardedAd.createAd(adUnitId);
  const navigation = useNavigation<StackNavigationProp<HomeTabParamList>>();

  useEffect(() => {
    const subscriptions = [
      rewarded.addEventListener('adLoaded', () => {
        console.log('interstitial loaded');
      }),
    ];
    return () => subscriptions.forEach(sub => sub.remove());
  }, [rewarded]);

  const onAnimationFinish = () => {
    console.log('onAnimationFinish');

    rewarded?.show();
    navigation.navigate('HomeScreen');
  };

  return {onAnimationFinish};
};
