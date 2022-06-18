import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import AuthReducer from './AuthReducer';
import PostReducer from './PostReducer';

const rootReducer = combineReducers({
  UserReducer,
  AuthReducer,
  PostReducer,
});

export default rootReducer;
