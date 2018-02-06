import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Animated, View } from 'react-native';
import { Text, Button, Footer as NativeFooter } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  styles as buttonStyle,
  ArrowRoundedButton,
} from '../../components/Button';

import {
  HEADER_MAX_HEIGHT,
  HEADER_MIN_HEIGHT,
  HEADER_SCROLL_DISTANCE,
} from './constants';

const AnimatedFooter = Animated.createAnimatedComponent(NativeFooter);

class Footer extends Component {
  static propTypes = {
    onRequest: PropTypes.func,
  };
  render() {
    const { onRequest, scrollY } = this.props;
    const {
      animatedBackgroundColor,
      animatedPriceText,
      animatedPriceInfoText,
    } = this._getAnimated();

    return (
      <AnimatedFooter
        style={[styles.footer, { backgroundColor: animatedBackgroundColor }]}
      >
        <View>
          <Animated.Text
            style={[styles.footerPriceText, { color: animatedPriceText }]}
          >
            $30
          </Animated.Text>
          <Animated.Text
            style={[styles.footerPriceInfo, { color: animatedPriceInfoText }]}
          >
            Per Guest
          </Animated.Text>
        </View>
        <ArrowRoundedButton
          buttonStyle={buttonStyle.requestBook}
          buttonTextStyle={buttonStyle.requestBookText}
          buttonArrowStyle={buttonStyle.requestBookArrow}
        />
      </AnimatedFooter>
    );
  }

  _getAnimated = () => {
    const { scrollY } = this.props;

    const animatedBackgroundColor = scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: ['transparent', '#fff'],
    });
    const animatedPriceText = scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: ['#fff', EStyleSheet.value('$thirdColor')],
    });
    const animatedPriceInfoText = scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: ['#fff', EStyleSheet.value('$secondColor')],
    });
    return {
      animatedBackgroundColor,
      animatedPriceText,
      animatedPriceInfoText,
    };
  };
}

const styles = EStyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 56,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingBottom: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  footerContent: {},
  footerPriceText: {
    fontSize: 16,
  },
  footerPriceInfo: {
    fontSize: 12,
  },
  footerButton: {},
});

export default Footer;
