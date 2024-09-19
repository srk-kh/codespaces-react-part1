import { useState } from "react";
export default function Counter() {
    const [count,setCount]=useState(0);
    const [value,setValue]=useState("Type here!");
    return (<>
    <input type="text"
    value = {value}
    onChange={(e) => {setValue(e.target.value)}}
    />
    <h3>You type {value.length} chars</h3>
    <button onClick={()=>setCount(count+1)}>Clicke Me!</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    <p>You clicked {count} times</p>
    </>);
}