import React from 'react';
import { View, Animated } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Text, Button, Container } from 'native-base';
import CenterView from '../../storybook/stories/CenterView';
import { Footer, Header, Content, Host, Menu, Review } from './';

storiesOf('Detail organization', module)
  .addDecorator(getStory => <Container style={ styles.detail }>{getStory()}</Container>)
  .add('with Header', () => <Header />)
  .add('with Footer', () => <Footer />)

  .add('with Content', () => (
    <CenterView>
      <View style={ { height: 177, backgroundColor: '#fff' } }>
        <Content />
      </View>
    </CenterView>
  ))
  .add('with Host', () => <Host />)
  .add('with Menu', () => <Menu />)
  .add('with Review', () => <Review />);

const styles = EStyleSheet.create({
  detail: {
    flex: 1,
    backgroundColor: '$backgroundColor'
  }
});
