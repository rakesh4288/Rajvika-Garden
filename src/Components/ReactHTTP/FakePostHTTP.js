import React from "react";
import axios from "axios";

class FakePostHTTP extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userId : '',
            title : '',
            body : ''
        }
    }

    changeHandler = (event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    submitHandler = (event)=>{
        event.preventDefault();
        //console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response=>{
            console.log("Success = ", response);
        })
        .catch(error =>{
            console.log("Error = ", error);
        });
    }
    render(){
        const {userId, title, body} = this.state
        return(
            <form className="thumbnail" onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label>Enter user id</label>
                    <input type="text" className="form-control" name="userId" value={userId} onChange={this.changeHandler} />
                </div>

                <div className="form-group">
                    <label>Enter Title</label>
                    <input type="text" className="form-control" name="title" value={title} onChange={this.changeHandler} />
                </div>

                <div className="form-group">
                    <label>Enter Message</label>
                    <input type="text" className="form-control" name="body" value={body} onChange={this.changeHandler} />
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-success btn-sm">Submit</button>
                </div>
            </form>
        )
    }
}

export default FakePostHTTP;