import React, { Component } from 'react';
import {
  Container,
  Header as NativeHeader,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  Content,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import styles from './styles';
import { BackButton } from '../Button';

class SubHeader extends Component {
  static propsTypes = {
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    title: '',
  };
  render() {
    const { title } = this.props;

    return (
      <NativeHeader
        style={styles.headerContainer}
        androidStatusBarColor={styles.headerContainer._backgroundColor}
        iosBarStyle="light-content"
      >
        <Left>
          <BackButton />
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          <Text style={styles.subHeaderRightText}>EDIT</Text>
        </Right>
      </NativeHeader>
    );
  }
}

export default SubHeader;
