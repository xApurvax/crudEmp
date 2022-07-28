import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux/es/exports";
import { increment, decrement ,reset, incrementByAmount } from "./counterSlice";


const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

  return (
    <section className='flex flex-col gap-[25px] justify-center items-center h-[200px] w-[200px] '>
        <p className='text-[25px] font-[600] '>{count}</p>
        <div className='flex gap-[20px] '>
            <button className='px-[20px] bg-green-400 border-[1px] border-solid border-black' onClick={() => dispatch(increment())}>+</button>
            <button className='px-[4px] bg-blue-400 border-[1px] border-solid border-black'  onClick={resetAll}>Reset</button>
            <button className='px-[20px] bg-red-400 border-[1px] border-solid border-black'  onClick={() => dispatch(decrement())}>-</button>
        </div>
        <input className='border-[1px] border-solid border-[#E6E6E6] ' type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value) } />
        <div>
            <button className='px-[4px] bg-orange-400 border-[1px] border-solid border-black'  onClick={() => dispatch(incrementByAmount(addValue))}>Add</button>
        </div>
    </section>
    
  )
}

export default Counter