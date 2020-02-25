import React, { Component } from 'react';


class Reset extends Component {


  render() {
    return (
      <footer>
        <button id="reset" onClick= {this.props.reset}>Restart Game</button>
      </footer>
    );
  }
}

export default Reset;
