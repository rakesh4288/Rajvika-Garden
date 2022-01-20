import React from "react";
class LifeCycleB extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstLadyName : 'Lalita Sahu'
        }
        console.log("LifeCycle A (1) : Constructor()");
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycle B (2) : getDerivedStateFromProps()');
        return null;
    }

    componentDidMount(){
        console.log('LifeCycle B (4) : componentDidMount()'); 
    }

    render(){
        console.log("LifeCycle B (3) : render()");
        return(
            <> </>
        )
    }
}

export default LifeCycleB