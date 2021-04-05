
import { Piece } from '../piecesStyles'
import { useContext, useEffect } from 'react'
import { BoardContext } from '../App'

  let selected = true;

function Pawn({color})
{
  
  const { board, setBoard } = useContext(BoardContext)
 
  function selectOptionsPawn(
    x,
    y,
    [walkOne, walkTwo, killLeft, killRight]
  )
  {
    if (color === "white")
    {
      const optionsBoard = [...board];
      optionsBoard[x][y] = 0;
      if (walkOne) optionsBoard[x - 1][y] = "?";
          if (walkTwo) optionsBoard[x - 2][y] = "?";
          if (killLeft) optionsBoard[x - 1][y - 1] = "?";
          if (killRight) optionsBoard[x - 1][Number(y) + 1] = "?";
          
        
      setBoard({ type: "setOptions", payload: optionsBoard });
      // setBoard({ type: "setPreviousBoard", payload: board})
  
    } else {
        const optionsBoard = [...board];
        optionsBoard[x][y] = 0;
        if (walkOne) optionsBoard[x + 1][y] = "!";
        if (walkTwo) optionsBoard[x + 2][y] = "!";
        if (killLeft) optionsBoard[x + 1][Number(y) + 1] = "!";
        if (killRight) optionsBoard[x + 1][Number(y) - 1] = "!";
        setBoard({ type: "setOptions", payload: optionsBoard });
   
    }
  }

  function pawnOptions(x, y) {
    x = Number(x);
    y = Number(y);
    // 1. Choose location
    let walkOne = false;
    let walkTwo = false;
    let killLeft = false;
    let killRight = false;

    if (color === "white")
    {
      if (x === 0) {
        // figure out that logic latter
        console.log("change pieces");
      }
      
      // 1.1 If front is free (x-1 = 0)- can select x-1
      if (board[x - 1][y] === 0) {
        // make it blue and clickable
        walkOne = true;
      }
      // 1.2 If first move - can walk 2

      if (x === 6) {
        walkTwo = true;
      }

      // 1.3 If enemy on the diagonal can kill it
      if (board[x - 1][y + 1] < 0) {
        killRight = true;
      }

      if (board[x - 1][y - 1] < 0) {
        killLeft = true;
      }
    } else {
      if (x === 7) {
        // figure out that logic latter
        console.log("change pieces");
      }

      // 1.1 If front is free (x-1 = 0)- can select x-1
      if (board[x + 1][y] === 0) {
        // make it clickable
        walkOne = true;
      }
      // 1.2 If first move - can walk 2

      if (x === 1) {
        walkTwo = true;
      }

      // 1.3 If enemy on the diagonal can kill it

      if (board[x + 1][y - 1] > 0) {
        killRight = true;
      }

      if (board[x + 1][y + 1] > 0) {
        killLeft = true;
      }
    }

    selectOptionsPawn(
      x,
      y,
      [walkOne, walkTwo, killLeft, killRight]
    );
  }

  function movePawn(e)
  {
     selected = false
    const [x, y] = e.target.parentNode.parentNode.id.split("-");
    console.log(e.target.parentNode.parentNode)
    //   setSelectedPiece("pawn");
    const prevBoard = board.map(function (arr)
    {
     return arr.slice();
    });
    prevBoard[x][y] = 0
    setBoard({ type: "setPreviousBoard", payload: prevBoard });
    setBoard({
      type: "setSelectedPiece", payload: { piece: "pawn", color}})
    pawnOptions(x, y);
  }

  return (
    <Piece className="pawn" onClick={(e) => movePawn(e)}>
      {color === "white" ? <span>&#9817;</span> : <span>&#9823;</span>}
    </Piece>
  );
}

export default Pawn
