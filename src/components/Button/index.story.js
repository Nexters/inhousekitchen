import React from 'react';
import { Button, Text } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import EStyleSheet from 'react-native-extended-stylesheet';
import CenterView from '../../storybook/stories/CenterView';
import { LightRoundedButton, ArrowRoundedButton, LoginButton } from './';
import styles from './styles';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with LightRoundedButton', () => <LightRoundedButton title="hello" onPress={ action('clicked-button') } />)
  .add('with Become a Host', () => <ArrowRoundedButton />)
  .add('with Request a Book', () => (
    <ArrowRoundedButton
      buttonStyle={ styles.requestBook }
      buttonTextStyle={ styles.requestBookText }
      buttonArrowStyle={ styles.requestBookArrow } />
  ))
  .add('with LoginButton', () => (
    <LoginButton>
      <Text>Login</Text>
    </LoginButton>
  ));
