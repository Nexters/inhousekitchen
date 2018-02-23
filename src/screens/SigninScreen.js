import Expo from 'expo';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Container, Content, Body, CheckBox, Button, Text, ListItem } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import { InfoText, InputText, TermText } from '../components/Text';
import { SubHeader, TitleHeader } from '../components/Header';
import { fetchLogin } from '../ducks/auth';

@connect(mapStateToProps, mapDispatchToProps)
class SigninScreen extends Component {
  static propTypes = {};

  state = {
    remember: false,
    email: '',
    password: ''
  };

  componentDidMount() {}
  render() {
    const { remember, email, password } = this.state;

    return (
      <Container>
        <SubHeader onBackPress={ () => this.props.backScreen() } />
        <Content style={ styles.content }>
          <InfoText title="Sign In" content="with E-mail" />
          <View style={ styles.form }>
            <InputText
              onChangeText={ text => this._handleType('email', text) }
              value={ email }
              containerStyle={ styles.inputText }
              name="E-mail"
              placeholder="Input Your E-mail Address" />
            <InputText
              onChangeText={ text => this._handleType('password', text) }
              value={ password }
              containerStyle={ styles.inputText }
              name="Password"
              isSecure
              placeholder="Set Your Password" />
          </View>
          <View style={ styles.etc }>
            <View style={ styles.remember }>
              <CheckBox
                onPress={ this._toggleRemember }
                color={ EStyleSheet.value('$firstColor') }
                style={ styles.rememberCheckBox }
                checked={ remember } />
              <Text>Remember me</Text>
            </View>
            <Text style={ styles.forgotten }>Forgotten Password</Text>
          </View>
        </Content>
        <Button onPress={ this._onPressSignIn } full style={ styles.signinButton }>
          <Text style={ styles.signinButtonText }>SIGN IN</Text>
        </Button>
      </Container>
    );
  }

  _toggleRemember = () => {
    this.setState(state => ({
      remember: !state.remember
    }));
  };

  _handleType = (name, text) => {
    this.setState({
      [name]: text
    });
  };

  _onPressSignIn = () => {
    const { email, password } = this.state;
    this.props.fetchLogin(email, password);
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
  signinButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '$thirdColor'
  },
  signinButtonText: {
    fontSize: 16,
    color: '#fff'
  },
  etc: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  remember: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rememberCheckBox: {
    marginLeft: 10,
    marginRight: 20
  },
  forgotten: {
    marginRight: 20,
    fontSize: 16,
    fontWeight: 'bold'
  }
});

function mapStateToProps(state) {
  return {
    
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      backScreen: NavigationActions.back,
      fetchLogin
    },
    dispatch
  );
}

export default SigninScreen;
