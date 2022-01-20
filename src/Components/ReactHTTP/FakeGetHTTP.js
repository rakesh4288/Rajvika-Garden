import React from "react";
import axios from "axios";

class FakeGetHTTP extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fakeList : [],
            errorMsg : ""
        }
        //console.log("1 : constructor");
    }

    componentDidMount(){
        //console.log("2 : componentDidMount");
        //https://reqres.in/api/users
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
            //console.log("response =", response.data);
            this.setState({
                fakeList : response.data
            })
        })
        .catch(error => {
            //console.log("Error = ", error);
            this.setState({
                errorMsg : 'Not able to fetch the API'
            })
        });
    }

    render(){
        const {fakeList, errorMsg} = this.state;
        //console.log("fake List = ", fakeList);
        return(
            <div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        // <div key={fakeListData.id}> {fakeListData.title} </div>
                        fakeList.length>=1 ?
                        fakeList.map(fakeListData => 
                            <tr key={fakeListData.id}>
                                <td>{fakeListData.id}</td>
                                <td>{fakeListData.title}</td>
                                <td>{fakeListData.body}</td>
                            </tr>
                        ) :
                        null
                    }
                    </tbody>
                </table>

                {
                    errorMsg ? 
                    <h5 className="text-danger"> 
                        <i className="fa fa-times-circle" aria-hidden="true"></i> 
                         {errorMsg}
                    </h5> : null
                }
            </div>
        )
    }
}

export default FakeGetHTTP;