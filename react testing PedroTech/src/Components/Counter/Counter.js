import { useState } from "react";

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const restart = () => setCount(0);
  const switchSign = () => setCount((c) => c * -1);
  return (
    <>
      <h1>
        Count: <span data-testid="count">{count}</span>
      </h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchSign}>Switch</button>
      </div>
    </>
  );
}

export default Counter;
