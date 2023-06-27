import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {lessonContent} from '../../constants/content/lessonContent';
import {StepImage} from '../../components/StepImage/StepImage';
import {colors} from '../../constants/colors';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';
import Animated, {FadeIn} from 'react-native-reanimated';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-admob/admob';

export const HomeScreen: FC = () => {
  const {availableStep} = useSelector((state: AppStateType) => state.home);

  return (
    <LinearGradient
      colors={colors.firstArrayOfGradients}
      style={styles.linearGradient}>
      <Animated.FlatList
        entering={FadeIn.duration(800)}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatListStyle}
        contentContainerStyle={styles.flatListContainer}
        data={lessonContent}
        inverted={true}
        renderItem={({item, index}) => (
          <StepImage
            exercise={item}
            index={index}
            availableStep={availableStep}
          />
        )}
      />
      <BannerAd
        size={BannerAdSize.BANNER}
        unitId={TestIds.BANNER} //ca-app-pub-2125675068430292~6313381773
        onAdFailedToLoad={error => console.error(error)}
        style={styles.banner}
        //requestOptions={{requestNonPersonalizedAdsOlny: true,}}
        //onAdClosed={()=>{}}
        //ref={bannerRef}
      />
    </LinearGradient>
  );
};
