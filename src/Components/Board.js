import React, { Component } from 'react';
import Square from './Square'
import Reset from './Reset'
import Footer from './Footer'
class Board extends Component {
constructor (props){
    super(props)
    this.state = {
        board: ["","","","","","","","",""],
        player: 1
    }
}
    winnerWinner = (value) => {
        let board1 = this.state.board
        let player = this.state.player
        if (
            board1[0] === "X" && board1[1] === "X" && board1[2] === "X" ||
            board1[3] === "X" && board1[4] === "X" && board1[5] === "X" ||
            board1[6] === "X" && board1[7] === "X" && board1[8] === "X" ||
            board1[0] === "X" && board1[3] === "X" && board1[6] === "X" ||
            board1[1] === "X" && board1[4] === "X" && board1[7] === "X" ||
            board1[2] === "X" && board1[5] === "X" && board1[8] === "X" ||
            board1[0] === "X" && board1[4] === "X" && board1[8] === "X" ||
            board1[2] === "X" && board1[4] === "X" && board1[6] === "X" ){
            setTimeout(() => {alert("Winner Winner Chicken Dinner 🍗 Player X")}, 200)
            setTimeout(() => {window.location.reload()}, 1000)

        } else if (
            board1[0] === "O" && board1[1] === "O" && board1[2] === "O" ||
            board1[3] === "O" && board1[4] === "O" && board1[5] === "O" ||
            board1[6] === "O" && board1[7] === "O" && board1[8] === "O" ||
            board1[0] === "O" && board1[3] === "O" && board1[6] === "O" ||
            board1[1] === "O" && board1[4] === "O" && board1[7] === "O" ||
            board1[2] === "O" && board1[5] === "O" && board1[8] === "O" ||
            board1[0] === "O" && board1[4] === "O" && board1[8] === "O" ||
            board1[2] === "O" && board1[4] === "O" && board1[6] === "O" ){
                setTimeout(() => {alert("Winner Winner Chicken Dinner 🍗 Player O")}, 200)
                setTimeout(() => {window.location.reload()}, 1000)

        }
    }
        handleLocation = (index) => {
            let board1 = this.state.board
            if (this.state.board[index] === ""){

        // when idex is clicked it will turn into an "O" 1st
        if(this.state.player === 1 && board1[index] === ""){
            board1[index]= "X"
            this.setState({player: 2})

            // then the 2nd click will turn into a "X"
            // then the 3rd click will turn into an "O" to allow it to cycle logic of "X"'s and "O"'s
        }
        else if(this.state.player === 2 && board1[index] === ""){
            board1[index]="O"
            this.setState({player: 1})
        }

        else{
            // this.state.player === 1 && board1[index] !== ""){
            alert("😹😹😹")
            }
}
}
    resetButton = () =>{
         this.setState({
             board: ["","","","","","","","",""],
             player: 1

         })
     }


  render() {
      let square = this.state.board.map((value, index) => {
          return(
              <Square
              winnerWinner= {this.winnerWinner}
              handleLocation= { this.handleLocation}
              index = { index }
              value = { value }
              key={index}
               />
          )
      })
    return (
      <div id="theBoard">
        {square}

            <Reset
                reset={this.resetButton} />
            <Footer />

      </div>
    );
  }
}

export default Board;
