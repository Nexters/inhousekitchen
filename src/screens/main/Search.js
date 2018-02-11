import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View } from 'react-native';
import { Text, Button } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SelectCalendar } from '../../components/Calendar';
import { SearchItem, Guest, Where } from './';

class Search extends Component {
  state = {
    selectedType: 'guests',
    when: {},
    where: {},
    guestsNumber: 1
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

  _onGuestsPlus = () => {
    this.setState(state => ({
      guestsNumber: state.guestsNumber + 1
    }));
  };

  _onGuestsMinus = () => {
    this.setState(state => ({
      guestsNumber: state.guestsNumber > 1 ? state.guestsNumber - 1 : 1
    }));
  };

  _isSelected = name => this.state.selectedType === name;
  render() {
    const { selectedType, guestsNumber } = this.state;
    return (
      <View style={ styles.search }>
        <View style={ styles.searchContent }>
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
          {this._isSelected('when') && <SelectCalendar { ...this.state['when'] } />}
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
          {this._isSelected('where') && <Where { ...this.state['where'] } />}
          <SearchItem
            onPress={ () => this._onChange('guests') }
            selected={ this._isSelected('guests') }
            leftComponent={ () => (
              <MaterialIcons
                name="person-add"
                size={ 20 }
                color={
                  this._isSelected('guests') ? EStyleSheet.value('$firstColor') : EStyleSheet.value('$secondColor')
                } />
            ) }
            name="Guests" />
          {this._isSelected('guests') && (
            <Guest number={ guestsNumber } onPlus={ this._onGuestsPlus } onMinus={ this._onGuestsMinus } />
          )}
        </View>

        <Button onPress={ () => this._onChange(null) } style={ styles.searchButton } full>
          <Text style={ styles.searchButtonText }> {this._isSelected(null) ? 'Search' : 'OK'} </Text>
        </Button>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  search: {
    flex: 1,
    marginBottom: 20
  },
  searchContent: {
    paddingHorizontal: '$screenPadding'
  },
  searchButton: {
    height: 48,
    marginTop: 8,
    backgroundColor: '$thirdColor'
  },
  searchButtonText: {
    fontSize: 16
  }
});

export default Search;
