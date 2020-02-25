import React, { Component } from 'react';
import './App.css';
import Board from './Components/Board'
import Footer from './Components/Footer'


class App extends Component {
  render() {
    return (
      <div>
        <h1>Tic-Tac-Toe</h1>
        <Board />
      </div>
    );
  }
}

export default App;
