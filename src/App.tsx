import React, { useState } from "react";
import Counter from "./components/Counter";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <div>{count} </div>
      <Counter />
      <button className="" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default App;
