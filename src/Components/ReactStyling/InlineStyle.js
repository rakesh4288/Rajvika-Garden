import React from "react";

function InlineStyle (){
    let innerCSS = {
        fontSize: '20px',
        color:'crimson'
    }
    return(
        <>
            <div style={innerCSS}>Hello Users ! I am inline statement</div>
        </>
    )
}

export default InlineStyle;