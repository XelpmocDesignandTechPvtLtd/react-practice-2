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
  }

  handleError(value) {
    if(this.props.errorFunc(value)){
      this.setState({ hasError: true });
     }
}
  render() {
    let classes = null;
    if(this.state.hasError == true){
      classes='error';
     }
     return <div className={classes}><Input hasError={this.state.hasError} onChange={(val)=>{this.handleError(val)}} {...this.props}  /></div>;
  }
}

ValidatedInput.propTypes = {
   onChange: PropTypes.func,
};

ValidatedInput.defaultProps = {
  hasError:false,
  classes:null
};