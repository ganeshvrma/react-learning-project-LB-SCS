import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const decreHandler = () => {
    setCount(count - 1);
  };
  const increHandler = () => {
    setCount(count + 1);
  };
  const resetHandler = () => {
    setCount(0);
  };
  return (
    <div className=" w-[100vw] h-[100vh] flex  justify-center items-center flex-col gap-10">
      <div>
        <h1 className="font-semibold  "> Increment & Decrement</h1>
        
      </div>
      <div className="flex justify-center gap-12 ">
        <button className=" border-l-2 text-center w-20 text-5xl" onClick={decreHandler}>
          -
        </button>
        <div className="font-bold gap-12 text-5xl">{count}</div>
        <button className="border-l-2 text-center w-20 text-5xl" onClick={increHandler}>
          +
        </button>
      </div>
      <div>
        <button className="bg-yellow-100 px-4 py-3" onClick={resetHandler}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
