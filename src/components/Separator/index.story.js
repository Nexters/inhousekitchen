import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import EStyleSheet from 'react-native-extended-stylesheet';
import CenterView from '../../storybook/stories/CenterView';
import { Separator } from './';

storiesOf('Separator', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with Separator', () => <Separator />);

const styles = EStyleSheet.create({});
