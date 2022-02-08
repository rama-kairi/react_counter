import { useEffect, useState } from "react";
import "./styles.css";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  // Reset Function
  const resetTimer = () => {
    setCount(0);
    setRunning(false);
  };

  // Incrementing the Count Inside useEffect
  useEffect(() => {
    if (running) {
      let interval = setInterval(() => setCount((count) => count + 1), 1000);
      // Clearing the Interval with Cleanup Function
      return () => clearInterval(interval);
    }
  }, [running]);

  return (
    <div className="App">
      <h1>Counter : {count}</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <Button
          color={!running ? "tomato" : "yellow"}
          text={!running ? "Start" : "Pause"}
          onClick={() => setRunning(!running)}
        />
        <Button color="green" text="Reset" onClick={resetTimer} />
      </div>
    </div>
  );
}
