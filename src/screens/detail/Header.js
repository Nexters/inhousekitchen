import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Animated, ScrollView, View, Image } from 'react-native';
import { Container, Footer, Icon, H2, Text, Button } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import Swiper from 'react-native-swiper';
import _ from 'lodash';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT, HEADER_SCROLL_DISTANCE } from './constants';
import { BackButton } from '../../components/Button';
import { ActiveDot, Dot } from '../../components/Dot';

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

  render() {
    const {
      backPress, images, title, content
    } = this.props;
    return (
      <View style={ [styles.header] }>
        <Swiper style={ styles.imageSwiper } renderPagination={ this._renderPagination }>
          {_.map(images, (image, index) => (
            <View key={ index } style={ styles.slide }>
              <Image style={ styles.slideImage } source={ { uri: image } } />
            </View>
          ))}
        </Swiper>
        <BackButton onPress={ backPress } buttonStyle={ styles.backIcon } iconColor="#fff" />
        <Animated.View style={ [styles.headerInfo] }>
          <Text style={ styles.headerInfoText }>{title}</Text>
          <Text style={ styles.headerInfoContentText }>{content}</Text>
        </Animated.View>
      </View>
    );
  }

  _renderPagination = (index, total, context) => (
    <Animated.View style={ [styles.pagingation] }>
      {_.times(total, dotIndex => {
        if (dotIndex == index) {
          return <ActiveDot key={ dotIndex } />;
        }
        return <Dot key={ dotIndex } />;
      })}
    </Animated.View>
  );

  _getAnimated = () => {
    const { scrollY } = this.props;
    const animatedHidden = scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [1, 0]
    });
    const animatedBottom = scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [55, 1]
    });
    return {
      animatedBottom,
      animatedHidden
    };
  };
}

const styles = EStyleSheet.create({
  backIcon: {
    position: 'absolute',
    top: 35,
    '@media android': {
      top: 35 - 8
    },
    left: 24,
    backgroundColor: 'transparent',
    zIndex: 1000
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
    bottom: 32 + 56,
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
  },
  pagingation: {
    position: 'absolute',
    width: '100%',
    bottom: 12,
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

export default Header;
