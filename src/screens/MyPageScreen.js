import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Footer, Button, Text } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import { NavigationActions } from 'react-navigation';
import { SubHeader } from '../components/Header';
import { Profile, Interest, Reservation, MyKitchen } from './mypage';
import { withAuth as auth } from '../hocs';
import { signout, isGuest, isAuth } from '../ducks/auth';

@connect(mapStateToProps, mapDispatchToProps)
@auth
class MyPageScreen extends Component {
  render() {
    const { isGuest } = this.props;

    return (
      <Container>
        <SubHeader
          onBackPress={ () => this.props.backScreen() }
          rightComponent={ () => <Text style={ styles.subHeaderRightText }>EDIT</Text> } />
        <Content style={ styles.content }>
          <Profile />
          {isGuest ? <Interest /> : <MyKitchen />}
          <Reservation />
          <Button onPress={ this._onPressSignout } full style={ styles.signoutButton }>
            <Text style={ styles.signoutButtonText }>Sign Out</Text>
          </Button>
        </Content>
      </Container>
    );
  }

  _onPressSignout = () => {
    this.props.signout();
  };
}

const styles = EStyleSheet.create({
  content: {
    backgroundColor: '$backgroundColor'
  },
  signoutButton: {
    marginTop: 20,
    marginBottom: 40,
    height: 44,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  signoutButtonText: {
    fontSize: 16,
    color: '$fourthColor',
    textAlign: 'left'
  },
  subHeaderRightText: {
    color: '$thirdColor'
  }
});

function mapStateToProps(state) {
  return {
    isGuest: isGuest(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      backScreen: NavigationActions.back,
      signout
    },
    dispatch
  );
}

export default MyPageScreen;
