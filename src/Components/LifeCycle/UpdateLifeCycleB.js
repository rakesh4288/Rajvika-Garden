import React from "react";

class UpdatingLifeCycleB extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            myName : 'Mr. Rakesh Shah'
        }
        console.log('Updating LifeCycle B (1) : Constructor()');
    }

    static getDerivedStateFromProps(props, state){
        console.log('Updating LifeCycle B (2) : getDerivedStateFromProps()');
        return null
    }

    componentDidMount(){
        console.log('Updating LifeCycle B (4) : componentDidMount()');
    }

    shouldComponentUpdate(){
        console.log('Updating LifeCycle B (5) : shouldComponentUpdate()');
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log('Updating LifeCycle B (6) : getSnapshotBeforeUpdate()');
        return null;
    }

    componentDidUpdate(){
        console.log('Updating LifeCycle B (7) : componentDidUpdate()');
    }

    render(){
        console.log('Updating LifeCycle B (3) : render()');
        return(
            <>
            </>
        )
    }
}

export default UpdatingLifeCycleB;