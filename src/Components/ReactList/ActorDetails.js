import React from "react";

function ActorDetails({arrayValue}){
    return(
        <tr>
            <td>{arrayValue.id}</td>
            <td>{arrayValue.name}</td>
            <td>{arrayValue.movieName}</td>
            <td>{arrayValue.industry}</td>
        </tr>
    )
}

export default ActorDetails;