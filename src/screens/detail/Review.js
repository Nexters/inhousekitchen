import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { H1, H2, Text } from 'native-base';
import Accordion from 'react-native-collapsible/Accordion';

class Review extends PureComponent {
  render() {
    return (
      <Accordion
        touchableComponent={ TouchableOpacity }
        sections={ ['1'] }
        renderHeader={ this._renderHeader }
        renderContent={ this._renderContent } />
    );
  }
  _renderHeader(section) {
    return (
      <View>
        <H1>Review</H1>
      </View>
    );
  }
  _renderContent(section) {
    return (
      <View>
        <H2>Appetizer</H2>
        <Text>Menu</Text>
        <H2>Starter</H2>
        <Text>Salad : Various Salad</Text>
        <H2>Main Course</H2>
        <Text>Cuisine : Vietnam cuisine</Text>
        <H2>Dessert</H2>
        <Text>Cheese</Text>
        <H2>Drinks</H2>
        <Text>Coke</Text>
      </View>
    );
  }
}

export default Review;
