import Expo from 'expo';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Container, Content, Footer, Button, Text } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import { InfoText, InputText, TermText } from '../components/Text';
import { SubHeader, TitleHeader } from '../components/Header';

@connect(mapStateToProps, mapDispatchToProps)
class SignupScreen extends Component {
  static propTypes = {};

  componentDidMount() {}
  render() {
    return (
      <Container>
        <SubHeader onBackPress={ () => this.props.backScreen() } />
        <Content style={ styles.content }>
          <InfoText title="Welcome" content="Create Your Account" />
          <View style={ styles.form }>
            <InputText containerStyle={ styles.inputText } name="Username" placeholder="Input Your Username" />
            <InputText containerStyle={ styles.inputText } name="E-mail" placeholder="Input Your E-mail Address" />
            <InputText containerStyle={ styles.inputText } name="Password" isSecure placeholder="Set Your Password" />
          </View>
          <TermText containerStyle={ styles.term } />
        </Content>
        <Button full style={ styles.signupButton }>
          <Text style={ styles.signupButtonText }>SIGN UP</Text>
        </Button>
      </Container>
    );
  }
}

const styles = EStyleSheet.create({
  content: {},
  form: {
    paddingTop: 20,
    paddingHorizontal: '$screenPadding'
  },
  inputText: {
    marginBottom: 21
  },
  term: {
    paddingHorizontal: '$screenPadding'
  },
  signupButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '$thirdColor'
  },
  signupButtonText: {
    fontSize: 16,
    color: '#fff'
  }
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      backScreen: NavigationActions.back
    },
    dispatch
  );
}

export default SignupScreen;
