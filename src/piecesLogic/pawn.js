import { Piece } from '../piecesStyles'
import { useContext } from 'react'
import { BoardContext } from '../App'



function Pawn()
{
  const board = useContext(BoardContext)
  
  function selectOptionsPawn(
    x,
    y,
    [walkOne, walkTwo, killLeft, killRight],
    color
  ) {
    if (color === "white") {
      setBoard((board) => {
        const result = [...board];
        result[x][y] = 0;
        if (walkOne) result[x - 1][y] = "?";
        if (walkTwo) result[x - 2][y] = "?";
        if (killLeft) result[x - 1][y - 1] = "?";
        if (killRight) result[x - 1][Number(y) + 1] = "?";
        return result;
      });
    } else {
      setBoard((board) => {
        const result = [...board];
        result[x][y] = 0;
        if (walkOne) result[x + 1][y] = "!";
        if (walkTwo) result[x + 2][y] = "!";
        if (killLeft) result[x + 1][Number(y) + 1] = "!";
        if (killRight) result[x + 1][Number(y) - 1] = "!";
        return result;
      });
    }
  }

  function pawnOptions(x, y, color) {
    x = Number(x);
    y = Number(y);
    // 1. Choose location
    let walkOne = false;
    let walkTwo = false;
    let killLeft = false;
    let killRight = false;

    if (color === "white") {
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
      [walkOne, walkTwo, killLeft, killRight],
      color,
      board,
      setBoard
    );
  }

  function movePawn(e, color) {
    const [x, y] = e.target.parentNode.id.split("-");
    //   setSelectedPiece("pawn");
    pawnOptions(x, y, color, board, setBoard);
  }

    
    console.log('a')
  return (
    <Piece className="pawn" onClick={(e) => movePawn(e, "white")}>
      &#9817;
    </Piece>
  );
}

export default Pawn
