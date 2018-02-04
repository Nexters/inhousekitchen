import React, { PureComponent } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Col, Row, Grid } from 'react-native-easy-grid';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Thumbnail, Icon, Text } from 'native-base';

class ProfileText extends PureComponent {
  static propTypes = {
    profileUrl: PropTypes.string,
    name: PropTypes.string
  };

  static defaultProps = {
    profileUrl: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
    name: 'Arthur Pendragon'
  };

  render() {
    const { profileUrl, name, containerStyle } = this.props;
    return (
      <Grid style={ [styles.profileText, containerStyle] }>
        <Col style={ { width: 14 } }>
          <Image style={ styles.profileImage } source={ { uri: profileUrl } } />
        </Col>
        <Col>
          <Text style={ styles.name }>{name}</Text>
        </Col>
      </Grid>
    );
  }
}

const styles = EStyleSheet.create({
  profileText: {},
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 7,
    resizeMode: 'contain'
  },
  name: {
    fontSize: 12,
    paddingLeft: 6
  }
});

export default ProfileText;
