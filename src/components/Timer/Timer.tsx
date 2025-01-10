import { useEffect, useRef, useState } from "react";
import { Button } from "../Button/Button";

const Timer = () => {
  const [time, setTime] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout>(null);
  const toggleTimer = () => {
    if (timerRef.current === null) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
        console.log(time);
      }, 10);
    } else {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsTimerActive((prevState) => !prevState);
  };
  const handleStopTimer = () => {
    if (timerRef.current !== null) clearTimeout(timerRef.current);
    timerRef.current = null;
    setTime(0);
    setIsTimerActive(false);
  };
  useEffect(() => {
    return () => {
      if (timerRef.current !== null) clearTimeout(timerRef.current);
    };
  }, []);
  const formatTime = (time: number): string => {
    const seconds = time / 1000;
    return seconds.toString();
  };
  return (
    <div>
      <h1>Таймер</h1>
      <p>Прошло секунд: {formatTime(time)}</p>
      <Button onClick={toggleTimer}>{isTimerActive ? "Пауза" : "Старт"}</Button>
      <Button onClick={handleStopTimer}>Стоп</Button>
    </div>
  );
};
export default Timer;
