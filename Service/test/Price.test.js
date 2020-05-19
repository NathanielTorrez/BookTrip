/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount } from 'enzyme';
import Price from '../client/src/components/Price.jsx';

describe('Unit Test for Price', () => {
  test('It should render', () => {
    const data = {
      price: 100,
      rating: 5,
      reviews: 44,
    };
    const wrapper = mount(<Price price={data} />);
    expect(wrapper.exists()).toBe(true);
  });
});
