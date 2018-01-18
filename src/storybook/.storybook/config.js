import { setOptions } from '@storybook/addon-options';
import centered from './decorator-centered';
import { AppRegistry } from 'react-native';
import { configure, addDecorator } from '@storybook/react';

const context = require.context('../', true, /Screen\.js$/);

addDecorator(centered);

setOptions({
  name: 'Inhousekitchen',
  url: 'https://github.com/Nexters/inhousekitchen',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false
});

function loadStories() {
  context.keys().forEach(context);
}

configure(loadStories, module);