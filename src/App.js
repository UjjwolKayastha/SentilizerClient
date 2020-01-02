import React, { Component } from 'react';
import QueryForm from './components/queryform';
import Display from './components/display';
import Display2 from './components/display2';
import Display3 from './components/display3';
import Display4 from './components/display4';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QueryForm />
        <Display />
        <Display2/>
        <Display3/>
        <Display4/>
      </div>

      
                
    );
  }
}

export default App;
