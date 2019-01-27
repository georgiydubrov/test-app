import { getLastId } from '../helpers';
import { itemConstants } from '../constants';
import {
  updateListWithNewItem,
  updateListWithUpdatedItem,
  updateListWithoutDeletedItem
} from './list.actions';

export const addNewItem = text => dispatch => {
  dispatch({ type: itemConstants.ADD_ITEM_REQUEST });
  const newItem = {
    id: getLastId() + 1,
    text,
    state: false
  };

  dispatch(updateListWithNewItem(newItem))
    .then(() => dispatch({ type: itemConstants.ADD_ITEM_SUCCESS }))
    .catch(e =>
      dispatch({ type: itemConstants.UPDATE_ITEM_FAILURE, payload: e })
    );
};

export const changeItemState = item => dispatch => {
  dispatch({ type: itemConstants.TOGGLE_ITEM_ITEM_REQUEST });
  const newItem = { ...item, state: !item.state };

  dispatch(updateListWithUpdatedItem(newItem))
    .then(() => dispatch({ type: itemConstants.TOGGLE_ITEM_ITEM_SUCCESS }))
    .catch(e =>
      dispatch({ type: itemConstants.TOGGLE_ITEM_ITEM_FAILURE, payload: e })
    );
};

export const changeItemText = (item, text) => dispatch => {
  dispatch({ type: itemConstants.UPDATE_ITEM_REQUEST });
  const newItem = { ...item, text };

  dispatch(updateListWithUpdatedItem(newItem))
    .then(() => dispatch({ type: itemConstants.UPDATE_ITEM_SUCCESS }))
    .catch(e =>
      dispatch({ type: itemConstants.UPDATE_ITEM_FAILURE, payload: e })
    );
};

export const deleteItem = item => dispatch => {
  dispatch({ type: itemConstants.DELETE_ITEM_REQUEST });
  dispatch(updateListWithoutDeletedItem(item))
    .then(() => dispatch({ type: itemConstants.DELETE_ITEM_SUCCESS }))
    .catch(e =>
      dispatch({ type: itemConstants.UPDATE_ITEM_FAILURE, payload: e })
    );
};
