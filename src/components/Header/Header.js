import React, { Component, PureComponent } from 'react';
import { Header as NativeHeader, Left, Body, Right, Title } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

class Header extends PureComponent {
  static propsTypes = {
    containerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    title: PropTypes.string.isRequired,
    leftComponent: PropTypes.func,
    rightComponent: PropTypes.func
  };

  static defaultProps = {
    title: 'InHouseKitchen',
    containerStyle: {}
  };

  render() {
    const {
      title, leftComponent: LeftComponent, rightComponent: RightComponent, containerStyle
    } = this.props;

    return (
      <NativeHeader
        style={ [styles.headerContainer, containerStyle] }
        androidStatusBarColor={ EStyleSheet.value('$backgroundColor') }
        iosBarStyle="light-content">
        <Left style={ { flex: 0 } }>{LeftComponent && <LeftComponent />}</Left>
        <Body style={ { justifyContent: 'center', alignItems: 'center' } }>
          <Title style={ styles.headerTitle }>{title}</Title>
        </Body>
        <Right style={ { flex: 0 } }>{RightComponent && <RightComponent />}</Right>
      </NativeHeader>
    );
  }
}

const styles = EStyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    paddingTop: 36,
    paddingLeft: '$screenPadding',
    paddingRight: 20,
    paddingBottom: 20,
    borderColor: '#181818',
    borderBottomWidth: 0.3
  },
  headerTitle: {
    width: 180,
    fontSize: 18,
    color: '$thirdColor',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  '@media android': {
    headerContainer: {
      paddingTop: 18
    }
  }
});

export default Header;
