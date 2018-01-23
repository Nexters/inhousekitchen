import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Thumbnail, H1, H2, H3, Text, Button } from 'native-base';
import TestImage from './images/test2.png';

class Profile extends PureComponent {
  render() {
    return (
      <View style={ styles.profile }>
        <Thumbnail square source={ TestImage } />
        <H2>UserName</H2>
        <H3>Guest</H3>
        <Button>
          <Text>Become a Host</Text>
        </Button>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  profile: {
    alignItems: 'center'
  }
});

export default Profile;
