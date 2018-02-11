import React, { PureComponent } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Col, Row, Grid } from 'react-native-easy-grid';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import _ from 'lodash';
import { Text } from 'native-base';

class TitleText extends PureComponent {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    content: PropTypes.string,
    containerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    titleStyle: PropTypes.number,
    titleTextStyle: PropTypes.number,
    contentTextStyle: PropTypes.number
  };

  static defaultProps = {
    title: 'Date',
    content: 'Guest'
  };

  render() {
    const {
      title: Title, content, containerStyle, titleStyle, titleTextStyle, contentTextStyle
    } = this.props;

    const textComponent = _.isString(Title) ? (
      <Text style={ [styles.titleText, titleTextStyle] }>{Title}</Text>
    ) : (
      <Title />
    );
    return (
      <Grid style={ [containerStyle] }>
        <Col style={ [styles.title, titleStyle] }>{textComponent}</Col>
        <Col>
          <Text style={ [styles.contentText, contentTextStyle] }>{content}</Text>
        </Col>
      </Grid>
    );
  }
}

const styles = EStyleSheet.create({
  title: {
    flex: 0,
    width: 49
  },
  titleText: {
    fontSize: 12
  },
  contentText: {
    fontSize: 12
  }
});

export default TitleText;
