import React, { Component, PureComponent } from 'react';
import { Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

class TermText extends PureComponent {
  render() {
    const { containerStyle, ...props } = this.props;
    return (
      <Text { ...props } style={ [styles.term, containerStyle] }>
        By signing up, You confirmed that accept {'\n'}the <Text style={ styles.termHighlight }>Terms of Use</Text> and
        Privacy Policy
      </Text>
    );
  }
}

const styles = EStyleSheet.create({
  term: {
    fontSize: 14,
    color: '$firstColor',
    textAlign: 'center'
  },
  termHighlight: {
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default TermText;
