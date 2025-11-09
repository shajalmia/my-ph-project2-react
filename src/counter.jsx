import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);

    const addCount=()=>{
        const newCount=count+1;
        setCount(newCount);
    }
    return(
        <div className="card1">
            <h3>Count:{count}</h3>
            <button onClick={addCount}>Add</button>
        </div>
    )
}