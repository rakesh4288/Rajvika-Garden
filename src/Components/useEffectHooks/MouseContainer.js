import React from "react";
import { useState } from "react";
import HooksMouse from "./HooksMouse";

function MouseContainer(){
    const [disyaply, setDisplay] = useState(true);
    const toggleDisplay = ()=>{
        console.log("inside toggleDisplay");
        setDisplay(!disyaply);
    }
    return(
        <>
            <button className="btn btn-dark btn-sm" onClick={toggleDisplay}> Display </button>
            {disyaply && <HooksMouse></HooksMouse>}
        </>
    )
}

export default MouseContainer;