import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Dimensions, Platform, StyleSheet, Animated, ScrollView, View, Image } from 'react-native';
import { Container, Icon, H2, Text, Button } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import Swiper from 'react-native-swiper';
import _ from 'lodash';
import { NavigationActions } from 'react-navigation';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Content, Host, Menu, Review, Header, Footer } from './detail';
import { HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT, HEADER_SCROLL_DISTANCE } from './detail/constants';
import { isAuth } from '../ducks/auth';
import { fetchHostDetail, getHostById } from '../ducks/host';
import { SubHeader } from '../components/Header';
import { withLoading as loading } from '../hocs/index';

@connect(mapStateToProps, mapDispatchToProps)
@loading
class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.scrollY = new Animated.Value(0);
  }

  componentDidMount() {
    const { id } = this.props.navigation.state.params;
    // console.log('didMount');
    this.props.fetchHostDetail(id);
  }

  render() {
    const { moveToScreen, goBack } = this.props.navigation;
    const { isAuth, backScreen } = this.props;

    return (
      <Container>
        <ParallaxScrollView
          backgroundColor="transparent"
          contentBackgroundColor="transparent"
          parallaxHeaderHeight={ HEADER_MAX_HEIGHT }
          stickyHeaderHeight={ 70 }
          onScroll={ Animated.event([{ nativeEvent: { contentOffset: { y: this.scrollY } } }], {
            useNativeDriver: false
          }) }
          renderStickyHeader={ () => <SubHeader onBackPress={ backScreen } /> }
          renderForeground={ () => <Header backPress={ backScreen } /> }>
          {this._renderScrollViewContent()}
        </ParallaxScrollView>
        <Footer scrollY={ this.scrollY } onRequest={ isAuth ? () => {} : () => moveToScreen('Login') } />
      </Container>
    );
  }

  _renderScrollViewContent = () => {
    const { id } = this.props.navigation.state.params;
    const detail = this.props.getHostById(id) || {};
    const {
      dIntro, startDate, endDate, startTime, endTime
    } = detail;

    const contents = [
      { component: Content, title: dIntro, date: startDate ? `${startDate} ${startTime} - ${endDate} ${endTime}` : undefined },
      { component: Host },
      { component: Menu },
      { component: Review }
    ];
    return (
      <View style={ [styles.scrollViewContent] }>
        {_.map(contents, (content, index) => {
          const { component: Component, ...props } = content;
          return <Component { ...props } key={ index } />;
        })}
      </View>
    );
  };
}

const styles = EStyleSheet.create({
  fill: {
    flex: 1
  },
  scrollViewContent: {
    paddingTop: 20,
    paddingBottom: 56
  }
});

function mapStateToProps(state) {
  return {
    isAuth: isAuth(state),
    getHostById: _.partial(getHostById, state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      backScreen: NavigationActions.back,
      moveToScreen: NavigationActions.navigate,
      fetchHostDetail
    },
    dispatch
  );
}

export default DetailScreen;
