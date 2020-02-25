import React, { Component } from 'react';


class Square extends Component {

    handleClick = () => {
        this.props.handleLocation(this.props.index)
        this.props.winnerWinner(this.props.value)
    }
  render() {
    return (
      <>
      <div className="box" onClick={ this.handleClick}>{this.props.value}</div>
      </>
    );
  }
}

export default Square;
