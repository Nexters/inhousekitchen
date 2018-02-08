import React from 'react';
import { Button, Text } from 'native-base';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import EStyleSheet from 'react-native-extended-stylesheet';
import CenterView from '../../storybook/stories/CenterView';
import { SelectCalendar } from './';

storiesOf('Calendar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with Calendar', () => (
    <View style={ { width: 321, height: 315 } }>
      <SelectCalendar />
    </View>
  ));
