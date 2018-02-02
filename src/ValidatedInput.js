import React, { Component } from "react";
import { Input } from "xelpmoc-core";
import propTypes from "prop-types";
// HINT: USE `xelpmoc-core` here.

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: props.hasError,
      errorMsg: props.errorMsg ? props.errorMsg : ""
    };
  }
  renderError() {
    this.setState({
      hasError: true
    });
  }
  checkError(event) {
    if (this.props.errorFunc(event)) {
      this.renderError();
    } else {
      this.setState({
        hasError: false
      });
    }
  }
  render() {
    return (
      <div className="ValidatedInput">
        <Input onChange={event => this.checkError(event)} />
        {this.state.hasError ? (
          <div className="error"> {this.props.errorMsg} </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
ValidatedInput.propTypes = {
  onChange: propTypes.func
};

ValidatedInput.defaultProps = {
  hasError: false,
  errorMsg: ""
};
