import React, {Component} from "react";

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message : 'Welcome Visitor happy to see you !'
            //for binding this state we need to sue {{this.state.message}}
        }
    }

    changeMsg(){
        //alert('inside changeMsg');
        //this.state.message = "Thank you for subscribing us !"
        this.setState({
            message: "Thank you for subscribing us !"
        })
    }
    render(){
        return (
            <div className="welcomeBox">
                <h4>{this.state.message}</h4>
                <button onClick = {() =>this.changeMsg() }>Subscribe </button>
            </div>
        )
    }
}

export default Message