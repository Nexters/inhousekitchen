import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Header as NativeHeader, Left, Body, Right, Button, Title, Text, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import { BackButton } from '../Button';

class SubHeader extends Component {
  static propsTypes = {
    title: PropTypes.string.isRequired
  };

  static defaultProps = {
    title: ''
  };
  render() {
    const { title, onBackPress } = this.props;

    return (
      <NativeHeader
        style={ styles.headerContainer }
        androidStatusBarColor={ EStyleSheet.value('$backgroundColor') }
        backgroundColor={ EStyleSheet.value('$backgroundColor') }
        iosBarStyle="light-content">
        <Left>
          <BackButton onPress={ onBackPress } />
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          <Text style={ styles.subHeaderRightText }>EDIT</Text>
        </Right>
      </NativeHeader>
    );
  }
}

const styles = EStyleSheet.create({
  headerContainer: {
    paddingTop: 0
  },
  subHeaderRightText: {
    color: '$thirdColor'
  }
});

export default SubHeader;
