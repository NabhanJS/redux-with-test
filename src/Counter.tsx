import React, {useState} from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { increaseBy1, decreaseBy1 } from './store/counterSlice';

const Counter = () => {
    // const [ count, setCount ] = useState(0);
    const dispatch = useDispatch();
    const count = useSelector((state: any) => state.counter.count);

  return (
    <div>
        <h2>Count: {count}</h2>
        {/* <button style={{padding: "10px"}} onClick={() => setCount(count + 1)}> Increase by 1</button> */}
        {/* <button style={{padding: "10px"}} onClick={() => setCount(count - 1)}> Decrease by 1</button> */}

        <button style={{padding: "10px"}} onClick={() => dispatch(increaseBy1())}>Increase by 1</button>
        <button style={{padding: "10px"}} onClick={() => dispatch(decreaseBy1())}>Decrease by 1</button>
    </div>
  )
}

export default Counter

