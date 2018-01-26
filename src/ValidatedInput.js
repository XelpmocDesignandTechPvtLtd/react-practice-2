import React, { Component } from "react";
import { Input } from "xelpmoc-core";
import PropTypes from "prop-types";
// HINT: USE `xelpmoc-core` here.

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({hasError:false});
  }
  renderError() {
    this.setState({hasError:true});
  }
  handleError(value) {
      if(this.props.errorFunc(value)){
        this.renderError();
      }
  }
  render() {
    if(this.state.hasError){
      return <div className="error">this.props.errorMsg</div>;
    }
    return (
        <Input onChange={(event)=>this.handleError(event)}/>
    );
  }
}
ValidatedInput.propTypes = {
  onChange: PropTypes.func,
  errorFunc: PropTypes.func,
  errorMsg:PropTypes.string
};
ValidatedInput.defaultProps = {
  errorMsg:""
};