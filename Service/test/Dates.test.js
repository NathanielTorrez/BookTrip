/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount } from 'enzyme';
import Dates from '../client/src/components/Dates.jsx';

describe('Unit Test for Dates', () => {
  test('It should render', () => {
    const data = {
      startDate: 'Check-in',
      endDate: 'Checkout',
    };
    const wrapper = mount(<Dates dates={data} />);
    expect(wrapper.exists()).toBe(true);
  });
});
