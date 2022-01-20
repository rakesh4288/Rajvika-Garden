import React from "react";

function ChildComponent(props){
    return(
        <>
            <button onClick={props.greetHandler} className='btn btn-danger btn-sm'>Click to know about your Parent</button>
            
            <ul>
                <li>Now we can call the props as a method also in child component.</li>
                <li>We can call the parent methods from child component using Props</li>
            </ul>

            {/* <button onClick={()=>props.childFunction('This message is coming from Child Component !!')} className="btn btn-info btn-sm">Now this time with ES6 Arrow function</button> */}
        </>
    )
}

export default ChildComponent;