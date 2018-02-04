import React, { PureComponent } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Col, Row, Grid } from 'react-native-easy-grid';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Text } from 'native-base';

class TitleText extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
  };

  static defaultProps = {
    title: 'Date',
    content: 'Guest'
  };

  render() {
    const { title, content, containerStyle } = this.props;
    return (
      <Grid style={ [styles.titleText, containerStyle] }>
        <Col style={{ width: 49 }}>
          <Text style={ styles.title }>{title}</Text>
        </Col>
        <Col>
          <Text style={ styles.content }>{content}</Text>
        </Col>
      </Grid>
    );
  }
}

const styles = EStyleSheet.create({
  titleText: {},
  title: {
    fontSize: 12
  },
  content: {
    fontSize: 12
  }
});

export default TitleText;
