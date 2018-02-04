import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Animated, ScrollView, View, Image } from 'react-native';
import { Container, Footer, Icon, H2, Text, Button } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import Swiper from 'react-native-swiper';
import _ from 'lodash';

import { HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT, HEADER_SCROLL_DISTANCE } from './constants';
import { BackButton } from '../../components/Button';

class Header extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    content: PropTypes.string,
    backPress: PropTypes.func
  };

  static defaultProps = {
    images: _.times(3, () => 'http://lorempixel.com/640/480/food/'),
    title: 'Korean Fusion Noodle',
    content: 'Korean noodles, called "guksu" or "myeon" are everyday food',
    backPress: () => {}
  };

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps, nextState);
    return false;
  }
  render() {
    const {
      backPress, images, title, content
    } = this.props;
    return (
      <View style={ [styles.header] }>
        <Swiper
          style={ styles.imageSwiper }
          paginationStyle={ {
            paddingBottom: 0,
            marginBottom: 0,
            bottom: 12
          } }
          dotColor="rgba(255, 255, 255, 0.4)"
          activeDotColor="#fff">
          {_.map(images, (image, index) => (
            <View key={ index } style={ styles.slide }>
              <Image style={ styles.slideImage } source={ { uri: image } } />
            </View>
          ))}
        </Swiper>
        <BackButton style={ styles.backIcon } iconColor="#fff" />
        <View style={ styles.headerInfo }>
          <Text style={ styles.headerInfoText }>{title}</Text>
          <Text style={ styles.headerInfoContentText }>{content}</Text>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  backIcon: {
    position: 'absolute',
    top: 35,
    left: 24,
    backgroundColor: 'transparent'
  },
  header: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    flex: 1,
    flexDirection: 'column'
  },
  imageSwiper: {
    height: '100%'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  slideImage: {
    width: '100%',
    height: '100%'
  },
  headerInfo: {
    position: 'absolute',
    bottom: 32,
    left: 0,
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'transparent'
  },
  headerInfoText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    paddingBottom: 8
  },
  headerInfoContentText: {
    fontSize: 14,
    color: '#fff'
  }
});

export default Header;
