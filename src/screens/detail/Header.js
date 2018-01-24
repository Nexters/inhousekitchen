import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Animated, ScrollView, View, Image } from 'react-native';
import { Container, Footer, Icon, H2, Text, Button } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import Swiper from 'react-native-swiper';
import _ from 'lodash';
import { HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT, HEADER_SCROLL_DISTANCE } from './constants';

class Header extends Component {
  static propTypes = {
    backPress: PropTypes.func
  };

  static defaultProps = {
    backPress: () => {}
  };

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps, nextState);
    return false;
  }
  render() {
    const { backPress } = this.props;
    return (
      <View style={ [styles.header] }>
        <Swiper style={ styles.imageSwiper } showsButtons>
          <View style={ styles.slide1 }>
            <Text style={ styles.text }>Hello Swiper</Text>
          </View>
          <View style={ styles.slide2 }>
            <Text style={ styles.text }>Beautiful</Text>
          </View>
          <View style={ styles.slide3 }>
            <Text style={ styles.text }>And simple</Text>
          </View>
        </Swiper>
        <Button onPress={ backPress } style={ styles.backIcon }>
          <Icon size={ 20 } name="arrow-back" />
        </Button>
        <View style={ styles.headerInfoText }>
          <H2>Item Name</H2>
          <Text>TEsstsdfsdflsdkfnsdklfnsd</Text>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  backIcon: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: 'transparent'
  },
  header: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
    flex: 1,
    flexDirection: 'column'
  },
  imageSwiper: {
    height: '100%'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  headerInfoText: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    width: '100%',
    paddingHorizontal: 10
  }
});

export default Header;
