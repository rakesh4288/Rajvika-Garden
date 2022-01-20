import axios from "axios";
const url ="http://localhost:4288/cricket";

export const GetPlayerList = async()=>{
    return await axios.get(url);
}

// export const GetPlayerList = async(id)=>{
//     id = id || '';
//     return await axios.get(`${url}/${id}`);
// }

export const AddPlayerAPI = async(user) =>{
    return await axios.post(url,user);
}

export const GetPlayerDataById = async(id)=>{
    return await axios.get(`${url}/${id}`);
}

export const EditPlayerAPI = async(id,user)=>{
    return await axios.put(`${url}/${id}`,user);
}

export const DeletePlayerAPI = async(id) =>{
    return await axios.delete(`${url}/${id}`);
}

