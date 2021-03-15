import jobsReducer from './jobsReducer';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  jobs: jobsReducer,
  //   user: userReducer,
});
