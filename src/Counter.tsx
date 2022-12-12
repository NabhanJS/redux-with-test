import React, {useState} from 'react'

const Counter = () => {
    const [ count, setCount ] = useState(0);

  return (
    <div>
        <p>Count: {count}</p>
        <button style={{padding: "10px"}} onClick={() => setCount(count+1)}> Increase by 1</button>
        <button style={{padding: "10px"}} onClick={() => setCount(count-1)}> Decrease by 1</button>
    </div>
  )
}

export default Counter

