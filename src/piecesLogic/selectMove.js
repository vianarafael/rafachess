const wPiece = {
  pawn: 1
}

const selectMove = (e, prevBoard, selectedPiece, setBoard) =>
{
    const [x, y] = e.target.parentNode.id.split("-");
          console.log(selectedPiece)
          // Continue here
          // updateBoardW(x, y);
          // I need:  what the board was before
          // The piece
          // And the location (I already have that)
        //   dispatch({ type: "setOptionsW", payload: "?" });
  // only works for

  if (selectedPiece.color === "white")
  {         
    switch (selectedPiece.piece) {
      case "pawn":
        prevBoard[x][y] = 1;
        setBoard({ type: "setOptions", payload: prevBoard });
    }
    }


}


export default selectMove