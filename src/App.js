
import './App.css';
import { Pw } from './piecesStyles'
function App() {
  return (
    <div className="chessboard">
       {/* 1st  */}
      <div className="white">&#9820;</div>
      <div className="black">&#9822;</div>
      <div className="white">&#9821;</div>
      <div className="black">&#9819;</div>
      <div className="white">&#9818;</div>
      <div className="black">&#9821;</div>
      <div className="white">&#9822;</div>
      <div className="black">&#9820;</div>
       {/* 2nd  */}
      <div className="black">&#9823;</div>
      <div className="white">&#9823;</div>
      <div className="black">&#9823;</div>
      <div className="white">&#9823;</div>
      <div className="black">&#9823;</div>
      <div className="white">&#9823;</div>
      <div className="black">&#9823;</div>
      <div className="white">&#9823;</div>
       {/* 3th  */}
      <div className="white"></div>
      <div className="black"></div>
      <div className="white"></div>
      <div className="black"></div>
      <div className="white"></div>
      <div className="black"></div>
      <div className="white"></div>
      <div className="black"></div>
       {/* 4st  */}
      <div className="black"></div>
      <div className="white"></div>
      <div className="black"></div>
      <div className="white"></div>
      <div className="black"></div>
      <div className="white"></div>
      <div className="black"></div>
      <div className="white"></div>
       {/* 5th  */}
      <div className="white"></div>
      <div className="black"></div>
      <div className="white"></div>
      <div className="black"></div>
      <div className="white"></div>
      <div className="black"></div>
      <div className="white"></div>
      <div className="black"></div>
       {/* 6th  */}
      <div className="black"></div>
      <div className="white"></div>
      <div className="black"></div>
      <div className="white"></div>
      <div className="black"></div>
      <div className="white"></div>
      <div className="black"></div>
      <div className="white"></div>
      {/* 7th */}
      <div className="white"><Pw onClick={(e) => {
        e.target.classList.toggle("selected");
        console.log("u")
      }}>&#9817;</Pw></div>
      <div className="black">&#9817;</div>
      <div className="white">&#9817;</div>
      <div className="black">&#9817;</div>
      <div className="white">&#9817;</div>
      <div className="black">&#9817;</div>
      <div className="white">&#9817;</div>
      <div className="black">&#9817;</div>
      {/*  8th  */}
      <div className="black">&#9814;</div>
      <div className="white">&#9816;</div>
      <div className="black">&#9815;</div>
      <div className="white">&#9813;</div>
      <div className="black">&#9812;</div>
      <div className="white">&#9815;</div>
      <div className="black">&#9816;</div>
      <div className="white">&#9814;</div>
    </div>
  );
}

export default App;
