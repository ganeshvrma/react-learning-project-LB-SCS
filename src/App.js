
import React, { useState } from'react';
import './App.css';

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
    <div className="flex ">
     <div>
     <h3> increment & decrement</h3>
     <style>{`.text-red-500 { color: red; }`}</style>  
     </div>
    <div className='flex justify-center items-center'>
   < button className='bg-yellow-100 px-4 py-3' onClick={decreHandler}>
   -
   </button>
   <div>
{count}
   </div>
 <button className='bg-yellow-100 px-4 py-3' onClick={increHandler}>+</button>
    </div>
     <div>
      <button className='bg-yellow-100 px-4 py-3' onClick={resetHandler}>
        Reset
      </button>
     </div>
     
    </div>
  );
}

export default App;
