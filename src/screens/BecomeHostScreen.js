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

@connect(mapStateToProps, mapDispatchToProps)
class BecomeHostScreen extends Component {
  static propTypes = {};

  componentDidMount() {}
  render() {
    return (
      <Container>
        <SubHeader onBackPress={ () => this.props.backScreen() } />
        <Content style={ styles.content }>
          <Text>Hello World!</Text>
        </Content>
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

export default BecomeHostScreen;
