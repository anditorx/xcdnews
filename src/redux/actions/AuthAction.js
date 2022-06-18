import Axios from 'axios';
import * as ActionTypes from '../actionTypes.js';
import {CONSTANT, SERVICES} from '../../constant';
import {navigate, replace, showToast, storeDataStorage} from '../../utils';

export const registerUserAction = (data, navigation) => {
  return dispatch => {
    dispatch({type: ActionTypes.AUTH_REGISTER_REQUEST});
    const urlService =
      CONSTANT.API_URL + CONSTANT.VERSION + SERVICES.USER_CREATE;
    const options = {
      headers: {
        'app-id': CONSTANT.API_KEY,
      },
    };

    Axios.post(urlService, data, options)
      .then(res => {
        dispatch({
          type: ActionTypes.AUTH_REGISTER_SUCCESS,
          payload: {
            dataUser: res?.data,
          },
        });
        // local storage
        storeDataStorage(CONSTANT.STORAGE_DATAUSER, res?.data);

        // navigation
        navigation.reset({index: 0, routes: [{name: 'Home'}]});
      })
      .catch(err => {
        dispatch({
          type: ActionTypes.AUTH_REGISTER_FAILED,
          payload: {
            dataUser: [],
            errorMessage: err?.response?.data?.data?.email,
          },
        });
        showToast('Ups!', err?.response?.data?.data?.email, 'danger');
      });
  };
};
