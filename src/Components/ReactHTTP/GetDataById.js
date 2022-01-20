import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function GetDataById(){
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            //console.log('Response = ', res.data);
            setPost(res.data);
        })
        .catch(error=>{
            console.log('Error = ', error);
        });
    },[id])

    const changeHandler = (e)=>{
        console.log("Inside changeHandler =", e.target.value);
        setId(e.target.value);
    }

    return(
        <>
            Get Data By Id:
            <input type="text" value={id} onChange={changeHandler} /> <br/><br/>
            
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Id</th>
                        <td>{post.id}</td>
                    </tr>

                    <tr>
                        <th>Title</th>
                        <td>{post.title}</td>
                    </tr>

                    <tr>
                        <th>Body</th>
                        <td>{post.body}</td>
                    </tr>
                </tbody>
            </table>
            
        </>
    )
}

export default GetDataById;