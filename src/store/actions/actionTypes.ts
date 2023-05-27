export const AVAILABLESTEPACTION = 'AVAILABLESTEPACTION'

export type SetAvailableStepActionType = {
    type: typeof AVAILABLESTEPACTION,
    payload: number
};

export type ActionTypes = SetAvailableStepActionType;