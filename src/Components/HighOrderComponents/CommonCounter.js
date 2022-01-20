import React from "react";
//HOC needs a two parameter for execution

const CommonCounter = (WrapperComponent) =>{
    class CommonCounter extends React.Component{
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
        }

        render(){
            return(
                <WrapperComponent count = {this.state.count} incrementCount = {this.incrementCount} />
            )
        }
    }

    return CommonCounter
}

export default CommonCounter