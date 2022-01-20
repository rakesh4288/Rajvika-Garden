import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, {Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    // increment(){
    //     this.setState({
    //         count : this.state.count + 1
    //     },
    //     () =>{
    //         console.log("Callback count =", this.state.count);
    //     }
    //     )
    //     console.log("Inside the Class = ", this.state.count)
    // }

    // decrement(){
    //     this.setState({
    //         count : this.state.count - 1
    //     })
    // }

    increment = ()=>{
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement = ()=>{
        this.setState({
            count : this.state.count - 1
        })
    }

    render(){
        return (
            <div className="welcomeBox">
                <h1>Set States with counter </h1>
                <h4>Counter : {this.state.count} </h4>
                <button className="btn btn-info btn-sm" onClick={ () => this.increment() }>Counter</button>
                &nbsp;
                <button className="btn btn-info btn-sm" onClick={ ()=> this.decrement() }>Decrement</button>
            </div>
        )
    }
}

export default Counter;