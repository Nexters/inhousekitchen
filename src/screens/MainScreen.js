import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Button, Content } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import _ from 'lodash';
import { autobind } from 'core-decorators';
import { NavigationActions } from 'react-navigation';
import EntyoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Header } from '../components/Header';
import { fetchHostByType, findHostsByType } from '../ducks/host';
import { Favorite, Place, Popular, Search } from './main';

@connect(mapStateToProps, mapDispatchToProps)
@autobind
class MainScreen extends Component {
  render() {
    const { moveToScreen } = this.props;

    return (
      <Container>
        <Header
          containerStyle={ styles.header }
          leftComponent={ () => (
            <Button onPress={ () => moveToScreen({ routeName: 'MyPage' }) } transparent>
              <FeatherIcon name="user" size={ 24 } />
            </Button>
          ) }
          rightComponent={ () => (
            <Button onPress={ () => moveToScreen({ routeName: 'MapResult' }) } transparent>
              <EntyoIcon name="direction" color={ EStyleSheet.value('$secondColor') } size={ 24 } />
            </Button>
          ) } />
        <Content style={ styles.contentContainer }>
          <Search />
          <View style={ styles.content }>{this._renderContent()}</View>
        </Content>
      </Container>
    );
  }

  _renderContent = () => {
    const contents = [Popular, Place, Favorite];
    return _.map(contents, (Component, index) => <Component key={ index } />);
  };
}

const styles = EStyleSheet.create({
  header: {
    backgroundColor: '$backgroundColor'
  },
  contentContainer: {
    paddingTop: 8
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: '$screenPadding'
  }
});

function mapStateToProps(state) {
  return {
    hostsByType: _.partial(findHostsByType, state, _)
  };
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
