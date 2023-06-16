import {ActionTypes, SOUNDAVAILABLE} from '../actions/actionTypes';

type initialStateType = {
  soundAvailable: boolean;
};

const initialState: initialStateType = {
  soundAvailable: false,
};

export const lessonReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SOUNDAVAILABLE:
      return {...state, soundAvailable: !state.soundAvailable};
    default:
      return state;
  }
};
