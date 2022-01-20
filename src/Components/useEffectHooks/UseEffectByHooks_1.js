import React, { useEffect } from "react";
import { useState } from "react";

function UseEffectByHooks(){
    const [count, setCount] = useState(0);

    const clickCounter = ()=>{
        setCount(count + 1);
    }

    useEffect(()=>{
        document.title = `You clicked ${count} times`
    });

    return(
        <>
            <button className="btn btn-outline-danger btn-sm" onClick={clickCounter}>Click {count} Times</button>
        </>
    )
}

export default UseEffectByHooks;