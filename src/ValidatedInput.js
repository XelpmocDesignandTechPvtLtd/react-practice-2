import React, { Component } from "react";
import { Input } from "xelpmoc-core";
import PropTypes from "prop-types";
export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  handleError(val) {
    if (this.props.errorFunc(val)) {
      this.setState({ hasError: true });
    } else {
      this.setState({ hasError: false });
    }
  }
  renderError() {
    if (this.state.hasError) {
      return <div className="error">{this.props.errorMsg}</div>;
    }
  }
  render() {
    return (
      <div>
        <Input onChange={val => this.handleError(val)} />
        {this.renderError()}
      </div>
    );
  }
}
ValidatedInput.propTypes = {
  errorMsg: PropTypes.string
};
