import React, { Component, PureComponent } from 'react';
import { View, TextInput, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

class InputText extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    isSecure: PropTypes.bool,
    containerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  };
  static defaultProps = {
    name: 'User Name',
    placeholder: 'Input Your Username',
    isSecure: false,
    containerStyle: {}
  };
  render() {
    const {
      name, placeholder, isSecure, containerStyle, ...props
    } = this.props;
    return (
      <View style={ containerStyle }>
        <Text style={ styles.label }>{name}</Text>
        <TextInput
          {...props}
          autoCapitalize="none"
          secureTextEntry={ isSecure }
          selectionColor={ EStyleSheet.value('$firstColor') }
          style={ styles.input }
          placeholder={ placeholder } />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  label: {
    fontSize: 14,
    height: 17,
    color: '$firstColor',
    fontWeight: 'bold',
    marginBottom: 1
  },
  input: {
    fontSize: 16,
    height: 48,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '$secondColor'
  }
});

export default InputText;
