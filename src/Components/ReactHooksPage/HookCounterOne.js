import React from "react";
import { useState } from "react";

function HookCounterOne(){
    const [count, setState] = useState(0);
    const addition = ()=>{
        setState(count + 1)
    }
    return(
        <React.Fragment>
            <button className="btn btn-primary btn-sm" onClick={addition}>
                Counter from Function Component {count}
            </button>
        </React.Fragment>
    )
}

export default HookCounterOne;