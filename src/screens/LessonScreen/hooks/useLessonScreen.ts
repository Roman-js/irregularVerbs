import {useState, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {verbContent} from '../../../constants/verbContent';
import {AppStateType} from '../../../store/store';
import {VerbType} from '../../../types/lessonContentTypes';
import {locale} from '../../../utils/locale';

export const useLessonScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');

  const {currentLesson} = useSelector((state: AppStateType) => state.home);
  const {verbid, form} = currentLesson[currentQuestion];

  //count of questions equal 12
  const activeQuestion: VerbType =
    verbContent.find(question => question.verbid === verbid) || verbContent[0];

  const formWord = activeQuestion[`v${form}` as keyof VerbType];
  const translation = activeQuestion[locale as keyof VerbType];

  const onPressContinue = () => {
    if (inputValue === formWord) {
      setCurrentQuestion(currentQuestion + 1);
      setInputValue('');
    }
  };

  const onPressSkip = () => {
    setCurrentQuestion(currentQuestion + 1);
    setInputValue('');
  };

  const setInputValueToLowerCase = useCallback((value: string) => {
    setInputValue(value.toLowerCase());
  }, []);

  const {t} = useTranslation();

  const placeholder = form === 2 ? 'simplePast' : 'pastParticiple';

  return {
    formWord,
    translation,
    placeholder,
    form,
    inputValue,
    setInputValueToLowerCase,
    onPressContinue,
    onPressSkip,
    t,
  };
};
