import React from "react";

class ClickCounterONE extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    incrementCount = () =>{
        this.setState({
            count : this.state.count + 1
        })

        console.log('Counter ', this.state.count);
    }

    render(){
        return(
            <div>
                <button onClick={this.incrementCount} className="btn btn-outline-primary btn-sm"> Click {this.state.count} Times </button>
            </div>
        )
    }
}

// class ClickCounter extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }

//     incrementCount = () =>{
//         this.setState(prevState =>{
//             return {count : prevState.count + 1}
//         })
//     }
//     render(){
//         const {count} = this.state
//         return(
//             <React.Fragment>
//                 <button onClick={this.incrementCount} className="btn btn-outline-primary btn-sm"> Click {count} Times </button>
//             </React.Fragment>
//         )
//     }
// }

export default ClickCounterONE;