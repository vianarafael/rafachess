
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
  const [board, setBoard] = useState(initialBoard);
  const pieces = {
    1: <PawnW onClick={movePawnW}>&#9817;</PawnW>,
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

  function movePawnW(e) {
    console.log(e.target.parentNode.id)
    const [x, y] = e.target.parentNode.id.split("-");
    setBoard(board => {
      const result = [...board];
      result[x][y] = 0;
      result[x-1][y] = 1;
      return result;
    })
  }


  function displayBoard() {
    console.log(board)
    if (Array.isArray(board)) {
    return board.map((row, indexRow) => {
      let firstColor, secondColor;
      if (indexRow % 2 === 0) {
        firstColor = "white";
        secondColor = "black"
      } else {
        firstColor = "black";
        secondColor = "white";
      }
      return row.map((square, indexSquare) => <div id={`${indexRow}-${indexSquare}`} className={indexSquare % 2 === 0 ? firstColor : secondColor}>{pieces[square]}</div>
      )
    })
  }
  }



  return (
    <div className="chessboard">
      {displayBoard()}
    </div>
  );
}

export default App;
