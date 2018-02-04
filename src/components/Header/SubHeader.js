import React, { Component } from 'react';
import { Container, Header as NativeHeader, Left, Body, Right, Button, Title, Text, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import styles from './styles';

class SubHeader extends Component {
  static propsTypes = {
    title: PropTypes.string.isRequired
  };

  static defaultProps = {
    title: ''
  };
  render() {
    const { title } = this.props;

    return (
      <NativeHeader
        style={ styles.headerContainer }
        androidStatusBarColor={ styles.headerContainer._backgroundColor }
        iosBarStyle="light-content">
        <Left>
          <Button transparent>
            <FeatherIcon name="arrow-left" size={ 32 } color={ EStyleSheet.value('$firstColor') } />
          </Button>
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

export default SubHeader;
