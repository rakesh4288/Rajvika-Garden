import React from "react";
import ReactDom from "react-dom";

const portalID = document.getElementById('portals-root');
function ModalPopUp (){
    return ReactDom.createPortal(
        <marquee> 
            <h5>This statement is coming from React Portals</h5>
        </marquee>,
        portalID
    )
}

// const portalID = document.getElementById('portals-root');
// class ModalPopUp extends React.Component{
//     render(){
//         return ReactDom.createPortal(
//             <div>
//                 <h1>Hello Chinkara Bhal Bharat</h1>
//             </div>,
//             portalID
//         )
//     }
// }

export default ModalPopUp;