import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_STEP_KEY} from '../constants/storage';

export const getSavedStep = async () => {
  try {
    const step: string = (await AsyncStorage.getItem(STORAGE_STEP_KEY)) ?? '1';
    return step;
  } catch (err) {
    console.log('Error Saved Step: ', err);
  }
};

export const setSavedStep = async (step: number) => {
  try {
    await AsyncStorage.setItem(STORAGE_STEP_KEY, step.toString());
  } catch (err) {
    console.log('Error Saved Step: ', err);
  }
};
