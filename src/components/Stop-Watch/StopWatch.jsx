import { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const refId = useRef(null);
  console.log("stopwatch");

  useEffect(() => {
    return () => {
      clearInterval(refId.current);
    };
  }, []);

  return (
    <div>
      <div>
        <span>{Math.floor(time / 3600)}</span>
        <span>:</span>
        <span>{Math.floor((time / 60) % 60)}</span>
        <span>:</span>
        <span>{Math.floor(time % 60)}</span>
      </div>
      <div>
        <button
          onClick={() => {
            refId.current = setInterval(() => {
              setTime((time) => time + 1);
            }, 1000);
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            clearInterval(refId.current);
          }}
        >
          Stop
        </button>
        <button
          onClick={() => {
            clearInterval(refId.current);
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
