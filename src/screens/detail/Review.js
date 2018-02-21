import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FlatList, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { List, H1, H2, Text } from 'native-base';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Accordion from 'react-native-collapsible/Accordion';
import _ from 'lodash';

import { TitleHeader } from '../../components/Header';
import { StarRating } from '../../components/Star';
import { AccordianHeader } from './';
import { ReviewCard } from '../../components/Card/index';

const dataSource = [{ id: 1, title: 'Chicnk' }, { id: 2, title: 'Chicnk' }, { id: 3, title: 'Chicnk' }];
class Review extends PureComponent {
  state = {
    isOpen: true
  };
  render() {
    const { isOpen } = this.state;
    return (
      <Accordion
        touchableComponent={ TouchableOpacity }
        touchableProps={ {
          onPress: this._toggleOpen
        } }
        sections={ ['1'] }
        activeSection={ isOpen ? 0 : false }
        renderHeader={ this._renderHeader }
        renderContent={ this._renderContent } />
    );
  }
  _renderHeader = section => {
    const { isOpen } = this.state;
    return (
      <View style={ styles.header }>
        <AccordianHeader headerStyle={ styles.accordianHeader } title="Review" isOpen={ isOpen } />
        <View style={ { width: 60, flexDirection: 'row', alignItems: 'center' } }>
          <StarRating />
          <Text style={ styles.starText }>(12)</Text>
        </View>
      </View>
    );
  };
  _renderContent(section) {
    return (
      <View style={ styles.content }>
        <FlatList
          data={ dataSource }
          keyExtractor={ item => item.id }
          renderItem={ item => <ReviewCard /> }
          ItemSeparatorComponent={ () => <View style={ { width: '100%', height: 12 } } /> }
          ListFooterComponent={ <Text style={ styles.moreButton }>Read more 9 reviews…</Text> } />
      </View>
    );
  }

  _toggleOpen = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };
}

const styles = EStyleSheet.create({
  host: {},
  header: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '$backgroundColor'
  },
  accordianHeader: {
    paddingHorizontal: 0,
    paddingBottom: 8
  },
  starText: {
    fontSize: 12,
    paddingLeft: 4.5
  },
  content: {
    flex: 0,
    height: '100%',
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 21,
    backgroundColor: '$backgroundColor'
  },
  moreButton: {
    fontSize: 16,
    textAlign: 'center',
    color: '$fourthColor',
    paddingTop: 24,
    paddingBottom: 13
  }
});

export default Review;
