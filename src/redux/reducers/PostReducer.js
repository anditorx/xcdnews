import * as ActionTypes from '../actionTypes';

const initialState = {
  dataPost: false,
  loadingPost: false,
  successPost: false,
  error: false,
  errorMessage: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SHOW_LOADING:
      return {
        ...state,
        loadingPost: action.payload,
      };
    case ActionTypes.GET_POST_LIST_REQUEST:
      return {
        ...state,
        loadingPost: true,
        error: false,
        successPost: false,
        errorMessage: false,
      };
    case ActionTypes.GET_POST_LIST_SUCCESS:
      return {
        ...state,
        loadingPost: false,
        successPost: true,
        dataPost: action.payload.dataPost,
      };
    case ActionTypes.GET_POST_LIST_FAILED:
      return {
        ...state,
        loadingPost: false,
        error: true,
        successPost: false,
        dataPost: action.payload.dataPost,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
