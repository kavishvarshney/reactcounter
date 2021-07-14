import React from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {
  let [score, setScore] = useState(0);
  return (
    <div>
      <h1>Here is the Counter</h1>
      <h4>The value of Score is {score}</h4>
      <button onClick={() => (score === 25 ? '' : setScore(score + 1))}>
        Increment
      </button>
      <button onClick={() => (score > 0 ? setScore(score - 1) : '')}>
        Decrement
      </button>
      <button
        onClick={() => {
          setScore(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
