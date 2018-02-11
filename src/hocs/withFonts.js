import * as Expo from 'expo';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

function withFonts(TargetComponent) {
  return class WithFonts extends Component {
    static propTypes = {};

    static defaultProps = {};

    state = {
      isReady: false
    };

    componentWillMount() {
      this.loadFonts();
    }

    async loadFonts() {
      await Expo.Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        // Arial: require('../../assets/fonts/Arial.ttf'),
        Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
      });
      this.setState({ isReady: true });
    }
    render() {
      if (!this.state.isReady) {
        return <Expo.AppLoading />;
      }
      return <TargetComponent { ...this.props } />;
    }
  };
}

export default withFonts;
