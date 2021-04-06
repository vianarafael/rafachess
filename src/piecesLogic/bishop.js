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
        console.log('x', x, 'y', y)
      let tempX = x;
      let tempY = y;

      let leftUp = [];
        let count = 1;
        console.log(board[tempX - 1][tempY - 1]);
      while ((tempX - 1) > -1 && (tempY - 1) >  - 1 && board[tempX-1][tempY-1] < 1) {
        // select all the options
        leftUp.push([tempX - 1, tempY - 1]);
        tempX--;
          tempY -= count;
          count++
      }
        selectOptionsBishop(x,y, [leftUp]);
    }

    function selectOptionsBishop(x, y, [leftUp]) {
      const optionsBoard = [...board];
        optionsBoard[x][y] = 0;
        leftUp.forEach(([px, py]) => {
            optionsBoard[px][py] = "?"
        });
        setBoard({ type: "setOptions", payload: optionsBoard });
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