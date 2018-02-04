import React, { PureComponent } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Col, Row, Grid } from 'react-native-easy-grid';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet } from 'react-native';
import { Thumbnail, Icon, Text } from 'native-base';

class ProfileText extends PureComponent {
  static propTypes = {
    profileUrl: PropTypes.string,
    name: PropTypes.string,
    containerStyle: PropTypes.number,
    profileStyle: PropTypes.number,
    nameTextStyle: PropTypes.number
  };

  static defaultProps = {
    profileUrl: 'http://lorempixel.com/100/100/abstract',
    name: 'Arthur Pendragon'
  };

  render() {
    const {
      profileUrl, name, containerStyle, profileStyle, nameTextStyle
    } = this.props;
    return (
      <Grid style={ [styles.profileText, containerStyle] }>
        <Col style={ [styles.profileBox, profileStyle] }>
          <Image style={ styles.profileImage } source={ { uri: profileUrl } } />
        </Col>
        <Col style={ styles.name }>
          <Text style={ [styles.nameText, nameTextStyle] }>{name}</Text>
        </Col>
      </Grid>
    );
  }
}

const styles = EStyleSheet.create({
  profileText: {},
  profileBox: {
    flex: 0,
    width: 14
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 7,
    resizeMode: 'contain'
  },
  name: {
    justifyContent: 'center'
  },
  nameText: {
    fontSize: 12,
    paddingLeft: 6
  }
});

export default ProfileText;
