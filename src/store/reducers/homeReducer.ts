import {ExerciseType} from '../../types/lessonContentTypes';
import {
  ActionTypes,
  AVAILABLESTEPACTION,
  CURRENTLESSON,
  CURRENTSTEP,
  HIDETABNAVIGATION,
} from '../actions/actionTypes';

type homeReducerType = {
  availableStep: number;
  currentStep: number;
  currentLesson: ExerciseType[];
  hideTabNavigation: boolean;
};

const initialState: homeReducerType = {
  availableStep: 4,
  currentStep: 1,
  currentLesson: [],
  hideTabNavigation: false,
};

export const homeReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case AVAILABLESTEPACTION:
      return {...state, availableStep: action.payload};
    case CURRENTLESSON:
      return {...state, currentLesson: action.payload};
    case CURRENTSTEP:
      return {...state, currentStep: action.payload};
    case HIDETABNAVIGATION:
      return {...state, hideTabNavigation: action.payload};
    default:
      return state;
  }
};
