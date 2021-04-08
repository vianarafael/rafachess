

const selectMove = (e, prevBoard, selectedPiece, setBoard, setTurn) =>
{
    const [x, y] = e.target.parentNode.id.split("-");
  if (selectedPiece.color === "white")
  {         
    switch (selectedPiece.piece) {
      case "pawn":
        prevBoard[x][y] = 1;
        setBoard({ type: "setOptions", payload: prevBoard });
        break;
      case "knight":
        prevBoard[x][y] = 2;
        setBoard({ type: "setOptions", payload: prevBoard });
        break;
      case "bishop":
        prevBoard[x][y] = 3;
        setBoard({ type: "setOptions", payload: prevBoard });
        break;
      case "rook":
        prevBoard[x][y] = 4;
        setBoard({ type: "setOptions", payload: prevBoard });
        break
    }
    setTurn("black")
  } else
  {
    switch (selectedPiece.piece) {
      case "pawn":
        prevBoard[x][y] = -1;
        setBoard({ type: "setOptions", payload: prevBoard });
        break;
      case "knight":
        prevBoard[x][y] = -2;
        setBoard({ type: "setOptions", payload: prevBoard });
        break;
      case "bishop":
        prevBoard[x][y] = -3;
        setBoard({ type: "setOptions", payload: prevBoard });
      case "rook":
        prevBoard[x][y] = -4;
        setBoard({ type: "setOptions", payload: prevBoard });
        break;
    }
    setTurn("white");
  }
}


export default selectMove