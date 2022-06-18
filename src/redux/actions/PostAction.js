import Axios from 'axios';
import * as ActionTypes from '../actionTypes.js';
import {CONSTANT, SERVICES} from '../../constant';
import {navigate, replace, showToast, storeDataStorage} from '../../utils';

export const getListPostHomeAction = () => {
  return dispatch => {
    dispatch({type: ActionTypes.GET_POST_LIST_REQUEST});
    const urlService =
      CONSTANT.API_URL +
      CONSTANT.VERSION +
      SERVICES.POST_LIST +
      '?page=1&limit=10';
    const options = {
      headers: {
        'app-id': CONSTANT.API_KEY,
      },
    };

    Axios.get(urlService, options)
      .then(res => {
        dispatch({
          type: ActionTypes.GET_POST_LIST_SUCCESS,
          payload: {
            dataPost: res?.data,
          },
        });
      })
      .catch(err => {
        dispatch({
          type: ActionTypes.GET_POST_LIST_FAILED,
          payload: {
            dataPost: [],
            errorMessage: err,
          },
        });
        showToast('Ups!', err, 'danger');
      });
  };
};
