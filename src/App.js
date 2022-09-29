import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import Scrambler from "scrambling-text";

function App() {
  const [text, setText] = useState("- Aulia Ramadhan -");
  const scramblerRef = useRef(new Scrambler());

  useEffect(() => {
    scramblerRef.current.scramble(text, setText);
  }, []);

  return (
    <div className="box">
      <h1>{text}</h1>
    </div>
  );
}

export default App;
