import React, {Component} from "react";

class Welcome extends Component{
    render(){
        return (
            <div>
                <p className="yellowColor">Note: When you are dealing with props using class then you must need to use this keyword for accessing those attributes from apps </p>
                <div className="bottom">First Name <b>{this.props.firstName}</b> and Last Name <b>{this.props.lastName}</b></div>
            </div>
        )
    }
}

export default Welcome