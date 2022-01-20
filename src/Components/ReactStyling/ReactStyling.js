import React from "react";
import './ReactStyling.css';

function ReactStyling(props){
    let colorStatus = props.status ? 'primaryColor' : 'text-danger'
    return(
        <>
            <h4 className={colorStatus}>This is Sample Text !</h4>
        </>
    )
}

export default ReactStyling;