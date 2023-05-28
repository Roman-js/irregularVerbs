import { ExerciseType } from "../../types/lessonContentTypes";
import {
    AVAILABLESTEPACTION,
    CURRENTLESSON,
    SOUNDAVAILABLE,
    CURRENTSTEP,
    HIDETABNAVIGATION,
    SetAvailableStepActionType,
    SetCurrentLessonType,
    setCurrentStepType,
    SetSoundAvailableType,
    setHideTabNavigationType
} from "./actionTypes";

export const setTestAction = (payload: number): SetAvailableStepActionType => ({
    type: AVAILABLESTEPACTION,
    payload
});

export const setCurrentLessonAction = (payload: ExerciseType[]): SetCurrentLessonType => ({
    type: CURRENTLESSON,
    payload
});

export const setSoundAvailableAction = (): SetSoundAvailableType => ({
    type: SOUNDAVAILABLE
});

export const setCurrentStepAction = (payload: number): setCurrentStepType => ({
    type: CURRENTSTEP,
    payload
});

export const setHideTabNavigationAction = (payload: boolean): setHideTabNavigationType => ({
    type: HIDETABNAVIGATION,
    payload
});