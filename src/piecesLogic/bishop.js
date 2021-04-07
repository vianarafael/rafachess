import { Piece } from "../piecesStyles";
import { useContext } from "react";
import { BoardContext } from "../App";

function Bishop({ color })
{
    const { board, setBoard, turn, setTurn } = useContext(BoardContext);
    
    function moveBishop(e)
    {
        const [x, y] = e.target.parentNode.parentNode.id.split("-");
        const prevBoard = board.map(function (arr) {
          return arr.slice();
        });
        prevBoard[x][y] = 0;
        setBoard({ type: "setPreviousBoard", payload: prevBoard });
        setBoard({
          type: "setSelectedPiece",
          payload: { piece: "bishop", color },
        });
          bishopOpions(x, y);          
      }
    
    function bishopOpions(x, y) {
      x = Number(x);
      y = Number(y);
      let tempX = x;
      let tempY = y;
      
      if (color === "white")
      {

        let leftUp = [];
   
        while ((tempX - 1) > -1 && (tempY - 1) > - 1 && board[tempX - 1][tempY - 1] < 1)
        {
          // select all the options
          leftUp.push([tempX - 1, tempY - 1]);
          tempX--;
          tempY--
        }

        tempX = x
        tempY = y
        let rightUp = [];
        while ((tempX - 1 > -1 && (tempY + 1) < 8) && board[tempX - 1][tempY + 1] < 1)
        {
          rightUp.push([tempX - 1, tempY + 1])
          tempX--
          tempY++
    
          if (board[tempX - 1][tempY + 1] < 0)
          {
            rightUp.push([tempX - 1, tempY + 1]);
            break;
          }
        }

        tempX = x;
        tempY = y;
        let leftDown = [];
        while (tempX + 1 < 8 && tempY - 1 > -1 && board[tempX + 1][tempY - 1] < 1)
        {
          leftDown.push([tempX + 1, tempY - 1]);
          tempX++
          tempY--
        }

        tempX = x;
        tempY = y;
        let rightDown = [];
        while (tempX + 1 < 8 && tempY + 1 < 8 && board[tempX + 1][tempY + 1] < 1)
        {

          rightDown.push([tempX + 1, tempY + 1])
          tempX++
          tempY++
        }
          selectOptionsBishop(x, y, [leftUp, rightUp, leftDown, rightDown]);
      } else
      {
        let leftUp = [];

        while (
          tempX + 1 < 8 &&
          tempY - 1 > -1 &&
          board[tempX + 1][tempY - 1] > -1
        ) {
          // select all the options
          leftUp.push([tempX + 1, tempY - 1]);
          tempX++;
          tempY--;
        }

          tempX = x;
          tempY = y;
          let rightUp = [];
          while (
            tempX + 1 < 8 &&
            tempY + 1 < 8 &&
            board[tempX + 1][tempY + 1] > -1
          ) {
            rightUp.push([tempX + 1, tempY + 1]);
            tempX++;
            tempY++;
          }
        
                tempX = x;
                tempY = y;
                let leftDown = [];
                while (
                  tempX - 1 > -1 &&
                  tempY + 1 < 8 &&
                  board[tempX - 1][tempY + 1] > -1
                ) {
                  leftDown.push([tempX - 1, tempY + 1]);
                  tempX--;
                  tempY++;
                }
        
                  tempX = x;
                  tempY = y;
                  let rightDown = [];
                  while (
                    tempX - 1 > -1 &&
                    tempY - 1 > -1 &&
                    board[tempX - 1][tempY -1] > -1
                  ) {
                    leftDown.push([tempX - 1, tempY - 1]);
                    tempX--;
                    tempY--;
                  }

        selectOptionsBishop(x, y, [leftUp, rightUp, leftDown, rightDown]);
      }

    }

  function selectOptionsBishop(x, y, moveOptions)
  {
      
      const optionsBoard = [...board];
    optionsBoard[x][y] = 0;
      moveOptions.forEach(option => option.forEach(([px, py]) => {
          color === "white"
            ? (optionsBoard[px][py] = "?")
            : (optionsBoard[px][py] = "!");
      }))

    setBoard({ type: "setOptions", payload: optionsBoard });
     setTurn("transition");
    }
      return (
        <Piece
          className="bishop"
              onClick={(e) =>
              {
            if (color === turn) moveBishop(e);
          }}
        >
          {color === "white" ? <span>&#9815;</span> : <span>&#9821;</span>}
        </Piece>
      );
}

export default Bishop