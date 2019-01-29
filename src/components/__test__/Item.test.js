import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Item from '../Item';

configure({ adapter: new Adapter() });

const props = {
  item: {
    text: 'Some text',
    state: true
  },
  changeState: () => ({}),
  changeText: () => ({}),
  deleteItem: () => ({})
};

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Item />', () => {
  it('with some data, should be rendered without error', () => {
    // Render a Item component with some props
    const wrapper = shallow(
      <Provider store={store}>
        <Item {...props} />
      </Provider>
    );

    expect(wrapper.html()).toEqual(
      '<li class="item-block d-flex align-items-center justify-content-between"><i class="item-state active"></i><div class="flex-grow-1">Some text</div><div class="d-flex"><i class="item-edit"></i><i class="item-waste"></i></div></li>'
    );
  });
});
