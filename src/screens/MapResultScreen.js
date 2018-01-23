import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Icon, Container, Content, Footer, Button, List, ListItem, Left, Body, Text } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import _ from 'lodash';
import { Header } from '../components/Header';

class MapResultScreen extends Component {
  render() {
    const items = [1, 2, 3];
    return (
      <Container>
        <Header />
        <View style={ styles.content }>
          <View style={ styles.map }>
            <Text>Map</Text>
          </View>
        </View>
        <List style={ styles.hostList }>{_.map(items, item => this._rednerHostItem(item))}</List>
      </Container>
    );
  }

  _rednerHostItem = item => (
    <ListItem style={ styles.hostItem } key={ item }>
      <Left>
        <Icon fontSize={ 20 } name="plane" />
      </Left>
      <Body>
        <Text>{item}</Text>
      </Body>
    </ListItem>
  );
}

const styles = EStyleSheet.create({
  content: {
    flex: 1
    // flexDirection: 'column',
  },
  map: {
    position: 'absolute',
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#333'
  },
  hostList: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  hostItem: {
    width: '100%',
    height: 100,
    marginLeft: 0
  }
});

export default MapResultScreen;
