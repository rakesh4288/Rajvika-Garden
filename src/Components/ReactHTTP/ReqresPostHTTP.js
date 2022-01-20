import React from "react";
import axios from 'axios';

class ReqresPostHTTP extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            "name": "Rakesh Shah",
            "job": "Software Engineer"
        }
    }

    submitForm = (e)=>{
        console.log('inside submitForm');
        const url = "https://reqres.in/api/users";
        axios.post(url,this.state)
        .then(
            res =>{
                console.log("Response = ", res);
            }
        )
        .catch(
            error => {
                console.log("Error = ", error);
            }
        )
    }

    render(){
        return(
            <div className="thumbnail">
                <h5>Reqres Post HTTP</h5>
                <button className="btn btn-outline-primary btn-sm" onClick={this.submitForm}>Submit</button>
            </div>
        )
    }
}

export default ReqresPostHTTP;