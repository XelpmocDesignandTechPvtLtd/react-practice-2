import React, { Component } from "react";
import {Input} from "xelpmoc-core";
import PropTypes from "prop-types";
export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state= { hasError: true };
  }
  renderError() {}

  handleError(value) {
  }

  render() {
    return <div className='error'><Input onChange={()=>{this.handleError()}} errorMsg={this.props.errorMsg}  /></div>;
  }
}

ValidatedInput.propTypes = {
   onChange: PropTypes.func,
};

ValidatedInput.defaultProps = {
  hasError:true
};
