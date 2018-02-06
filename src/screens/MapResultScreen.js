import { MapView } from 'expo';
import React, { Component } from 'react';
import { ScrollView, View, Animated } from 'react-native';
import { connect } from 'react-redux';
import { Icon, Container, Content, Footer, Button, List, ListItem, Left, Body, Text } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import _ from 'lodash';
import { Header } from '../components/Header';

const markers = [
  {
    id: 1,
    title: 'food1',
    description: 'food1desc',
    latlng: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  }
];

const HOST_HEIGHT = 300;

class MapResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMarkerId: undefined
    };
    this._flexHeight = new Animated.Value(HOST_HEIGHT);
  }
  render() {
    const items = [1, 2, 3];

    const { selectedMarkerId } = this.state;
    return (
      <Container>
        <Header />
        <View style={ styles.content }>
          <MapView
            style={ styles.map }
            initialRegion={ {
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            } }
            onRegionChange={ this._onRegionChange }>
            {markers.map(marker => (
              <MapView.Marker
                key={ marker.id }
                coordinate={ marker.latlng }
                title={ marker.title }
                description={ marker.description }
                onPress={ _.partial(this._onPressMarker, marker.id) } />
            ))}
          </MapView>
        </View>
        <Animated.View style={ [styles.hostView, { height: this._flexHeight }] }>
          <ScrollView contentContainerStyle={ styles.hostScrollView }>
            <List>{_.map(items, item => this._rednerHostItem(item))}</List>
          </ScrollView>
        </Animated.View>
      </Container>
    );
  }

  _onRegionChange = event => {
    this.setState(
      {
        selectedMarkerId: undefined
      },
      () => {
        Animated.timing(this._flexHeight, {
          toValue: 0,
          duration: 500
        }).start();
      }
    );
  };

  _onPressMarker = (id, event) => {
    this.setState(
      {
        selectedMarkerId: id
      },
      () => {
        Animated.timing(this._flexHeight, {
          toValue: HOST_HEIGHT,
          duration: 500
        }).start();
      }
    );
  };

  _rednerHostItem = item => {
    const { navigate } = this.props.navigation;
    return (
      <ListItem key={ item } onPress={ () => navigate('Detail') } style={ styles.hostItem }>
        <Left>
          <Icon fontSize={ 20 } name="plane" />
        </Left>
        <Body>
          <Text>{item}</Text>
        </Body>
      </ListItem>
    );
  };
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
  hostView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#eee'
  },
  hostScrollView: {
    flex: 1,
    flexGrow: 1
  },
  hostList: {},
  hostItem: {
    width: '100%',
    height: 100,
    marginLeft: 0,
    backgroundColor: '#eee'
  }
});

export default MapResultScreen;
