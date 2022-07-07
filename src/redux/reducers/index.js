import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import AuthReducer from './AuthReducer';
import PostReducer from './PostReducer';
import NewsReducer from './NewsReducer';

const rootReducer = combineReducers({
  UserReducer,
  AuthReducer,
  PostReducer,
  NewsReducer,
});

export default rootReducer;
