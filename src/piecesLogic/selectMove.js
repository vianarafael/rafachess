const wPiece = {
  pawn: 1
}

const selectMove = (e, prevBoard, selectedPiece, setBoard) =>
{
    const [x, y] = e.target.parentNode.id.split("-");
          console.log(setBoard)
          // Continue here
          // updateBoardW(x, y);
          // I need:  what the board was before
          // The piece
          // And the location (I already have that)
        //   dispatch({ type: "setOptionsW", payload: "?" });
  // only works for
  if (selectedPiece.color === "white")
  {
          prevBoard[x][y] = wPiece[x][y];
          setBoard({ type: "setOptions", payload: prevBoard });
      }

}


export default selectMove