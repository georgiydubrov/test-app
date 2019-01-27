import { store } from '../store';
import { config } from '../../config';

export const getItemsList = () => {
  const {
    list: { items }
  } = store.getState();
  return items;
};

export const getLastId = () => {
  const items = getItemsList();
  return items.length > 0 ? Math.max(...getItemsList().map(i => i.id)) : 0;
};

export const fakeDelay = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, config.DELAY);
  });
