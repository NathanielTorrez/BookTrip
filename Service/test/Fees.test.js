/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount } from 'enzyme';
import Fees from '../client/src/components/Fees.jsx';

describe('Unit Test for Fees', () => {
  test('It should render', () => {
    const data = {
      price: 104,
      days: 2,
      cleaning: 100,
      service: 43,
      tax: 51,
      total: 402,
    };
    const wrapper = mount(<Fees fees={data} />);
    expect(wrapper.exists()).toBe(true);
  });
});
