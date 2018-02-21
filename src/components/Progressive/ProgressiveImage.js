import React, { Component, PureComponent } from 'react';
import { View, Image } from 'react-native';
import Placeholder from 'rn-placeholder';

class ProgressiveImage extends PureComponent {
  state = {
    isReady: false
  };

  render() {
    const { isReady } = this.state;
    const { style, ...rest } = this.props;

    return (
      <View>
        <Image
          { ...rest }
          style={ [style, !isReady && { position: 'absolute', opacity: 0 }] }
          onLoadStart={ this._onLoadStart }
          onLoadEnd={ this._onLoadEnd } />
        {!isReady && <Placeholder.Media size="100%" animate="shine" />}
      </View>
    );
  }

  _onLoadStart = () => {
    this.setState({ isReady: false });
    // console.log('start');
  };

  _onLoadEnd = () => {
    this.setState({ isReady: true });
    // console.log('end');
  };
}

export default ProgressiveImage;
