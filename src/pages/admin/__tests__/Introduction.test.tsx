import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Introduction from 'pages/Admin/Introduction';
import { Jumbotron } from 'react-bootstrap';

describe('Introduction component', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Introduction />);
  });

  it('uses Jumbotron from bootstrap', () => {
    expect(wrapper.find(Jumbotron)).toHaveLength(1);
  });

  it('has a heading', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('has a welcome message', () => {
    expect(wrapper.find('p')).toHaveLength(2);
  });

  it('has my github link', () => {
    expect(wrapper.find('a[data-test="github-link"]')).toHaveLength(1);
  });

  it('has my portfolio link', () => {
    expect(wrapper.find('a[data-test="portfolio-link"]')).toHaveLength(1);
  });
});
