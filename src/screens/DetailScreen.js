import React, { Component } from 'react';
import { StyleSheet, Animated, ScrollView, View, Image } from 'react-native';
import { Container, Icon, H2, Text, Button } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
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
          scrollEventThrottle={ 16 }
          onScroll={ Animated.event([{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]) }
          style={ styles.fill }>
          {this._renderScrollViewContent()}
          <Animated.View style={ [styles.header, { height: headerHeight, top: this.state.scrollY }] }>
            <View style={ styles.bar }>
              <Image style={ styles.barImage } source={ TestImage } />
              <Button style={ styles.backIcon }>
                <Icon size={ 20 } name="arrow-back" />
              </Button>
              <View style={ styles.barText }>
                <H2>Item Name</H2>
                <Text>TEsstsdfsdflsdkfnsdklfnsd</Text>
              </View>
            </View>
          </Animated.View>
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
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden'
  },
  bar: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 28
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
  }
});

export default DetailScreen;
