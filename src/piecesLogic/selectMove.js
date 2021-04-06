

const selectMove = (e, prevBoard, selectedPiece, setBoard, setTurn) =>
{
    const [x, y] = e.target.parentNode.id.split("-");
          console.log(selectedPiece)
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
    }
    setTurn("white");
  }
}


export default selectMove