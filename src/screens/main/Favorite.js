import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from 'native-base';
import { TitleHeader } from '../../components/Header';

function mapStateToProps(state) {
  return {};
}

class Favorite extends Component {
  render() {
    return (
      <View>
        <TitleHeader title="My favorites" />
        <Text>Favorite</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps)(Favorite);
