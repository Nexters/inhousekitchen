import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from 'native-base';

function mapStateToProps(state) {
  return {};
}

class Search extends Component {
  render() {
    return (
      <View>
        <Text>Search</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps)(Search);