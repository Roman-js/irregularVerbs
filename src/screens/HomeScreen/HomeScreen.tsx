import React, {FC} from 'react';
import {FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {lessonContent} from '../../constants/lessonContent';
import {StepImage} from '../../components/StepImage/StepImage';
import {colors} from '../../constants/colors';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';

export const HomeScreen: FC = () => {
  const {availableStep} = useSelector((state: AppStateType) => state.home);

  return (
    <LinearGradient
      colors={colors.firstArrayOfGradients}
      style={styles.linearGradient}>
      <FlatList
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
    </LinearGradient>
  );
};
