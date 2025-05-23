import { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [state, setState] = useState("reset");
  const refId = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(refId.current);
    };
  }, []);

  useEffect(() => {
    if (state == "start") {
      refId.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (state == "stop") {
      clearInterval(refId.current);
    } else if (state == "reset") {
      clearInterval(refId.current);
      setTime(0);
    }
  }, [state]);

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
            setState("start");
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            setState("stop");
          }}
        >
          Stop
        </button>
        <button
          onClick={() => {
            setState("reset");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
