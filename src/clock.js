import {useState, useEffect} from 'react'

const Clock = () => {
    let color = "white"
    const [secondsW, setSecondsW] = useState(1800);
    const [secondsB, setSecondsB] = useState(1800);
    const [isRunning, setIsRunning] = useState(true)
    const [intervalID, setIntervalID] = useState(null);



    useEffect(() => {
    if (isRunning) {
        const id = setInterval(() => setSecondsW(secondsW => secondsW - 1), 1000);
        setIntervalID(id)
    } else {
        clearInterval(intervalID)
    }
      
    }, [isRunning])
  

        return (
          <div id="clock">
            {/* <div>{`${Math.floor(secondsW / 60)} : ${secondsW % 60}`}</div> */}
            <div>{secondsW}</div>
            <button onClick={() => setIsRunning(false)}>Pause</button>
            <button onClick={() => setIsRunning(true)}>Run</button>
          </div>
        );
}

export default Clock;