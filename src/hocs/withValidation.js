import React, { Component } from 'react';
import PropTypes from 'prop-types';

function withValidation(TargetComponent) {
  return class WithValidation extends Component {
    static propTypes = {
      isValid: PropTypes.bool,
      validStyle: PropTypes.object,
      inValidStyle: PropTypes.object,
    };

    static defaultProps = {
      isValid: true,
      validStyle: {},
      inValidStyle: {},
    };

    constructor(props) {
      super(props);
      this.state = {
        isValid: true,
      };
    }
    render() {
      const { validStyle, inValidStyle } = this.props;
      const props = Object.assign({
        onChange: this._onChange,
        style: this.state.isValid ? validStyle : inValidStyle,
      });
      return <TargetComponent {...props} />;
    }

    _onChange = val => true;
  };
}

export default withValidation;
