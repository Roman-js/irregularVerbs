import {useState, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import Sound from 'react-native-sound';
import {soundRequires} from '../../../constants/soundRequires';
import {verbContent} from '../../../constants/verbContent';
import {AppStateType} from '../../../store/store';
import {VerbType} from '../../../types/lessonContentTypes';
import {locale} from '../../../utils/locale';
import {
  setAvailableStepAction,
  setCurrentLessonAction,
} from '../../../store/actions/actions';

import {HomeTabParamList} from '../../../navigations/HomeNavigation/HomeTab';

type LoacalStateType = {
  currentQuestion: number;
  inputValue: string;
  showPronunciation: boolean;
};

export const useLessonScreen = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<HomeTabParamList>>();

  const {currentLesson, currentStep, availableStep} = useSelector(
    (state: AppStateType) => state.home,
  );
  const {soundAvailable} = useSelector((state: AppStateType) => state.lesson);

  const getRandomQuestion = (): number =>
    Math.floor(Math.random() * (currentLesson.length - 1));

  const [localState, setLocalState] = useState<LoacalStateType>({
    currentQuestion: getRandomQuestion() || 0,
    inputValue: '',
    showPronunciation: false,
  });

  const {currentQuestion, inputValue, showPronunciation} = localState;
  const {verbid, form} = currentLesson[currentQuestion];

  const activeQuestion: VerbType =
    verbContent.find(question => question.verbid === verbid) || verbContent[0];

  const formWord = activeQuestion[`v${form}` as keyof VerbType];
  const translation = activeQuestion[locale as keyof VerbType];

  const soundPlay = (soundTitle: string) => {
    const soundVar = new Sound(
      soundRequires[soundTitle],
      //Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('the error: ', error);
        }
      },
    );
    setTimeout(() => {
      soundVar.play();
    }, 100);
    //soundVar.release();
  };

  const onPressCheck = () => {
    if (inputValue === formWord) {
      setLocalState({...localState, showPronunciation: true});
      soundAvailable && soundPlay(inputValue);
    }
  };

  const onPressSkip = () => {
    setLocalState({
      ...localState,
      currentQuestion: getRandomQuestion(),
      inputValue: '',
    });
  };

  const onPressContinue = () => {
    if (currentLesson.length === 1 && availableStep === currentStep) {
      dispatch(setAvailableStepAction(currentStep + 1));
      navigation.navigate('HomeScreen');
      return;
    }

    setLocalState({
      ...localState,
      currentQuestion: getRandomQuestion(),
      inputValue: '',
      showPronunciation: false,
    });
    const removeCurrentQuestion = currentLesson.filter(
      (question, index) => index !== currentQuestion,
    );
    dispatch(setCurrentLessonAction(removeCurrentQuestion));
  };

  const setInputValueToLowerCase = useCallback(
    (value: string) => {
      setLocalState({...localState, inputValue: value.toLowerCase()});
    },
    [localState],
  );

  const placeholder = form === 2 ? 'simplePast' : 'pastParticiple';

  return {
    formWord,
    activeQuestion,
    translation,
    placeholder,
    form,
    inputValue,
    setInputValueToLowerCase,
    onPressCheck,
    onPressSkip,
    onPressContinue,
    soundPlay,
    showPronunciation,
    t,
  };
};