import React, { Component } from 'react';
import { StyleSheet, Animated, ScrollView, View, Image } from 'react-native';
import { Container, Icon, H2, Text, Button } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import Swiper from 'react-native-swiper';
import _ from 'lodash';
import { Content, Host, Menu, Review, Header, Footer } from './detail';
import { HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT, HEADER_SCROLL_DISTANCE } from './detail/constants';

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0)
    };
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
            <Header headerHeight={ headerHeight } />
          </View>
          {this._renderScrollViewContent()}
        </ScrollView>
        <Footer />
      </Container>
    );
  }
  _renderScrollViewContent() {
    const contents = [{ component: Content }, { component: Host }, { component: Menu }, { component: Review }];
    return (
      <View style={ styles.scrollViewContent }>
        {_.map(contents, (content, index) => {
          const { component: Component } = content;
          return <Component key={ index } />;
        })}
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  fill: {
    flex: 1
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT
  }
});

export default DetailScreen;
