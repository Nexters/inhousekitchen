import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

function withStatusBar(TargetComponent) {
  return class WithStatusBar extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
      return (
        <View style={ { flex: 1 } }>
          <StatusBar barStyle="dark-content" backgroundColor="#000" translucent hidden />
          <TargetComponent { ...this.props } />
        </View>
      );
    }
  };
}

export default withStatusBar;
