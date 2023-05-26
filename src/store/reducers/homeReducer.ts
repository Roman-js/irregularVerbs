import { ActionTypes, TESTACTION } from "../actions/actionTypes";

type homeReducerType = {
    test: number
}

const initialState: homeReducerType = {
    test: 0
}

export const homeReducer = (state = initialState, action: ActionTypes) => {

    switch (action.type) {
        case TESTACTION:
            return { ...state, test: state.test + 1 }
        default:
            return state
    }
}