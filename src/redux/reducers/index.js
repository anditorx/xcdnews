import {combineReducers} from 'redux';
// import UserReducer from './UserReducer';
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
  //   UserReducer,
  AuthReducer,
});

export default rootReducer;
