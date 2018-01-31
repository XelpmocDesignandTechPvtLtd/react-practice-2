import React, { Component } from 'react'
import { Input } from 'xelpmoc-core'
// HINT: USE `xelpmoc-core` here.

export default class ValidatedInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: true }
  }
  checkError (value) {
    this.setState({ value })
  }
  render () {
    return (
      <div className='error'>
        {this.props.errorMsg}
        <Input onChange={() => this.checkError(this.props.value)} />
      </div>
    )
  }
}
ValidatedInput.propTypes = {}

ValidatedInput.defaultProps = {}
