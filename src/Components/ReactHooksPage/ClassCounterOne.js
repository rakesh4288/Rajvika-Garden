import React from "react";

class ClassCounterOne extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    increament = (e) =>{
        this.setState({
            count : this.state.count + 1
        })
    }

    render(){
        return(
            <React.Fragment>
                <button className="btn btn-danger btn-sm" onClick={this.increament}> Counter from Class Component {this.state.count} </button>
            </React.Fragment>
        )
    }
}

export default ClassCounterOne;