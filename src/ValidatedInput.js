import React, { Component } from "react";
// HINT: USE `xelpmoc-core` here.
import { Input } from "xelpmoc-core";
import PropTypes from "prop-types";

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  renderError() {
    if (this.state.hasError == true) {
      return <div className="error">{this.props.errorMsg}</div>;
    }
  }
  handleError(value) {
    if (this.props.errorFunc(value)) {
      this.setState({
        hasError: true
      });
    }
  }
  render() {
    return (
      <div>
        <Input onChange={value => this.handleError(value)} />;
        {this.renderError()}
      </div>
    );
  }
}
ValidatedInput.propTypes = {
  errorMsg: PropTypes.string
};
ValidatedInput.defaultProps = {
  hasError: false
};
