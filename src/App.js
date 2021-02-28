
import './App.css'
import { PawnW } from './piecesStyles'
import { useState } from 'react'



function App() {

  const initialBoard = [
    [-4,-2,-3,-5,-6,-3,-2,-4],
    [-1,-1,-1,-1,-1,-1,-1,-1],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1],
    [4,2,3,5,6,3,2,4]
  ];

  const pieces = {
    1: <PawnW onClick={() => console.log('here')}>&#9817;</PawnW>,
    2: <span>&#9816;</span>,
    3: <span>&#9815;</span>,
    4: <span>&#9814;</span>,
    5: <span>&#9813;</span>,
    6: <span>&#9812;</span>,
    "-1": <span>&#9823;</span>,
    "-2": <span>&#9822;</span>,
    "-3": <span>&#9821;</span>,
   "-4": <span>&#9820;</span>,
   "-5": <span>&#9819;</span>,
   "-6": <span>&#9818;</span>
  }

  const [board, setBoard] = useState(initialBoard)


  function displayBoard() {
    return board.map((row, index) => {
      let firstColor, secondColor;
      if (index % 2 === 0) {
        firstColor = "white";
        secondColor = "black"
      } else {
        firstColor = "black";
        secondColor = "white";
      }
      return row.map((square, index) => <div className={index % 2 === 0 ? firstColor : secondColor}>{pieces[square]}</div>
      )
    })
  }



  return (
    <div className="chessboard">
      {displayBoard()}
    </div>
  );
}

export default App;
