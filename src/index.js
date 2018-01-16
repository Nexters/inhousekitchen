import React, { Component } from "react";
import { Provider } from "react-redux";
import EStyleSheet from "react-native-extended-stylesheet";
import configureStore from "./config/store";
import { View, Text } from "react-native";

EStyleSheet.build({});

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <View>
          <Text style={{ color: "#000" }}>Hello World</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
