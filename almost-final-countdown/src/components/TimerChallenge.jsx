import { useState, useRef } from "react";
import { pluralize } from "../utils/stringUtils";
import ResultModal from "./ResultModal";

const TICK_INTERVAL = 10;

export default function TimerChallenge({ title, targetTime }) {
  const targetTimeInMillis = targetTime * 1000;

  const timerRef = useRef();
  const dialogRef = useRef();
  const [remainingTime, setRemainingTime] = useState(targetTimeInMillis);

  const timerActive = remainingTime > 0 && remainingTime < targetTimeInMillis;

  if (remainingTime <= 0) {
    clearInterval(timerRef.current);
    dialogRef.current?.open();
  }

  function reset() {
    setRemainingTime(targetTimeInMillis);
  }

  function startTimer() {
    timerRef.current = setInterval(
      () => setRemainingTime((prevTime) => prevTime - TICK_INTERVAL),
      TICK_INTERVAL,
    );
  }

  function stopTimer() {
    dialogRef.current?.open();
    clearInterval(timerRef.current);
  }

  return (
    <>
      <ResultModal
        ref={dialogRef}
        targetTime={targetTime}
        remainingTime={remainingTime}
        onReset={reset}
      />
      <article className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} {pluralize("second", targetTime)}
        </p>
        <p>
          <button onClick={timerActive ? stopTimer : startTimer}>
            {timerActive ? "Stop" : "Start"} Timer
          </button>
        </p>
        <p className={timerActive ? "active" : undefined}>
          {timerActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </article>
    </>
  );
}
