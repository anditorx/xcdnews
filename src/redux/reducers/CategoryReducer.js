import * as ActionTypes from '../actionTypes';

const initialState = {
  error: false,
  errorMessage: false,
  //
  dataCategory: false,
  loadingCategory: false,
  successCategory: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SHOW_LOADING:
      return {
        ...state,
        loadingCategory: action.payload,
      };
    case ActionTypes.GET_CATEGORY_LIST_REQUEST:
      return {
        ...state,
        loadingCategory: true,
        error: false,
        successCategory: false,
        errorMessage: false,
      };
    case ActionTypes.GET_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        loadingCategory: false,
        successCategory: true,
        dataCategory: action.payload.dataCategory,
      };
    case ActionTypes.GET_CATEGORY_LIST_FAILED:
      return {
        ...state,
        loadingCategory: false,
        error: true,
        successCategory: false,
        dataCategory: action.payload.dataCategory,
        errorMessage: action.payload.errorMessage,
      };

    default:
      return state;
  }
}
