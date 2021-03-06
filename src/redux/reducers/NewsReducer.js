import * as ActionTypes from '../actionTypes';

const initialState = {
  error: false,
  errorMessage: false,
  //
  dataNews: false,
  loadingNews: false,
  successNews: false,
  //
  dataNewsMedium: false,
  loadingNewsMedium: false,
  successNewsMedium: false,
  //
  dataNewsCategory: false,
  loadingNewsCategory: false,
  successNewsCategory: false,
  //
  dataNewsSearch: false,
  loadingNewsSearch: false,
  successNewsSearch: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SHOW_LOADING:
      return {
        ...state,
        loadingNews: action.payload,
      };
    case ActionTypes.GET_NEWS_ALL_LIST_REQUEST:
      return {
        ...state,
        loadingNews: true,
        error: false,
        successNews: false,
        errorMessage: false,
      };
    case ActionTypes.GET_NEWS_ALL_LIST_SUCCESS:
      return {
        ...state,
        loadingNews: false,
        successNews: true,
        dataNews: action.payload.dataNews,
      };
    case ActionTypes.GET_NEWS_ALL_LIST_FAILED:
      return {
        ...state,
        loadingNews: false,
        error: true,
        successNews: false,
        dataNews: action.payload.dataNews,
        errorMessage: action.payload.errorMessage,
      };
    //
    case ActionTypes.GET_NEWS_MEDIUM_HOME_REQUEST:
      return {
        ...state,
        loadingNewsMedium: true,
        error: false,
        successNewsMedium: false,
        errorMessage: false,
      };
    case ActionTypes.GET_NEWS_MEDIUM_HOME_SUCCESS:
      return {
        ...state,
        loadingNewsMedium: false,
        successNewsMedium: true,
        dataNewsMedium: action.payload.dataNewsMedium,
      };
    case ActionTypes.GET_NEWS_MEDIUM_HOME_FAILED:
      return {
        ...state,
        loadingNewsMedium: false,
        error: true,
        successNewsMedium: false,
        dataNewsMedium: action.payload.dataNewsMedium,
        errorMessage: action.payload.errorMessage,
      };
    //
    case ActionTypes.GET_NEWS_BY_CATEGORY_REQUEST:
      return {
        ...state,
        loadingCategory: true,
        error: false,
        successCategory: false,
        errorMessage: false,
      };
    case ActionTypes.GET_NEWS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loadingCategory: false,
        successCategory: true,
        dataNewsCategory: action.payload.dataNewsCategory,
      };
    case ActionTypes.GET_NEWS_BY_CATEGORY_FAILED:
      return {
        ...state,
        loadingCategory: false,
        error: true,
        successCategory: false,
        dataNewsCategory: action.payload.dataNewsCategory,
        errorMessage: action.payload.errorMessage,
      };
    //
    case ActionTypes.GET_NEWS_BY_SEARCH_REQUEST:
      return {
        ...state,
        loadingNewsSearch: true,
        error: false,
        successSearch: false,
        errorMessage: false,
      };
    case ActionTypes.GET_NEWS_BY_SEARCH_SUCCESS:
      return {
        ...state,
        loadingNewsSearch: false,
        successSearch: true,
        dataNewsSearch: action.payload.dataNewsSearch,
      };
    case ActionTypes.GET_NEWS_BY_SEARCH_FAILED:
      return {
        ...state,
        loadingNewsSearch: false,
        error: true,
        successSearch: false,
        dataNewsSearch: action.payload.dataNewsSearch,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
