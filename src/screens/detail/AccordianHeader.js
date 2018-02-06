import React, { Component } from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import { TitleHeader } from '../../components/Header/index';

class AccordianHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    headerStyle: PropTypes.number
  };
  render() {
    const { title, isOpen, headerStyle } = this.props;

    return (
      <TitleHeader
        title={ title }
        headerStyle={ [styles.header, headerStyle] }
        headerRightStyle={ styles.headerRight }
        rightComponent={ () => (
          <SimpleLineIcons
            name={ isOpen ? 'arrow-up' : 'arrow-down' }
            size={ 24 } />
        ) } />
    );
  }
}

const styles = EStyleSheet.create({
  header: {
    flex: 0,
    paddingTop: 21,
    paddingHorizontal: 20,
    paddingBottom: 24,
    backgroundColor: '$backgroundColor',
    zIndex: 10
  },
  headerRight: {
    alignItems: 'flex-end'
  }
});

export default AccordianHeader;
