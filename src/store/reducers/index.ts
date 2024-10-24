import { userReducer } from './userReducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>