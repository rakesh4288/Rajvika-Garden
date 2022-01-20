import React from "react";

// function Greeting(){
//     return <h1>Hello Raka </h1>
// }

const Greeting = (props) => {
    //console.log(props)
    return (
        <div>
            <h2>First Name : {props.firstName} </h2>
            <h3>City: {props.city}</h3>
            {props.children}
            <hr/>
        </div>
    )
}


export default Greeting