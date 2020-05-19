/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount } from 'enzyme';
import Button from '../client/src/components/Button.jsx';

describe('Unit Test for Button', () => {
  test('It should render', () => {
    const wrapper = mount(<Button />);
    expect(wrapper.exists()).toBe(true);
  });
});
