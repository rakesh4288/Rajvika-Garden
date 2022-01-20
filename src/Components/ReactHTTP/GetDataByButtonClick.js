import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function GetDataByButtonClick(){
    const [id, setId] = useState(1);
    const [post, setPost] = useState({});
    const [idFormButtonClick, setIdFormButtonClick] = useState(1);

    const changeValue = (e)=>{
        setId(e.target.value);
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFormButtonClick}`)
        .then(res=>{
            //console.log("res = ", res);
            setPost(res.data)
        })
        .catch(error=>{
            //console.log("Error = ", error);
        })
    }, [idFormButtonClick]);

    const fetchData = ()=>{
        setIdFormButtonClick(id);
    }

    return(
        <>
            Enter Id: <input type="text" value={id} onChange={changeValue} />
            <button className="btn btn-dark btn-sm" onClick={fetchData}>Fetch</button>
            <br/>
            <table className="table table-bordered table-stripped">
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

export default GetDataByButtonClick;