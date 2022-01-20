import axios from "axios";
import { useEffect, useState } from "react";

function ReqresGetHTTP(){
    const [data, setdata] = useState([]);
    useEffect(()=>{
        axios.get("https://reqres.in/api/users")
        .then(
            response =>{
                console.log('response =', response.data.data);
                setdata(response.data.data);
            }
        )
        .catch(
            error =>{
                console.log("Error while fetching API = ", error);
            }
        );
    },[])

    const showArray = data.map((data, index)=>{
        return(
            <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>
                    <img src={data.avatar} alt={data.first_name} className="img-fluid" />
                </td>
            </tr>
        )
    });

    return(
        <div>
            <h5>Jason Placeholder Sample Get Request </h5>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Profile Pic</th>
                    </tr>
                </thead>
                <tbody>
                    {showArray}
                </tbody>
            </table>
        </div>
    )
}

export default ReqresGetHTTP;