import MyComponent from '..';
import React from 'react';
import Test from 'ava';

import {shallow} from 'enzyme';

Test('test component', t => {
  const wrapper = shallow(<MyComponent />);

  t.is(wrapper.contains(<div>Hello</div>), true);
});