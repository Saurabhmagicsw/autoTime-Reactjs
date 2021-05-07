import { useState } from "react";
import "./styles.css";

export default function App() {
  const date = new Date().toLocaleString();
  const [curTime, getTime] = useState(date);

  setInterval(() => {
    const newDate = new Date().toLocaleString();
    getTime(newDate);
  }, 1000);

  return (
    <div className="App">
      <h1>{curTime}</h1>
      <button>-clickToGetTime-</button>
    </div>
  );
}
