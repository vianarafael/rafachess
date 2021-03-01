
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
   "-6": <span>&#9818;</span>,
   "?": <span className="selectable" onClick={(e) => {
     const [x, y] = e.target.parentNode.id.split("-");
    //  selectOptions(x,y)
    updateBoard(x,y)
   }}>&#8855;</span>
  }

  function updateBoard(x, y) {
    setBoard(board => {
      const result = [...board]
      board[x][y] = 1;
      result.map((row, rowIndex) => row.map((square, squareIndex) => square === "?" ? board[rowIndex][squareIndex] = 0 : square))
      return result;
    })
  }

  function selectOptions(x, y, [walkOne, walkTwo, killLeft, killRight]) {

      setBoard(board => {
      const result = [...board];
      result[x][y] = 0;
      if (walkOne) result[x-1][y] = "?";
      if (walkTwo) result[x-2][y] = "?";
      if (killLeft) result[x-1][y-1] = "?";
      if (killRight) result[x-1][y+1] = "?";
      return result;
    })
  }
  function pawnWOptions(x,y) {
      // 1. Choose location
      let walkOne = false;
      let walkTwo = false
      let killLeft = false;
      let killRight = false;
    // 1.1 If front is free (x-1 = 0)- can select x-1
    if (board[x-1][y] === 0) {
      // make it blue and clickable 
      walkOne = true;
    }
    // 1.2 If first move - can walk 2

    if (Number(x) === 6) {
      walkTwo = true;
    }
    
    // 1.3 If enemy on the diagonal can kill it
    if(board[x-1][y+1] < 0) {
      killRight = true
    }

    if(board[x-1][y-1] < 0) {
      killLeft = true
    }
    console.log(x,y,walkOne, walkTwo, killLeft, killRight)
    selectOptions(x, y, [walkOne, walkTwo, killLeft, killRight])
  }

  function movePawnW(e) {

    const [x, y] = e.target.parentNode.id.split("-");
    pawnWOptions(x,y);



    // 2. Update the board
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
