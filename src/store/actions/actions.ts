import { SetAvailableStepActionType, AVAILABLESTEPACTION } from "./actionTypes";

export const setTestAction = (payload: number): SetAvailableStepActionType => ({
    type: AVAILABLESTEPACTION,
    payload
});