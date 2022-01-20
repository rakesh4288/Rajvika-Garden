import React from "react";
import { useEffect, useState } from "react";

function UseEffectByClass_2(){
    const [count, setCount] = useState(0);
    const [myName, setMyName] = useState('')
    const changeCount = ()=>{
        //console.log('inside changeCount');
        setCount(count + 1)
    }

    useEffect(()=>{
        //console.log('inside useEffect');
        document.title = `You just clicked ${count}`
    },[count]);

    // const changeNameValue = (event)=>{
    //     setMyName({myName : event.target.value})
    // }
    return(
        <React.Fragment>
            <input 
                type="text" 
                className="form-control" 
                value={myName} 
                onChange={(e)=>setMyName(e.target.value)}
            /> 
            <br/>
            <button className="btn btn-success btn-sm" onClick={changeCount}>Condition Rendering</button>
            <p>Count: {count}</p>
        </React.Fragment>
    )
}

export default UseEffectByClass_2;