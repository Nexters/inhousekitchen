import React from 'react';
import {
  getStorybookUI,
  configure,
  addDecorator
} from '@storybook/react-native';
import { CenterView } from './stories/CenterView';
import { loadStories } from './storyLoader';

configure(() => {
  loadStories();
}, module);

const StorybookUI = getStorybookUI({ port: 7007, host: '172.16.3.55' });
export default StorybookUI;
