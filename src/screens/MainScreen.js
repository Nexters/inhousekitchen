import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, H2, Left, Body, Right, Button, Icon, Title, Text, Content, List, ListItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import EStyleSheet from 'react-native-extended-stylesheet';
import _ from 'lodash';
import { autobind } from 'core-decorators';
import { NavigationActions } from 'react-navigation';
import { Header } from '../components/Header';
import { HostCard } from '../components/Card';
import { fetchHostByType } from '../ducks/host';
import { Favorite, Place, Popular, Search } from './main';

@connect(mapStateToProps, mapDispatchToProps)
@autobind
class MainScreen extends Component {
  componentDidMount() {
    this.props.fetchHostByType('NONE');
  }
  render() {
    return (
      <Container>
        <Header onMyPagePress={ () => this.props.moveToScreen({ routeName: 'MyPage' }) } />
        <View style={ styles.contentContainer }>
          <Search />
          <Content style={ styles.content }>{this._renderContent()}</Content>
        </View>
      </Container>
    );
  }

  _renderContent = () => {
    const contents = [Popular, Place, Favorite];

    return _.map(contents, (Component, index) => <Component key={ index } />);
  };
}

const styles = EStyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: '$screenPadding'
  },
  searchContainer: {
    height: 100,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  search: {
    borderWidth: 1
  },
  searchCol: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    flexDirection: 'column'
  }
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchHostByType,
      moveToScreen: NavigationActions.navigate
    },
    dispatch
  );
}

export default MainScreen;
