import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { H1, H2, Text } from 'native-base';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Accordion from 'react-native-collapsible/Accordion';
import { TitleHeader } from '../../components/Header/index';
import { AccordianHeader } from './';

class Menu extends Component {
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
    return <AccordianHeader title="Menu" isOpen={ isOpen } />;
  };

  _renderContent = section => (
    <View style={ styles.content }>
      <Text style={ styles.menuTitleText }>Appetizer</Text>
      <Text style={ styles.menuContentText }>Egg tart</Text>
      <Text style={ styles.menuTitleText }>Starter</Text>
      <Text style={ styles.menuContentText }>Salad : Various Salad</Text>
      <Text style={ styles.menuTitleText }>Main Course</Text>
      <Text style={ styles.menuContentText }>Cuisine : Vietnam cuisine</Text>
      <Text style={ styles.menuTitleText }>Dessert</Text>
      <Text style={ styles.menuContentText }>Cheese</Text>
      <Text style={ styles.menuTitleText }>Drinks</Text>
      <Text style={ styles.menuContentText }>Coke</Text>
      <Text style={ styles.description }>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since t…
      </Text>
    </View>
  );

  _toggleOpen = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };
}

const styles = EStyleSheet.create({
  menu: {},
  content: {
    paddingHorizontal: 20,
    paddingBottom: 21,
    backgroundColor: '$backgroundColor'
  },
  menuTitleText: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 8
  },
  menuContentText: {
    fontSize: 14,
    paddingBottom: 12
  },
  'menuContentText:last-child': {
    paddingBottom: 20
  },
  description: {
    fontSize: 14
  }
});

export default Menu;
