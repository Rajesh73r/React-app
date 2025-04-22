import { useEffect, useRef, useState } from "react";

const TimerCount = () => {
  const [time, setTime] = useState(0);
  const [state, setState] = useState("reset");
  const refId = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(refId.current);
    };
  }, []);

  useEffect(() => {
    if (state == "start") {
      refId.current = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (state == "stop") {
      clearInterval(refId.current);
    } else if (state == "reset") {
      clearInterval(refId.current);
      setTime(0);
    }
  }, [state]);

  useEffect(() => {
    if (time <= 0) {
      clearInterval(refId.current);
      setTime(0);
    }
  }, [time]);

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
        <input ref={inputRef} type="number" min={0} />

        <button
          onClick={() => {
            setTime(inputRef.current.value);
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
            inputRef.current.value = 0;
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimerCount;
