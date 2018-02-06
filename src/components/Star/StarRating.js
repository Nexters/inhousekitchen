import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import RNStarRating from 'react-native-star-rating';
import EStyleSheet from 'react-native-extended-stylesheet';

class StarRating extends PureComponent {
  static propTypes = {
    starCount: PropTypes.number,
    disabled: PropTypes.bool,
    onSelectedStar: PropTypes.func,
  };

  static defaultProps = {
    starCount: 3,
    disabled: false,
    onSelectedStar: () => {},
  };

  render() {
    const { starCount, disabled, onSelectedStar } = this.props;
    return (
      <RNStarRating
        starColor={EStyleSheet.value('$fourthColor')}
        starSize={11}
        starStyle={{ marginLeft: 1 }}
        disabled={false}
        maxStars={5}
        rating={starCount}
        selectedStar={onSelectedStar}
      />
    );
  }
}

EStyleSheet.create({});

export default StarRating;
