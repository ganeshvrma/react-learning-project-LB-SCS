import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const decrementHandler = () => {
    setCount(count - 1);
  };
  const incrementHandler = () => {
    setCount(count + 1);
  };
  const resetHandler = () => {
    setCount(0);
  };
  return (
    <div className=" w-[100vw] h-[100vh]  bg-blue-200 flex  justify-center items-center flex-col gap-10">
      <div
         className="font-semibold text-2xl "> Increment & Decrement
        
      </div>
      <div className="flex  rounded-sm justify-center gap-12 py-4 text-[25px] bg-white ">
        <button className=" border-r-2 text-center border-[#bfbfbf] w-20 text-5xl" onClick={decrementHandler}>
          -
        </button>
        <div className="font-semibold gap-12 text-5xl">{count}</div>
        <button className="border-l-2 border-[#bfbfbf] text-center w-20 text-5xl" onClick={incrementHandler}>
          +
        </button>
      </div>
      <div>
        <button className="bg-sky-100  px-4 py-3 rounded-full" onClick={resetHandler}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
