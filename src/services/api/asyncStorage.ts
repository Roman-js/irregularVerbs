import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  STORAGE_ACTIVITY_COUNTER_KEY,
  STORAGE_STEP_KEY,
} from '../../constants/storage';

export type ActivityValueType = {
  startDate: Date;
  lastChangesDate: Date;
};

export const getActivityValue = async () => {
  try {
    const result: string =
      (await AsyncStorage.getItem(STORAGE_ACTIVITY_COUNTER_KEY)) ?? '1';
    return await JSON.parse(result);
  } catch (err) {
    console.log('Error Activity Counter: ', err);
  }
};

export const setActivityValue = async (value: ActivityValueType) => {
  try {
    await AsyncStorage.setItem(
      STORAGE_ACTIVITY_COUNTER_KEY,
      JSON.stringify(value),
    );
  } catch (err) {
    console.log('Error Activity Counter: ', err);
  }
};

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
