import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View } from 'react-native';
import { Text } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SelectCalendar } from '../../components/Calendar';
import { SearchItem, Guest } from './';

class Search extends Component {
  state = {
    selectedType: 'when'
  };

  _onChange = name => {
    if (this._isSelected(name)) {
      this.setState({
        selectedType: null
      });
      return;
    }
    this.setState({
      selectedType: name
    });
  };

  _isSelected = name => this.state.selectedType === name;
  render() {
    const { selectedType } = this.state;
    return (
      <View style={ styles.search }>
        <SearchItem
          onPress={ () => this._onChange('when') }
          selected={ this._isSelected('when') }
          leftComponent={ () => (
            <MaterialIcons
              name="event-note"
              size={ 20 }
              color={ this._isSelected('when') ? EStyleSheet.value('$firstColor') : EStyleSheet.value('$secondColor') } />
          ) }
          name="When" />
        {this._isSelected('when') && <SelectCalendar />}
        <SearchItem
          onPress={ () => this._onChange('where') }
          selected={ this._isSelected('where') }
          leftComponent={ () => (
            <MaterialIcons
              name="location-on"
              size={ 20 }
              color={ this._isSelected('where') ? EStyleSheet.value('$firstColor') : EStyleSheet.value('$secondColor') } />
          ) }
          name="Where" />

        <SearchItem
          onPress={ () => this._onChange('guests') }
          selected={ this._isSelected('guests') }
          leftComponent={ () => (
            <MaterialIcons
              name="person-add"
              size={ 20 }
              color={ this._isSelected('guests') ? EStyleSheet.value('$firstColor') : EStyleSheet.value('$secondColor') } />
          ) }
          name="Guests" />
        {this._isSelected('guests') && <Guest />}
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  search: {
    flex: 1
  }
});

export default Search;
