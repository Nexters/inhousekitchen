import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Title } from 'native-base';
import { Header } from '../Header';

it('Header set title', () => {
  expect(shallow(<Header title="helloworld" />).contains(<Title>helloworld</Title>), ).toBeTruthy();
});

it('Header no set title', () => {
  expect(shallow(<Header />).contains(<Title>Header</Title>)).toBeTruthy();
});
