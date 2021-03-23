import "./App.css";
import { Piece } from "./piecesStyles";
import { useState, createContext, useReducer } from "react";
import Pawn from './piecesLogic/pawn'

export const BoardContext = createContext()
  const initialBoard = [
    [-4, -2, -3, -5, -6, -3, -2, -4],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [4, 2, 3, 5, 6, 3, 2, 4],
  ];
  //erase this
let selectedPiece = 'pawn'
  let setBoard = () => console.log('set board')
const reducer = (state, action) =>
{
  switch (action.type) {
    case "setOptionsW":
      return action.payload;
    //   ((x, y) => {
    //   const result = [...state];
    //   switch (selectedPiece) {
    //     case "pawn":
    //       state[x][y] = 1;
    //       break;
    //     case "knight":
    //       state[x][y] = 2;
    //   }
    //   result.map((row, rowIndex) =>
    //     row.map((square, squareIndex) =>
    //       square === "?" ? (state[rowIndex][squareIndex] = 0) : square
    //     )
    //   );
    //   return result;
    // })()
  }
}
  
  
function App() {
  const [board, dispatch] = useReducer(reducer, initialBoard)
  const [turn, setTurn] = useState("white");
  const [selectedPiece, setSelectedPiece] = useState(null);
 

  const pieces = {
    1: <Pawn color="white" />,
    2: (
      <Piece className="knight" onClick={(e) => moveKnight(e, "white")}>
        &#9816;
      </Piece>
    ),
    3: <span>&#9815;</span>,
    4: <span>&#9814;</span>,
    5: <span>&#9813;</span>,
    6: <span>&#9812;</span>,
    "-1": (
      <Pawn color="black" />
      //     <Piece onClick={(e) => {

      //       // movePawn(e, "black")
      // }}>
      //       &#9823;
      //     </Piece>
    ),
    "-2": (
      <Piece className="knight" onClick={(e) => moveKnight(e, "black")}>
        &#9822;
      </Piece>
    ),
    "-3": <span>&#9821;</span>,
    "-4": <span>&#9820;</span>,
    "-5": <span>&#9819;</span>,
    "-6": <span>&#9818;</span>,
    "?": (
      <span
        className="selectable"
        onClick={(e) => {
          const [x, y] = e.target.parentNode.id.split("-");
          updateBoardW(x, y);
        }}
      >
        &#8855;
      </span>
    ),
    "!": (
      <span
        className="selectable"
        onClick={(e) => {
          const [x, y] = e.target.parentNode.id.split("-");
          updateBoardB(x, y);
        }}
      >
        &#8855;
      </span>
    ),
  };

  function updateBoardW(x, y)
  {
    setBoard(() => {
      const result = [...board];
      switch (selectedPiece) {
        case "pawn":
          board[x][y] = 1;
          break;
        case "knight":
          board[x][y] = 2;
      }
      result.map((row, rowIndex) =>
        row.map((square, squareIndex) =>
           square === "?" ? (board[rowIndex][squareIndex] = 0) : square
        )
      );
      return result;
    });
  }

  function updateBoardB(x, y) {
    setBoard(() => {
      const result = [...board];
            switch (selectedPiece) {
              case "pawn":
                board[x][y] = -1;
                break;
              case "knight":
                board[x][y] = -2;
            }
      result.map((row, rowIndex) =>
        row.map((square, squareIndex) =>
          square === "!" ? (board[rowIndex][squareIndex] = 0) : square
        )
      );
      return result;
    });
  }

  function selectOptionsKnight(
    x,
    y,
    [
      upLeft,
      upRight,
      leftUp,
      leftDown,
      rightUp,
      rightDown,
      downLeft,
      downRight,
    ],
    color
  )
  {
    if (color === "white") {
      setBoard(() => {
        const result = [...board];
        result[x][y] = 0;
        if (upLeft) result[x - 2][y - 1] = "?";
        if (upRight) result[x - 2][y + 1] = "?";
        if (leftUp) result[x + 1][y - 2] = "?";
        if (leftDown) result[x - 1][y - 2] = "?";
        if (rightUp) result[x - 1][y + 2] = "?";
        if (rightDown) result[x + 1][y + 2] = "?";
        if (downLeft) result[x + 2][y - 1] = "?";
        if (downRight) result[x + 2][y + 1] = "?";
        return result;
      });
    } else
    {
          setBoard(() => {
            const result = [...board];
            result[x][y] = 0;
            if (upLeft) result[x + 2][y + 1] = "!";
            if (upRight) result[x + 2][y - 1] = "!";
            if (leftUp) result[x - 1][y + 2] = "!";
            if (leftDown) result[x + 1][y + 2] = "!";
            if (rightUp) result[x + 1][y - 2] = "!";
            if (rightDown) result[x - 1][y - 2] = "!";
            if (downLeft) result[x - 2][y + 1] = "!";
            if (downRight) result[x - 2][y - 1] = "!";
            return result;
          });

    }
  }
  function knightOptions(x, y, color) {
    x = Number(x);
    y = Number(y);
    let upLeft = false;
    let upRight = false;
    let leftUp = false;
    let leftDown = false;
    let rightUp = false;
    let rightDown = false;
    let downLeft = false;
    let downRight = false;

    if (color === "white")
    {
      if ( x - 2 >= 0 && y - 1 >=0 && board[x - 2][y - 1] <= 0)
      {
        upLeft = true;
      }

      if (x - 2 >= 0 && y+1 < 8 && board[x - 2][y + 1] <= 0) {
        upRight = true;
      }
      
      if (x + 1 < 8 && y - 2 >= 0 && board[x + 1][y - 2] <= 0)
      {
        leftUp = true;
      }

      if (x - 1 >= 0 && y - 2 >= 0 && board[x - 1][y - 2] <= 0)
      {
        leftDown = true;
      }

      if ( x - 1 >= 0 && y + 2 < 8 && board[x - 1][y + 2] <= 0)
      {
        rightUp = true;
      }
      
      if (x + 1 < 8 && y + 2 < 8 && board[x + 1][y + 2] <= 0)
      {
        rightDown = true;
      }
      
      if (x + 2 < 8 && y -1 >= 0 && board[x + 2][y - 1] <= 0)
      {
        downLeft = true;
      }

      if (x + 2 < 8 && y + 1 < 8 &&  board[x + 2][y + 1] <= 0)
      {
        downRight = true;
      }
    } else
    {
      if (x + 2 < 8 && y + 1 < 8 &&  board[x + 2][y + 1] >= 0)
      {
        upLeft = true;
      }

      if (x + 2 < 8 && y - 1 >= 0 && board[x + 2][y - 1] >= 0)
      {
        upRight = true;
      }
      // hacky
      if ( x - 1 >= 0 &&  y + 2 < 8 && board[x - 1][y + 2] >= 0)
      {
        leftUp = true;
      }

      if (x + 1 < 8 && y + 2 < 8 && board[x + 1][y + 2] >= 0)
      {
        leftDown = true;
      }

      if (x + 1 < 8 &&  y - 2 >= 0 && board[x + 1][y - 2] >= 0)
      {
        rightUp = true;
      }
      
      if (x - 1 >= 0 && y - 2 >= 0 && board[x - 1][y - 2] >= 0)
      {
        rightDown = true;
      }
      if (x -2 > 0 && y + 1 < 8 && board[x - 2][y + 1] >= 0)
      {
        downLeft = true;
      }

      if (x - 2 >= 0 && y - 1 >=0 && board[x - 2][y - 1] >= 0) {
        downRight = true;
      }
    }
    selectOptionsKnight(
      x,
      y,
      [
        upLeft,
        upRight,
        leftUp,
        leftDown,
        rightUp,
        rightDown,
        downLeft,
        downRight,
      ],
      color
    );
  }

  function moveKnight(e, color) {
    const [x, y] = e.target.parentNode.id.split("-");
    setSelectedPiece("knight");
    knightOptions(x, y, color);
    
  }

  function displayBoard() {
    if (Array.isArray(board)) {
      return board.map((row, indexRow) => {
        let firstColor, secondColor;
        if (indexRow % 2 === 0) {
          firstColor = "white";
          secondColor = "black";
        } else {
          firstColor = "black";
          secondColor = "white";
        }
        return row.map((square, indexSquare) => (
          <div
            id={`${indexRow}-${indexSquare}`}
            className={indexSquare % 2 === 0 ? firstColor : secondColor}
          >
            {pieces[square]}
          </div>
        ));
      });
    }
  }
 
  return (
    <BoardContext.Provider value={{board, setBoard: dispatch}}>
      <div className="chessboard">{displayBoard()}</div>
    </BoardContext.Provider>
  );
}

export default App;
