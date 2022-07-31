import React, { useState } from 'react';
import RgbOutput from "./components/RgbOutput";

function App() {
  const [input, setInput] = useState('');

  return (
    <div className="wrapper">
      <input className="inputHex" type="text" onChange={evt => setInput(evt.target.value)}></input>
      <RgbOutput input={input} />
    </div>
  );
}

export default App;
