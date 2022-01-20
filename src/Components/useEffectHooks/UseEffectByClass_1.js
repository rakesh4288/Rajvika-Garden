import React from "react";

class UseEffectByClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    counter = ()=>{
        this.setState({
            count : this.state.count + 1
        })

        //console.log('inside counter= ', this.state.count);
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.count}  Times`;
    }

    componentDidUpdate(){
        document.title = `Clicked ${this.state.count}  Times`;
    }

    render(){
        return(
            <>
                <button className="btn btn-outline-primary btn-sm" onClick={this.counter}>Click { this.state.count } times</button>
            </>
        )
    }
}

export default UseEffectByClass;