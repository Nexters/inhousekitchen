/* eslint-disable react/jsx-sort-props */

/**
 * @flow
 */

import React from 'react';
import { Text } from 'react-native';
import UIExplorer, { AppText, Code, Description, DocItem, Section, storiesOf } from '../../ui-explorer';
import LoginScreenImpl from '../../../screens/LoginScreen';

const LoginScreen = () => (
  <UIExplorer title="LoginScreen" url="2-screens/LoginScreen">
    <LoginScreenImpl />
  </UIExplorer>
);

storiesOf('Screens', module).add('LoginScreen', LoginScreen);
