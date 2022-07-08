import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import AuthReducer from './AuthReducer';
import PostReducer from './PostReducer';
import NewsReducer from './NewsReducer';
import CategoryReducer from './CategoryReducer';

const rootReducer = combineReducers({
  UserReducer,
  AuthReducer,
  PostReducer,
  NewsReducer,
  CategoryReducer,
});

export default rootReducer;
