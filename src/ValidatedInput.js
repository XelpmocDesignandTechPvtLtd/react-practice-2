import React, { Component } from "react";
import { Input } from "xelpmoc-core";
import PropTypes from "prop-types";
// HINT: USE `xelpmoc-core` here.

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  renderError() {
    this.setState({ hasError: true });
  }

  handleError(value) {
    if (this.props.errorFunc(value)) {
      this.renderError();
    }
  }
  render() {
    const isError = this.state.hasError;
    if (isError) {
      return (
        <div>
          <div className="error">
            <Input
              onChange={(value)=> this.handleError(value)}
              hasError={this.state.hasError}
            />
            {this.props.errorMsg}
          </div>;
        </div>
      );
    }
    return (
      <div>
        <Input
          onChange={(value) => this.handleError(value)}
          hasError={this.state.hasError}
        />
      </div>
    );
  }
}

ValidatedInput.propTypes = {
  onChange: PropTypes.func,
  errorMsg:PropTypes.string
};

ValidatedInput.defaultProps = {
  hasError: false
};
