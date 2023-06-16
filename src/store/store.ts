import {legacy_createStore as createStore} from 'redux';
import {combineReducers} from 'redux';
import {homeReducer} from './reducers/homeReducer';
import {lessonReducer} from './reducers/lessonReducer';

export const rootReducer = combineReducers({
  home: homeReducer,
  lesson: lessonReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export const store = createStore(rootReducer);
