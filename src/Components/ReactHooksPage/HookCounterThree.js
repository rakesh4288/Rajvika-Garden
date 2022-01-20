import React from "react";
import { useState } from "react";

function HookCounterThree(){
    const [name,setName] = useState({
        firstName : '',
        lastName : ''
    })

    const handleFirstValue = (e)=>{
        setName({
            ...name, firstName : e.target.value
        })
    }

    const handleLastValue = (e)=>{
        setName({
            ...name, lastName : e.target.value
        })
    }

    return(
        <form className="alert alert-info">
            <div className="form-group">
                <label>Enter First Name:</label>
                <input type="text" 
                    className="form-control" 
                    value={name.firstName}
                    name="fistName"
                    onChange={handleFirstValue}
                />
            </div>

            <div className="form-group">
                <label>Enter Last Name:</label>
                <input type="text" 
                    className="form-control" 
                    value={name.lastName}
                    onChange={handleLastValue}
                />
            </div>

            <h6>Your First Name: {name.firstName}</h6>
            <h6>Your Last Name: {name.lastName}</h6>
            <h6 className="text-danger">Your Jason:
                <pre>{JSON.stringify(name)}</pre>
            </h6>
        </form>
    )
}

export default HookCounterThree;