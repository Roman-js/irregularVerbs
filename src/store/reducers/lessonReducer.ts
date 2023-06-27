import {ExerciseType} from '../../types/lessonContentTypes';
import {
  ActionTypes,
  CURRENTLESSON,
  SOUNDAVAILABLE,
} from '../actions/actionTypes';

type initialStateType = {
  soundAvailable: boolean;
  currentLesson: ExerciseType[];
};

const initialState: initialStateType = {
  soundAvailable: true,
  currentLesson: [],
};

export const lessonReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SOUNDAVAILABLE:
      return {...state, soundAvailable: !state.soundAvailable};
    case CURRENTLESSON:
      return {...state, currentLesson: action.payload};
    default:
      return state;
  }
};
