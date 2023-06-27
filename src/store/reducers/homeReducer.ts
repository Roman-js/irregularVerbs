import {ActivityCounterType} from '../../types/commonTypes';
import {dateCounter} from '../../utils/dateCounter';
import {
  ActionTypes,
  ACTIVITYCOUNTER,
  ACTIVITYVALUE,
  AVAILABLESTEPACTION,
  CURRENTSTEP,
  HIDETABNAVIGATION,
} from '../actions/actionTypes';

type homeReducerType = {
  availableStep: number;
  currentStep: number;
  hideTabNavigation: boolean;
  activityCounterDates: ActivityCounterType;
  activeDaysValue: number;
};

const initialState: homeReducerType = {
  availableStep: 1,
  currentStep: 1,
  hideTabNavigation: false,
  activityCounterDates: {startDate: new Date(), lastChangesDate: new Date()},
  activeDaysValue: 0,
};

export const homeReducer = (
  state = initialState,
  action: ActionTypes,
): homeReducerType => {
  switch (action.type) {
    case AVAILABLESTEPACTION:
      return {...state, availableStep: action.payload};
    case CURRENTSTEP:
      return {...state, currentStep: action.payload};
    case HIDETABNAVIGATION:
      return {...state, hideTabNavigation: action.payload};
    case ACTIVITYCOUNTER: {
      const countOfActivitieDays = dateCounter(
        action.payload.startDate,
        action.payload.lastChangesDate,
      );
      return {
        ...state,
        activityCounterDates: action.payload,
        activeDaysValue: countOfActivitieDays,
      };
    }
    case ACTIVITYVALUE:
      return {...state, activeDaysValue: action.payload};
    default:
      return state;
  }
};
