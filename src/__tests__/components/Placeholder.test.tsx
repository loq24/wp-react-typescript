import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Placeholder from 'components/Placeholder/Placeholder';

describe('Placeholder component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Placeholder />);
  });

  it('shows 4 shimmer div elements', () => {
    expect(wrapper.find('div[data-test="shimmer-effect"]')).toHaveLength(4);
  });
});
