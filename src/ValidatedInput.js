import React, { Component } from "react";
import { Input } from "xelpmoc-core";
import PropTypes from "prop-types";

// HINT: USE `xelpmoc-core` here.

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({hasError:true});
  }
  renderError() {
    return (
          <div className="error">
              {this.props.errorMsg}
              <Input {...this.props} hasError={this.state.hasError} hasError={true} onChange={()=>this.handleError(this.props)}/>          
          </div>
    );
  }
  handleError(value) {
    this.setState({value});
  }
  render() {
    if(this.props.errorMsg){
      return this.renderError();
    }
    return <Input {...this.props} onChange={()=>this.handleError(this.props.value)}/>;
  }
}

ValidatedInput.propTypes = {};

ValidatedInput.defaultProps = {};
