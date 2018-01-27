import React, { Component } from "react";
import {Input} from "xelpmoc-core";
import PropTypes from "prop-types";
export default class ValidatedInput extends React.Component {
   constructor(props) {
     super(props);
     this.state={
      hasError:false
    }
  }
  renderError() {
    this.setState({ hasError: true });
  }

  handleError(value) {
    if(this.props.errorFunc(value)){
     this.renderError();
     }
}
  render() {
    if(this.state.hasError == true){
     return <div className='error'><Input hasError={this.state.hasError} onChange={(val)=>{this.handleError(val)}}  {...this.props}/></div>;
    }
    else{
      return <div><Input hasError={this.state.hasError} onChange={(val)=>{this.handleError(val)}} {...this.props}  /></div>;
    }
  }
}

ValidatedInput.propTypes = {
   onChange: PropTypes.func,
};

ValidatedInput.defaultProps = {
  hasError:false
};