import React from "react";
import CommonCounter from "./CommonCounter";

class HoverCounterTWO extends React.Component{

    render(){
        const { count, incrementCount } = this.props;
        return(
            <React.Fragment>
                <button onMouseOver={incrementCount} className="btn btn-outline-danger btn-sm"> Hover Me {count} Times
                </button>
            </React.Fragment>
        )
    }
}

export default CommonCounter(HoverCounterTWO);