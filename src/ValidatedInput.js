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
    return <div className="error">{this.props.errorMsg}</div>;
  }
  handleError(event) {
      if(this.props.errorFunc(event)){
        this.setState({hasError:true});
      }
      else{
        this.setState({hasError:false});
      }
  }
  render() {
    const hasErrorValue = this.state.hasError;
    return (
            <div className="ValidatedInput">
              <Input onChange={event => this.handleError(event)}/>
              {hasErrorValue && (this.renderError())}
            </div>
          );
  }
}
ValidatedInput.propTypes = {
  errorFunc: PropTypes.func,
  errorMsg:PropTypes.string
};
ValidatedInput.defaultProps = {
  hasError:false,
  errorMsg:""
};