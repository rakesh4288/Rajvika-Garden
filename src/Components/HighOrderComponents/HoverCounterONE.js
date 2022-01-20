import React from "react";

class HoverCounterONE extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    incrementCount = ()=>{
        this.setState({
            count : this.state.count + 1
        })
    }

    render(){
        return(
            <React.Fragment>
                <button onMouseOver={this.incrementCount} className="btn btn-outline-danger btn-sm">Hover Me {this.state.count} Times</button>
            </React.Fragment>
        )
    }
}

export default HoverCounterONE;