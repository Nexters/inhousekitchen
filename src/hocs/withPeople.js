import React, { Component } from "react";

const withPeople = Component =>
  class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return <Component {...this.props} people={people} />;
    }
  };

export default withPeople;
