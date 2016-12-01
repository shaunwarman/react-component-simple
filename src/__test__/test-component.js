import Test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import MyComponent from '..';

Test('test component', t => {
  const wrapper = shallow(<MyComponent />);

  t.is(wrapper.contains(<div>Hello</div>), true);
});