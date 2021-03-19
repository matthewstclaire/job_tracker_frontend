import jobsReducer from './jobsReducer';
import { combineReducers } from 'redux';
import userReducer from './userReducer';

export const reducer = combineReducers({
  jobs: jobsReducer,
  user: userReducer,
});
