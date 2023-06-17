import {useState, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import Sound from 'react-native-sound';
import {useSelector} from 'react-redux';
import {soundRequires} from '../../../constants/soundRequires';
import {verbContent} from '../../../constants/verbContent';
import {AppStateType} from '../../../store/store';
import {VerbType} from '../../../types/lessonContentTypes';
import {locale} from '../../../utils/locale';

type LoacalStateType = {
  currentQuestion: number;
  inputValue: string;
  showPronunciation: boolean;
};

export const useLessonScreen = () => {
  const {t} = useTranslation();

  const [localState, setLocalState] = useState<LoacalStateType>({
    currentQuestion: 0,
    inputValue: '',
    showPronunciation: false,
  });

  const {currentQuestion, inputValue, showPronunciation} = localState;

  const {currentLesson} = useSelector((state: AppStateType) => state.home);
  const {soundAvailable} = useSelector((state: AppStateType) => state.lesson);
  const {verbid, form} = currentLesson[currentQuestion];

  //count of questions is equal 12
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
      currentQuestion: localState.currentQuestion + 1,
      inputValue: '',
    });
  };

  const onPressContinue = () => {
    if (inputValue === formWord) {
      setLocalState({
        ...localState,
        currentQuestion: localState.currentQuestion + 1,
        inputValue: '',
        showPronunciation: false,
      });
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
    t,
  };
};
