import { ActionTypes, AVAILABLESTEPACTION } from "../actions/actionTypes";

type homeReducerType = {
    availableStep: number
}

const initialState: homeReducerType = {
    availableStep: 4
}

export const homeReducer = (state = initialState, action: ActionTypes) => {

    switch (action.type) {
        case AVAILABLESTEPACTION:
            return { ...state, availableStep: action.payload }
        default:
            return state
    }
}