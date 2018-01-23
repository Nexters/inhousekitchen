import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Footer, Button, Text } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SubHeader } from '../components/Header';
import { Profile, Interest, History } from './mypage';

class MyPageScreen extends Component {
  render() {
    return (
      <Container>
        <SubHeader />
        <Content>
          <Profile />
          <Interest />
          <History />
          <Button>
            <Text>Sign out</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default MyPageScreen;
