import React, { Component } from "react";
import propsType from "prop-types";
import Input from "xelpmoc-core";
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

  handleError(event) {
    if (this.props.hasError.errorfunc(event)) {
      this.renderError();
    } else {
      this.setState({
        hasError: false
      });
    }
    console.log(hasError)
  }

  render() {
    return (
      <div className="ValidatedInput">
        <Input type="text" onChange={event => this.handleError(event)} />
        {this.state.hasError ? (
          <div className="ValidatedInput"> {this.props.errorMsg} </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

ValidatedInput.propTypes = {
  nameOf: propsType.string,
  onChange: propsType.func,
  hasError: propsType.string
};

ValidatedInput.defaultProps = {
  errorMsg: ""
};
