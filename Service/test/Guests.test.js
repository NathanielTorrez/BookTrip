/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount } from 'enzyme';
import Guests from '../client/src/components/Guests.jsx';

describe('Unit Test for Guests', () => {
  test('It should render', () => {
    const data = 4;
    const wrapper = mount(<Guests price={data} />);
    expect(wrapper.exists()).toBe(true);
  });
});
