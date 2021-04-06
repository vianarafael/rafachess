import "./App.css";
import { useState, createContext, useReducer } from "react";

import selectMove from './piecesLogic/selectMove'
import Pawn from './piecesLogic/pawn'
import Knight from "./piecesLogic/knight"

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
let prev
let selectedPiece
  let setBoard = () => console.log('set board')
const reducer = (state, action) =>
{
  switch (action.type) {
    case "setOptions":
      return action.payload;
    case "setPreviousBoard":
      prev = action.payload
    case "setSelectedPiece":
      selectedPiece = action.payload
      console.log(selectedPiece)

 
  }
}

function App()
  {
    const [board, dispatch] = useReducer(reducer, initialBoard)
    const [turn, setTurn] = useState("white");
  
    const pieces = {
      1: <Pawn color="white" />,
      2: <Knight color="white" />,
      3: <span>&#9815;</span>,
      4: <span>&#9814;</span>,
      5: <span>&#9813;</span>,
      6: <span>&#9812;</span>,
      "-1": (
        <Pawn color="black" />
      ),
      "-2": <Knight color="black" />,
      "-3": <span>&#9821;</span>,
      "-4": <span>&#9820;</span>,
      "-5": <span>&#9819;</span>,
      "-6": <span>&#9818;</span>,
      "?": (
        <span
          className="selectable"
          // set selected piece - piece + color
          // get the board before options
          onClick={(e) => selectMove(e, prev, selectedPiece, setBoard = dispatch, setTurn)}
        >
          &#8855;
        </span>
      ),
      "!": (
        <span
          className="selectable"
          onClick={(e) =>
          {
            selectMove(e, prev, selectedPiece, setBoard = dispatch, setTurn)
          }}
        >
          &#8855;
        </span>
      ),
    };


    function displayBoard()
    {
      if (Array.isArray(board))
      {
        return board.map((row, indexRow) =>
        {
          let firstColor, secondColor;
          if (indexRow % 2 === 0)
          {
            firstColor = "white";
            secondColor = "black";
          } else
          {
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
      <BoardContext.Provider value={{ board, setBoard: dispatch, turn, setTurn }}>
        <div className="chessboard">{displayBoard()}</div>
      </BoardContext.Provider>
    );
  }

export default App;
