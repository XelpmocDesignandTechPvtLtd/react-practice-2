import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidatedInput from './ValidatedInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ValidatedInput errorFunc={val => {return val.length > 4}} errorMsg="Invalid Input"/>
      </div>
    );
  }
}

export default App;
