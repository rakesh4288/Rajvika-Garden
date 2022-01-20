import React from "react";
import CommonCounter from './CommonCounter';

class ClickCounterTWO extends React.Component{
    render(){
        const { count, incrementCount } = this.props;
        return(
            <div>
                <button onClick={incrementCount} className="btn btn-outline-primary btn-sm">  Click {count} Times </button>
            </div>
        )
    }
}

export default CommonCounter(ClickCounterTWO);