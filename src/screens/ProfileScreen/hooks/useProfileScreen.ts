import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../store/store';
import {useTranslation} from 'react-i18next';
import {setAvailableStepAction} from '../../../store/actions/actions';
import {setSavedStep} from '../../../utils/savedSteps';
import {rangeContent} from '../../../constants/rangeContent';

const removedProgressValue = 1;

export const useProfileScreen = () => {
  const {availableStep} = useSelector((state: AppStateType) => state.home);
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const removeMyProgress = () => {
    Alert.alert(t('Main.areyousure'), t('Main.resetaciklama') as string, [
      {
        text: t('Main.vazgec') as string,
        onPress: () => {
          setSavedStep(removedProgressValue);
          dispatch(setAvailableStepAction(removedProgressValue));
        },
      },
      {
        text: t('Main.quit') as string,
        onPress: () => console.log('Ask me later pressed'),
        style: 'cancel',
      },
    ]);
  };

  const spiritAnimal =
    availableStep >= 10
      ? rangeContent[Number(availableStep.toString().slice(0, -1))]
      : rangeContent[0];
  return {
    valueOfProgress: availableStep,
    spiritAnimal,
    removeMyProgress,
    t,
  };
};
