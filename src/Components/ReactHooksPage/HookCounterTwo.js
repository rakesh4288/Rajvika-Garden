import React from "react";
import { useState } from "react";

function HookCounterTwo(){
    const initialValue = 0;
    const [count, setState] = useState(initialValue);
    const increment = ()=>{
        setState(
            count + 1 
        )
    }

    const decrement = ()=>{
        // setState(
        //     count - 1
        // )
        setState( prevState=>prevState + 1)
    }

    const reset = (initialValue)=>{
        // setState(
        //     count = initialValue
        // )
        setState( prevState=>prevState + 1)
    }

    const incrementByFive = ()=>{
        for(let i=0; i<5; i++ ){
            //setState(count + 1)
            setState( prevState=>prevState + 1)
        }
    }


    return(
        <>
            Count: {count} &nbsp;&nbsp;
            <button className="btn btn-dark btn-sm" onClick={()=>setState(initialValue)}>Reset</button> &nbsp;
            <button className="btn btn-info btn-sm" onClick={increment}>Increment</button> &nbsp;
            <button className="btn btn-success btn-sm" onClick={decrement}>Decrement</button> &nbsp;
            <button className="btn btn-success btn-sm" onClick={incrementByFive}>Increment by 5</button> &nbsp;
        </>
    )
}

export default HookCounterTwo;