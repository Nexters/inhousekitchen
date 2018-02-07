import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from 'native-base';
import { TitleHeader } from '../../components/Header';

function mapStateToProps(state) {
  return {};
}

class Place extends Component {
  render() {
    return (
      <View>
        <TitleHeader title="Popular place" />
        <Text>Place</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps)(Place);