import Axios from 'axios';
import * as ActionTypes from '../actionTypes.js';
import {CONSTANT, SERVICES} from '../../constant';
import {navigate, replace, showToast, storeDataStorage} from '../../utils';

export const doGetNewsAllListAction = () => {
  return dispatch => {
    dispatch({type: ActionTypes.GET_NEWS_ALL_LIST_REQUEST});
    const urlService = CONSTANT.API_URL + CONSTANT.VERSION + SERVICES.NEWS_LIST;
    const options = {
      //   headers: {
      //     'app-id': CONSTANT.API_KEY,
      //   },
    };

    Axios.get(urlService, options)
      .then(res => {
        dispatch({
          type: ActionTypes.GET_NEWS_ALL_LIST_SUCCESS,
          payload: {
            dataNews: res?.data?.data,
          },
        });
      })
      .catch(err => {
        dispatch({
          type: ActionTypes.GET_NEWS_ALL_LIST_FAILED,
          payload: {
            dataNews: [],
            errorMessage: err,
          },
        });
        showToast('Ups!', err, 'danger');
      });
  };
};
export const doGetNewsByCategoryAction = param => {
  return dispatch => {
    dispatch({type: ActionTypes.GET_NEWS_ALL_LIST_REQUEST});
    const urlService =
      CONSTANT.API_URL +
      CONSTANT.VERSION +
      SERVICES.NEWS_LIST +
      `?category=${param?.category}`;
    const options = {
      //   headers: {
      //     'app-id': CONSTANT.API_KEY,
      //   },
    };

    Axios.get(urlService, options)
      .then(res => {
        dispatch({
          type: ActionTypes.GET_NEWS_BY_CATEGORY_SUCCESS,
          payload: {
            dataNewsCategory: res?.data?.data,
          },
        });
      })
      .catch(err => {
        dispatch({
          type: ActionTypes.GET_NEWS_BY_CATEGORY_FAILED,
          payload: {
            dataNewsCategory: [],
            errorMessage: err,
          },
        });
        showToast('Ups!', err, 'danger');
      });
  };
};
