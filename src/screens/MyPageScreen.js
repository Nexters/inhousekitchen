import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Footer, Button, Text } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SubHeader } from '../components/Header';
import { Profile, Interest, Reservation, MyKitchen } from './mypage';

class MyPageScreen extends Component {
  render() {
    return (
      <Container>
        <SubHeader />
        <Content>
          <Profile />
          <Interest />
          <MyKitchen />
          <Button full style={ styles.signoutButton }>
            <Text style={ styles.signoutButtonText }>Sign Out</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = EStyleSheet.create({
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
  }
});

export default MyPageScreen;
