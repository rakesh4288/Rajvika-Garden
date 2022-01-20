import React, { Component } from "react";

class  Destructing extends Component{
    render(){
        const {firstName,lastName} = this.props
        return(
            <>
                <div className="alert alert-info">
                    <h4>Destructing</h4>
                    <ul>
                        <li>Destructuring is a ES6 features that make possible to unpack the values from array or properties from array to separate variable</li>
                        <li>In React Destructuring allows for more code readability in proper manner</li>
                    </ul>

                    <hr className="hr-strong"/>
                    There is Two ways for Destructuring the props in React:
                    <ul>
                        <li>By using Functional Component we can Destructure the props. In this case we need to pass the props via parameter</li>
                        <li>Another way is that we can use Class Component - By using this process we can use the render method</li>
                    </ul>
                    <h4>Hello Mr. {firstName} {lastName}</h4>
                </div>
            </>
        )
    }
}

/*
const Destructing = ({firstName, lastName}) =>{
    //console.log(props);
    return(
        <div className="boderBox">
            <h4>Destructing</h4>
            <ul>
                <li>Destructuring is a ES6 features that make possible to unpack the values from array or properties from array to separate variable</li>
                <li>In React Destructuring allows to code readability</li>
            </ul>

            <hr/>
            There is Two way Destructuring the props in React:
            <ul>
                <li>By using Functional Component we can Destructure the props</li>
            </ul>
            
            <h4>Hello {firstName} {lastName}</h4>
        </div>
    )
}
*/

export default Destructing