import React, { Component } from "react";
import {Input} from "xelpmoc-core";
import PropTypes from "prop-types";

// HINT: USE `xelpmoc-core` here.

export default class ValidatedInput extends Component {
  constructor(props) {
    super(props);
    this.state={
      hasError:false
    }
  }
  renderError() {
    if(this.state.hasError)
      return<div className="error">{this.props.errorMsg}</div>
  }

  handleError(value) {
    if(this.props.errorFunc(value)){
      this.setState({
        hasError: true
      })
    }
    else {
      this.setState({
        hasError: false
      })
    }
  }

  render() {
    return (
      <div className="ValidateInput">
        <Input onChange={(value)=>this.handleError(value)}/>
        {this.renderError()}
      </div>
    );
  }
}

ValidatedInput.propTypes = {
  errorFunc: PropTypes.func,
  errorMsg:PropTypes.string
};

ValidatedInput.defaultProps = {
  errorMsg:"Invalid Input"
};