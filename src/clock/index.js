import { useState, useEffect } from 'react'
import './clock.css'

const Clock = () => {
  let color = "white"
  const [secondsW, setSecondsW] = useState(1800);
  const [isRunningW, setIsRunningW] = useState(true)
  const [intervalIDW, setIntervalIDW] = useState(null);
  
  const [secondsB, setSecondsB] = useState(1800);
  const [isRunningB, setIsRunningB] = useState(false);
  const [intervalIDB, setIntervalIDB] = useState(null);


    useEffect(() => {
      if (isRunningW)
      {
      
        const id = setInterval(() => setSecondsW(secondsW => secondsW - 1), 1000);
        setIntervalIDW(id)
    } else {
        clearInterval(intervalIDW)
    }
      
    }, [isRunningW])
  
      useEffect(() => {
        if (isRunningB) {
          const id = setInterval(
            () => setSecondsB((secondsB) => secondsB - 1),
            1000
          );
          setIntervalIDB(id);
        } else {
          clearInterval(intervalIDB);
        }
      }, [isRunningB]);


        return (
          <div id="clock">
            {/* <div>{`${Math.floor(secondsW / 60)} : ${secondsW % 60}`}</div> */}

            <div>{`${Math.floor(secondsB / 60)}:${Math.floor(
              secondsB % 60
            )}`}</div>
            <button
              onClick={() => {
                setIsRunningW(true);
                setIsRunningB(false);
              }}
            >
              Black
            </button>

            {/* white one */}

            <div>{`${Math.floor(secondsW / 60)}:${Math.floor(
              secondsW % 60
            )}`}</div>
            <button
              onClick={() => {
                setIsRunningW(false);
                setIsRunningB(true);
              }}
            >
              White
            </button>
          </div>
        );
}

export default Clock;