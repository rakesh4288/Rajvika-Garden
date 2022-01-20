import React from "react";

class Input extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            label: this.props.label,
            input : this.props.inputType
        }
    }
    render(){
        return(
            <>
                <div>
                    <label> {this.state.label} </label>
                    <input type={this.state.input} />
                </div>
            </>
        )
    }
}

export default Input