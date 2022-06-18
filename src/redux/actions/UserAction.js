import Axios from 'axios';
import * as ActionTypes from '../actionTypes.js';
import {CONSTANT, SERVICES} from '../../constant';
import {navigate, replace, showToast, storeDataStorage} from '../../utils';

export const getListUserHomeAction = () => {
  return dispatch => {
    dispatch({type: ActionTypes.GET_USER_LIST_REQUEST});
    const urlService =
      CONSTANT.API_URL +
      CONSTANT.VERSION +
      SERVICES.USER_LIST +
      '?page=1&limit=5';
    const options = {
      headers: {
        'app-id': CONSTANT.API_KEY,
      },
    };

    Axios.get(urlService, options)
      .then(res => {
        dispatch({
          type: ActionTypes.GET_USER_LIST_SUCCESS,
          payload: {
            dataUser: res?.data,
          },
        });
      })
      .catch(err => {
        dispatch({
          type: ActionTypes.GET_USER_LIST_FAILED,
          payload: {
            dataUser: [],
            errorMessage: err,
          },
        });
        showToast('Ups!', err, 'danger');
      });
  };
};
