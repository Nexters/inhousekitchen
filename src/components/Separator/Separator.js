import React, { Component, PureComponent } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View } from 'react-native';

class Separator extends PureComponent {
  render() {
    const { style, ...props } = this.props;
    return <View { ...props } style={ [styles.separator, style] } />;
  }
}

const styles = EStyleSheet.create({
  separator: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#f1f1f1'
  }
});

export default Separator;
