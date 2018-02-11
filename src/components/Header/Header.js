import React, { Component } from 'react';
import { Container, Header as NativeHeader, Left, Body, Right, Button, Icon, Title, Text, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import EStyleSheet from 'react-native-extended-stylesheet';
import EntyoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

class Header extends Component {
  static propsTypes = {
    title: PropTypes.string.isRequired,
    leftComponent: PropTypes.func,
    rightComponent: PropTypes.func
  };

  static defaultProps = {
    title: 'INSIDE HOUSE'
  };

  render() {
    const { title, leftComponent: LeftComponent, rightComponent: RightComponent } = this.props;

    return (
      <NativeHeader
        style={ styles.headerContainer }
        androidStatusBarColor={ EStyleSheet.value('$backgroundColor') }
        iosBarStyle="light-content">
        <Left>{LeftComponent && <LeftComponent />}</Left>
        <Body>
          <Title style={ styles.headerTitle }>{title}</Title>
        </Body>
        <Right>{RightComponent && <RightComponent />}</Right>
      </NativeHeader>
    );
  }
}

const styles = EStyleSheet.create({
  headerContainer: {
    backgroundColor: '$backgroundColor',
    paddingLeft: '$screenPadding',
    paddingRight: 20,
    paddingBottom: 17,
    borderColor: '#181818',
    borderBottomWidth: 0.3
  },
  headerTitle: {
    fontSize: 18,
    color: '$thirdColor'
  },
  '@media android': {
    headerContainer: {
      paddingTop: 18
    }
  }
});

export default Header;
