import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TitleHeader } from '../../components/Header';

function mapStateToProps(state) {
  return {};
}

class Popular extends Component {
  render() {
    return (
      <View>
        <TitleHeader title="Most Popular" rightComponent={ MaterialCommunityIcons } />
        <Text>Popular</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps)(Popular);