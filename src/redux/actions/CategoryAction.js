import Axios from 'axios';
import * as ActionTypes from '../actionTypes.js';
import {CONSTANT, SERVICES} from '../../constant';
import {navigate, replace, showToast, storeDataStorage} from '../../utils';

export const doGetCategoryListAction = () => {
  return dispatch => {
    dispatch({type: ActionTypes.GET_CATEGORY_LIST_REQUEST});
    const urlService =
      CONSTANT.API_URL + CONSTANT.VERSION + SERVICES.CATEGORY_LIST;
    const options = {
      //   headers: {
      //     'app-id': CONSTANT.API_KEY,
      //   },
    };

    Axios.get(urlService, options)
      .then(res => {
        dispatch({
          type: ActionTypes.GET_CATEGORY_LIST_SUCCESS,
          payload: {
            dataCategory: res?.data?.data,
          },
        });
      })
      .catch(err => {
        dispatch({
          type: ActionTypes.GET_CATEGORY_LIST_FAILED,
          payload: {
            dataCategory: [],
            errorMessage: err,
          },
        });
        showToast('Ups!', err, 'danger');
      });
  };
};
