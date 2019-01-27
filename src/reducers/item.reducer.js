import { itemConstants } from '../constants';

export const item = (state = { loading: false }, action) => {
  switch (action.type) {
    case itemConstants.ADD_ITEM_REQUEST:
    case itemConstants.UPDATE_ITEM_REQUEST:
    case itemConstants.DELETE_ITEM_REQUEST:
      return { ...state, loading: true };
    case itemConstants.ADD_ITEM_SUCCESS:
    case itemConstants.UPDATE_ITEM_SUCCESS:
    case itemConstants.DELETE_ITEM_SUCCESS:
      return { ...state, loading: false };
    case itemConstants.ADD_ITEM_FAILURE:
    case itemConstants.UPDATE_ITEM_FAILURE:
    case itemConstants.DELETE_ITEM_FAILURE:
      return { ...state, error: action.errorMsg, loading: false };
    default:
      return { ...state };
  }
};
