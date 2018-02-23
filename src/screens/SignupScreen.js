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
import { getCurrentKey } from '../ducks/nav';

@connect(mapStateToProps, mapDispatchToProps)
class SignupScreen extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    const { currentRouteKey, setParamScreen } = props;
    setParamScreen({
      key: currentRouteKey,
      params: { auth: true }
    });
  }

  componentDidMount() {}
  render() {
    const { backScreen, moveToScreen } = this.props;
    return (
      <Container>
        <SubHeader onBackPress={ () => backScreen() } />
        <Content style={ styles.content }>
          <InfoText title="Welcome" content="Create Your Account" />
          <View style={ styles.form }>
            <InputText
              onChangeText={ text => this._handleType('username', text) }
              containerStyle={ styles.inputText }
              name="Username"
              placeholder="Input Your Username" />
            <InputText
              onChangeText={ text => this._handleType('email', text) }
              containerStyle={ styles.inputText }
              name="E-mail"
              placeholder="Input Your E-mail Address" />
            <InputText
              onChangeText={ text => this._handleType('password', text) }
              containerStyle={ styles.inputText }
              name="Password"
              isSecure
              placeholder="Set Your Password" />
          </View>
          <TermText containerStyle={ styles.term } />
        </Content>
        <Button onPress={ this._moveToInterest } full style={ styles.signupButton }>
          <Text style={ styles.signupButtonText }>SIGN UP</Text>
        </Button>
      </Container>
    );
  }

  _handleType = (name, text) => {
    this.setState({
      [name]: text
    });
  };

  _moveToInterest = () => {
    const { email, username, password } = this.state;
    const { moveToScreen } = this.props;

    moveToScreen({
      routeName: 'Interest',
      params: {
        email,
        username,
        password
      }
    });
  };
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
  return {
    currentRouteKey: getCurrentKey(state.nav)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      backScreen: NavigationActions.back,
      moveToScreen: NavigationActions.navigate,
      setParamScreen: NavigationActions.setParams
    },
    dispatch
  );
}

export default SignupScreen;
