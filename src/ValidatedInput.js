import React from "react";
import { Input } from "xelpmoc-core";
import PropTypes from "prop-types";
// HINT: USE `xelpmoc-core` here.

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
                    hasError:props.hasError,
                    errorMsg:props.errorMsg ? props.errorMsg : ""
                  });
  }
  renderError() {
    this.setState({hasError:true});
  }

  handleError(event) {
      if(this.props.errorFunc(event)){
        this.renderError();
      }
      else{
        this.setState({hasError:false});
      }
  }
  render() {
    return (
            <div className="ValidatedInput">
              <Input onChange={event => this.handleError(event)}/>
              {this.state.hasError ? (<div className="error">{this.props.errorMsg}</div>) : ""}
            </div>
          );
  }
}
ValidatedInput.propTypes = {
  onChange: PropTypes.func,
  errorFunc: PropTypes.func,
  errorMsg:PropTypes.string
};
ValidatedInput.defaultProps = {
  hasError:false,
  errorMsg:""
};