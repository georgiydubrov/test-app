import { listConstants } from '../constants';

const initialState = {
  items: [],
  loading: false
};

export const list = (state = initialState, action) => {
  switch (action.type) {
    case listConstants.GET_LIST_REQUEST:
    case listConstants.UPDATE_LIST_REQUEST:
      return { ...state, loading: true };
    case listConstants.GET_LIST_SUCCESS:
    case listConstants.UPDATE_LIST_SUCCESS:
      return { ...state, items: action.payload, loading: false };
    case listConstants.GET_LIST_FAILURE:
    case listConstants.UPDATE_LIST_FAILURE:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};
