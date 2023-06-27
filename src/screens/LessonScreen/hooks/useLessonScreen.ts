import {useState, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import Sound from 'react-native-sound';
import {soundRequires} from '../../../constants/content/soundRequiresContent';
import {verbContent} from '../../../constants/content/verbContent';
import {AppStateType} from '../../../store/store';
import {VerbType} from '../../../types/lessonContentTypes';
import {locale} from '../../../utils/locale';
import {
  setAvailableStepAction,
  setCurrentLessonAction,
  setActivityCounter,
  setActivityDaysValue,
} from '../../../store/actions/actions';

import {HomeTabParamList} from '../../../navigations/HomeNavigation/HomeTab';
import {AnimationFeatures} from '../../../utils/animations';
import {dateCounter} from '../../../utils/dateCounter';
import {
  setActivityValue,
  setSavedStep,
} from '../../../services/api/asyncStorage';

type LoacalStateType = {
  currentQuestion: number;
  inputValue: string;
  showPronunciation: boolean;
};

export const useLessonScreen = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<HomeTabParamList>>();

  const {currentStep, availableStep, activityCounterDates, activeDaysValue} =
    useSelector((state: AppStateType) => state.home);
  const {currentLesson} = useSelector((state: AppStateType) => state.lesson);
  const {soundAvailable} = useSelector((state: AppStateType) => state.lesson);
  const {bounceAnimatedStyles} = AnimationFeatures();

  const getRandomQuestion = (): number =>
    Math.floor(Math.random() * (currentLesson.length - 1));

  const [localState, setLocalState] = useState<LoacalStateType>({
    currentQuestion: getRandomQuestion() || 0,
    inputValue: '',
    showPronunciation: false,
  });

  const {currentQuestion, inputValue, showPronunciation} = localState;
  const {verbid, form} = currentLesson[currentQuestion];
  const progressBarValue = 1 - currentLesson.length / 12;

  const activeQuestion: VerbType =
    verbContent.find(question => question.verbid === verbid) || verbContent[0];

  const formWord = activeQuestion[`v${form}` as keyof VerbType];
  const translation = activeQuestion[locale as keyof VerbType];

  const soundPlay = useCallback((soundTitle: string) => {
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
  }, []);

  const onPressCheck = () => {
    setLocalState({...localState, showPronunciation: true});
    if (inputValue === formWord) {
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

  const saveProgress = (numberOfNextStep: number) => {
    setSavedStep(numberOfNextStep);
    const isApprovedActivityLastDate = dateCounter(
      activityCounterDates.lastChangesDate,
    );
    const isApprovedActivityStartDate = dateCounter(
      activityCounterDates.startDate,
    );

    if (!activeDaysValue) {
      dispatch(setActivityDaysValue(1));
      return;
    }

    if (isApprovedActivityStartDate || isApprovedActivityLastDate === 1) {
      const modifiedActivityCounter = {
        ...activityCounterDates,
        lastChangesDate: new Date(),
      };
      dispatch(setActivityCounter(modifiedActivityCounter));
      setActivityValue(modifiedActivityCounter);
    }
  };

  const onPressContinue = () => {
    if (currentLesson.length === 1) {
      const numberOfNextStep = currentStep + 1;
      availableStep === currentStep &&
        dispatch(setAvailableStepAction(numberOfNextStep));
      availableStep < numberOfNextStep && saveProgress(numberOfNextStep);
      navigation.navigate('LevelCompletedScreen');
      return;
    }
    setLocalState({
      ...localState,
      currentQuestion: getRandomQuestion(),
      inputValue: '',
      showPronunciation: false,
    });

    if (inputValue === formWord) {
      const removeCurrentQuestion = currentLesson.filter(
        (question, index) => index !== currentQuestion,
      );
      dispatch(setCurrentLessonAction(removeCurrentQuestion));
    }
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
    progressBarValue,
    bounceAnimatedStyles,
    t,
  };
};
