import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Produtos from './produtos/Produtos'; 


class App extends Component {
  render() {
    return (
      <div className="App">
       <Produtos/>
      </div>
    );
  }
}
export default App;
