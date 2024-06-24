// Two.js
import React, { useState } from 'react';
import './two.css';

function Two() {
  const [count, setCount] = useState(0);

  return (
    <div className="Two">
      <button onClick={() => setCount(count + 10)}>increment * 10</button>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <span> {count} </span>
      <button onClick={() => (count > 0) && setCount(count - 1)}>decrement</button>
      <button onClick={() => (count > 10) && setCount(count - 10)}>decrement * 10</button>
      <br/>
      <button className="reset" onClick={() => setCount(0)}>RESET VALUE</button>
    </div>
  )
}

export default Two;