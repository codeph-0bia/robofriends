import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(err, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state) {
      return <h1>Ooops! This not good!</h1>;
    }

    return this.props.children;
  }
}