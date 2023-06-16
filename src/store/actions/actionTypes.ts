import {ExerciseType} from '../../types/lessonContentTypes';

export const AVAILABLESTEPACTION = 'AVAILABLESTEPACTION';
export const CURRENTLESSON = 'CURRENTLESSON';
export const SOUNDAVAILABLE = 'SOUNDAVAILABLE';
export const CURRENTSTEP = 'CURRENTSTEP';
export const HIDETABNAVIGATION = 'HIDETABNAVIGATION';

export type SetAvailableStepActionType = {
  type: typeof AVAILABLESTEPACTION;
  payload: number;
};

export type SetCurrentLessonType = {
  type: typeof CURRENTLESSON;
  payload: ExerciseType[];
};

export type SetSoundAvailableType = {
  type: typeof SOUNDAVAILABLE;
};

export type setCurrentStepType = {
  type: typeof CURRENTSTEP;
  payload: number;
};

export type setHideTabNavigationType = {
  type: typeof HIDETABNAVIGATION;
  payload: boolean;
};

export type ActionTypes =
  | SetAvailableStepActionType
  | SetCurrentLessonType
  | SetSoundAvailableType
  | setCurrentStepType
  | setHideTabNavigationType;
