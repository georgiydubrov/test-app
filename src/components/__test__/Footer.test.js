import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Footer } from '../Footer';

configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  it('should be rendered without error', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.html()).toEqual(
      '<footer class="d-flex align-items-center"><small><span>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></span></small></footer>'
    );
  });
});
