import React from "react";
import { UserContext } from './useContextHooks';

function ComponentC(){
    return(
        <>
            <UserContext.Consumer>
                {
                    user => {
                        return <div>Context value is: {user}</div>
                    }
                }
            </UserContext.Consumer>
        </>
    )
}

export default ComponentC;