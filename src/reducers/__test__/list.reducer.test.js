import { list } from '../list.reducer';
import { listConstants } from '../../constants';

describe('List reducers', () => {
  it('default reducer case', () => {
    expect(list(undefined, {})).toEqual({ items: [], loading: false });
  });

  it('UPDATE_LIST success reducer', () => {
    expect(
      list(
        {
          items: [],
          loading: false
        },
        {
          type: listConstants.UPDATE_LIST_SUCCESS,
          payload: [
            {
              id: 1,
              text: 'Some Text',
              state: true
            }
          ]
        }
      )
    ).toEqual({
      items: [
        {
          id: 1,
          text: 'Some Text',
          state: true
        }
      ],
      loading: false
    });
  });
});
