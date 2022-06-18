import * as ActionTypes from '../actionTypes.js';
import {CONSTANT, SERVICES} from '../../constant';
import {navigate, replace, storeDataStorage} from '../../utils';

export const registerUser = (data, navigation) => {
  return dispatch => {
    console.tron.log('🚀 ~ data :=>', data);
    console.tron.log('🚀 ~ navigation :=>', navigation);
    // Loading
    //   dispatch({type: ActionTypes.AUTH_REGISTER_REQUEST});
    // //  Create user
  };
};
