import React from 'react';
import Toggle from 'components/Toggle/Toggle';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Toggle Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Toggle />);
  });

  it('toggles to dark mode', () => {
    wrapper.find('#checkbox').simulate('change');
    expect(wrapper.find('.slider.dark')).toHaveLength(1);
  });
});
