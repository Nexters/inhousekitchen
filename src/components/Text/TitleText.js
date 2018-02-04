import React, { PureComponent } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Col, Row, Grid } from 'react-native-easy-grid';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import _ from 'lodash';
import { Text } from 'native-base';

class TitleText extends PureComponent {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    content: PropTypes.string,
    containerStyle: PropTypes.number,
    titleStyle: PropTypes.number,
    contentStyle: PropTypes.number
  };

  static defaultProps = {
    title: 'Date',
    content: 'Guest'
  };

  render() {
    const {
      title: Title, content, containerStyle, titleStyle, contentStyle
    } = this.props;

    console.log(Title);

    const textComponent = _.isString(Title) ? <Text style={ [styles.title, titleStyle] }>{Title}</Text> : Title;
    return (
      <Grid style={ [styles.titleText, containerStyle] }>
        <Col style={ { width: 49 } }>{textComponent}</Col>
        <Col>
          <Text style={ [styles.content, contentStyle] }>{content}</Text>
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
