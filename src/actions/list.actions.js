import { getItemsList, fakeDelay } from '../helpers';
import { listConstants } from '../constants';

export const updateListWithNewItem = item => dispatch => {
  dispatch({ type: listConstants.UPDATE_LIST_REQUEST });
  return fakeDelay().then(() => {
    const items = getItemsList();

    const newList = [...items, item].sort((a, b) => a.id - b.id);
    dispatch({ type: listConstants.UPDATE_LIST_SUCCESS, payload: newList });
  });
};

export const updateListWithUpdatedItem = item => dispatch => {
  dispatch({ type: listConstants.UPDATE_LIST_REQUEST });
  return fakeDelay().then(() => {
    const items = getItemsList();

    const newList = [...items.filter(i => i.id !== item.id), item].sort(
      (a, b) => a.id - b.id
    );
    dispatch({ type: listConstants.UPDATE_LIST_SUCCESS, payload: newList });
  });
};

export const updateListWithoutDeletedItem = item => dispatch => {
  dispatch({ type: listConstants.UPDATE_LIST_REQUEST });
  const items = getItemsList();

  return fakeDelay().then(() => {
    const newList = items
      .filter(i => i.id !== item.id)
      .sort((a, b) => a.id - b.id)
      .map((i, index) => ({ ...i, id: index + 1 }));
    dispatch({ type: listConstants.UPDATE_LIST_SUCCESS, payload: newList });
    return fakeDelay();
  });
};
