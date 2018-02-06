import React, { Component, PureComponent } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Text } from 'native-base';

class PriceText extends PureComponent {
  render() {
    const { children, style, ...props } = this.props;
    return (
      <Text { ...props } style={ [styles.priceText, style] }>
        {children}
      </Text>
    );
  }
}

const styles = EStyleSheet.create({
  priceText: {
    fontSize: 16,
    color: '$thirdColor'
  }
});

export default PriceText;
