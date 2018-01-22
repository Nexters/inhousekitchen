import React, { Component } from 'react';
import { StyleSheet, Animated, ScrollView, View, Image } from 'react-native';
import { Container, Icon, H2, Text, Button } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import Swiper from 'react-native-swiper';
import TestImage from './images/test2.png';

const HEADER_MAX_HEIGHT = 600;
const HEADER_MIN_HEIGHT = 400;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0)
    };
  }
  _renderScrollViewContent() {
    const data = Array.from({ length: 30 });
    return (
      <View style={ styles.scrollViewContent }>
        {data.map((_, i) => (
          <View key={ i } style={ styles.row }>
            <Text>{i}</Text>
          </View>
        ))}
      </View>
    );
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    });

    return (
      <Container>
        <ScrollView
          stickyHeaderIndices={ [0] }
          scrollEventThrottle={ 16 }
          onScroll={ Animated.event([{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]) }
          style={ styles.fill }>
          <View style={ { height: 1 } }>
            <Animated.View style={ [styles.header, { height: headerHeight }] }>
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
              <Button style={ styles.backIcon }>
                <Icon size={ 20 } name="arrow-back" />
              </Button>
              <View style={ styles.barText }>
                <H2>Item Name</H2>
                <Text>TEsstsdfsdflsdkfnsdklfnsd</Text>
              </View>
            </Animated.View>
          </View>
          {this._renderScrollViewContent()}
        </ScrollView>
      </Container>
    );
  }
}

const styles = EStyleSheet.create({
  fill: {
    flex: 1
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center'
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
  backIcon: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: 'transparent'
  },
  barImage: {
    width: '100%',
    height: '100%'
  },
  barText: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    width: '100%',
    paddingHorizontal: 10
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT
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
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default DetailScreen;
