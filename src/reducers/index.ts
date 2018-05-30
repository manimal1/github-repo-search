import { combineReducers } from 'redux';
import { fetchProfile as profileReducer } from './profileReducer';

const reducers = combineReducers({
  profile: profileReducer
});

export default reducers;
