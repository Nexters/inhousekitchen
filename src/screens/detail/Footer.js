import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text, Button, Footer as NativeFooter } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles as buttonStyle, ArrowRoundedButton } from '../../components/Button';

class Footer extends Component {
  static propTypes = {
    onRequest: PropTypes.func
  };
  render() {
    const { onRequest } = this.props;
    return (
      <NativeFooter style={ styles.footer }>
        <View>
          <Text style={ styles.footerPriceText }>$30</Text>
          <Text style={ styles.footerPriceInfo }>Per Guest</Text>
        </View>
        <ArrowRoundedButton
          buttonStyle={ buttonStyle.requestBook }
          buttonTextStyle={ buttonStyle.requestBookText }
          buttonArrowStyle={ buttonStyle.requestBookArrow } />
      </NativeFooter>
    );
  }
}

const styles = EStyleSheet.create({
  footer: {
    width: '100%',
    height: 56,
    paddingBottom: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  footerContent: {},
  footerPriceText: {
    fontSize: 16,
    color: '#fff'
  },
  footerPriceInfo: {
    fontSize: 12,
    color: '#fff'
  },
  footerButton: {}
});

export default Footer;
