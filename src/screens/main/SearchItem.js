import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

class SearchItem extends Component {
  static propTypes = {
    selected: PropTypes.bool,
    name: PropTypes.string,
    leftComponent: PropTypes.func,
    onPress: PropTypes.func
  };

  static defaultProps = {
    selected: false,
    name: 'When',
    leftComponent: () => <MaterialIcons name="event-note" size={ 20 } />,
    onPress: () => {}
  };

  render() {
    const {
      selected, leftComponent: LeftComponent, name, onPress
    } = this.props;

    return (
      <TouchableOpacity style={ styles.searchItem } onPress={ onPress }>
        <View style={ styles.icon }>{LeftComponent && <LeftComponent />}</View>
        <Text style={ [styles.searchItemText, selected ? styles.selected : null] }>{name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = EStyleSheet.create({
  searchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 39
  },
  icon: {
    marginRight: 6
  },
  searchItemText: {
    fontSize: 18,
    color: '$secondColor',
    paddingLeft: 0,
    paddingRight: 0
  },
  selected: {
    color: '$firstColor'
  }
});

export default SearchItem;
