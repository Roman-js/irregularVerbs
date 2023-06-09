import {ActivityCounterType} from '../../types/commonTypes';
import {ExerciseType} from '../../types/lessonContentTypes';

export const AVAILABLESTEPACTION = 'AVAILABLESTEPACTION';
export const CURRENTLESSON = 'CURRENTLESSON';
export const SOUNDAVAILABLE = 'SOUNDAVAILABLE';
export const CURRENTSTEP = 'CURRENTSTEP';
export const HIDETABNAVIGATION = 'HIDETABNAVIGATION';
export const ACTIVITYCOUNTER = 'ACTIVITYCOUNTER';
export const ACTIVITYVALUE = 'ACTIVITYVALUE';

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

export type setActivityCounterType = {
  type: typeof ACTIVITYCOUNTER;
  payload: ActivityCounterType;
};

export type setActivityDaysValueType = {
  type: typeof ACTIVITYVALUE;
  payload: number;
};

export type ActionTypes =
  | setActivityDaysValueType
  | setActivityCounterType
  | SetAvailableStepActionType
  | SetCurrentLessonType
  | SetSoundAvailableType
  | setCurrentStepType
  | setHideTabNavigationType;
