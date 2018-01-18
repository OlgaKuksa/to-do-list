import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTask from './AddTask';
import Filter from './Filter';
import Grid from './Grid'


class App extends Component {
  render() {
    return (
      <div>
      <AddTask/>
      <Filter/>
      <Grid/>
      </div>
    );
  }
}

export default App;
