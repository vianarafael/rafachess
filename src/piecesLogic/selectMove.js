const selectMove = (e, prevBoard, selectedPiece) =>
{
    const [x, y] = e.target.parentNode.id.split("-");
          console.log(x, y, prevBoard, selectedPiece)
          // Continue here
          // updateBoardW(x, y);
          // I need:  what the board was before
          // The piece
          // And the location (I already have that)
        //   dispatch({ type: "setOptionsW", payload: "?" });
}


export default selectMove