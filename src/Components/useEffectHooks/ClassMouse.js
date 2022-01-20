import React from "react";

class ClassMouse extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePosition = (e)=>{
        this.setState({
            x : e.clientX,
            y: e.clientY
        });
    }

    componentDidMount(){
        window.addEventListener('mousemove', this.logMousePosition);
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove', this.logMousePosition);
    }
    render(){
        return(
            <>
                <h5>Class Mouse Component:</h5>
                <p>Move you mouse you will get the mouse cordination:</p>
                <span className="badge bg-success">X Position: {this.state.x}</span> <br/>
                <span className="badge bg-warning text-dark">Y Position: {this.state.y}</span>
            </>
        )
    }
}

export default ClassMouse;