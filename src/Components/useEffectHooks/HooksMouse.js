import React from "react";
import { useState,  useEffect} from "react";

function HooksMouse(){
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const getMousePosition = (e)=>{
        //console.log("Mouse Event");
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(()=>{
        //console.log('useEffect called');
        window.addEventListener('mousemove', getMousePosition);

        return() => {
            window.removeEventListener('mousemove', getMousePosition);
        }
    },[]);
    return(
        <>
            <h5> Mouse event based functional component:</h5>
            <span className="badge bg-success">X Position: {x}</span> <br/>
            <span className="badge bg-warning text-dark">Y Position: {y}</span>
        </>
    )
}

export default HooksMouse;