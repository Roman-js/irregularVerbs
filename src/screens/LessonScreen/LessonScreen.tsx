import React from 'react';
import {ImageBackground, TextInput, View} from 'react-native';
import {styles} from './styles';
import {useLessonScreen} from './hooks/useLessonScreen';
import Typography from '../../components/Typography';
import {LessonButton} from '../../components/LessonButton/LessonButton';
import {SoundButton} from '../../components/SoundButton/SoundButton';
import {VerbType} from '../../types/lessonContentTypes';
import * as Progress from 'react-native-progress';
import {colors} from '../../constants/colors';

export const LessonScreen = () => {
  const {
    activeQuestion,
    translation,
    placeholder,
    form,
    t,
    inputValue,
    setInputValueToLowerCase,
    onPressCheck,
    onPressSkip,
    soundPlay,
    showPronunciation,
    onPressContinue,
    progressBarValue,
  } = useLessonScreen();

  return (
    <ImageBackground
      source={require('../../assets/imgs/lessonBackground.jpg')}
      style={styles.wrapper}>
      <View style={styles.questionContainer}>
        <Typography.H1>{activeQuestion.v1}</Typography.H1>
        <Typography.H2>{translation}</Typography.H2>
      </View>

      <View style={styles.placeholderContainer}>
        <Typography.H3>{t(`Placeholder.v${form}`)}</Typography.H3>
        <Typography.H3>{t(`Placeholder.${placeholder}`)}</Typography.H3>
      </View>

      <Progress.Bar
        progress={progressBarValue}
        width={null}
        color={colors.green}
        height={4}
        style={styles.progress}
      />

      {showPronunciation ? (
        <View style={styles.soundContainer}>
          {Array(3)
            .fill('')
            .map((value, index) => (
              <SoundButton
                key={index}
                onPress={() =>
                  soundPlay(
                    activeQuestion[`v${index + 1}` as keyof VerbType] as string,
                  )
                }
                version={index + 1}
                title={
                  activeQuestion[`v${index + 1}` as keyof VerbType] as string
                }
              />
            ))}
        </View>
      ) : (
        <TextInput
          style={styles.input}
          value={inputValue}
          editable={!showPronunciation}
          autoFocus={true}
          autoCapitalize="none"
          textAlign="center"
          autoCorrect={false}
          onChangeText={setInputValueToLowerCase}
        />
      )}
      <View style={styles.buttonContainer}>
        <LessonButton
          onPress={onPressSkip}
          title={t('Main.skip')}
          disabled={showPronunciation}
        />
        {showPronunciation ? (
          <LessonButton onPress={onPressContinue} title={t('Main.continue')} />
        ) : (
          <LessonButton onPress={onPressCheck} title={t('Main.check')} />
        )}
      </View>
    </ImageBackground>
  );
};
