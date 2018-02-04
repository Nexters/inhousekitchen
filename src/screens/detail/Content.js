import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { H1, Text } from 'native-base';
import { ProfileText } from '../../components/Text';

class Content extends PureComponent {
  render() {
    return (
      <View>
        <H1>Item Name</H1>
        <Text>
          Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus.
        </Text>
        <ProfileText />
        <ProfileText />
      </View>
    );
  }
}

export default Content;
