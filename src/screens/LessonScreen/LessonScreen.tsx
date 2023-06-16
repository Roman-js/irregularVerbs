import React from 'react';
import {ImageBackground, TextInput, View} from 'react-native';
import {styles} from './styles';
import {useLessonScreen} from './hooks/useLessonScreen';
import Typography from '../../components/Typography';
import {LessonButton} from '../../components/LessonButton/LessonButton';

export const LessonScreen = () => {
  const {
    formWord,
    translation,
    placeholder,
    form,
    t,
    inputValue,
    setInputValueToLowerCase,
    onPressContinue,
    onPressSkip,
  } = useLessonScreen();

  return (
    <ImageBackground
      source={require('../../assets/imgs/lessonBackground.jpg')}
      style={styles.wrapper}>
      <View style={styles.questionContainer}>
        <Typography.H1>{formWord}</Typography.H1>
        <Typography.H2>{translation}</Typography.H2>
      </View>

      <View style={styles.placeholderContainer}>
        <Typography.H3>{t(`Placeholder.v${form}`)}</Typography.H3>
        <Typography.H3>{t(`Placeholder.${placeholder}`)}</Typography.H3>
      </View>

      <TextInput
        style={styles.input}
        value={inputValue}
        autoFocus={true}
        autoCapitalize="none"
        textAlign="center"
        autoCorrect={false}
        onChangeText={setInputValueToLowerCase}
      />
      <View style={styles.buttonContainer}>
        <LessonButton onPress={onPressSkip} title={t('Main.skip')} />
        <LessonButton onPress={onPressContinue} title={t('Main.continue')} />
      </View>
    </ImageBackground>
  );
};
