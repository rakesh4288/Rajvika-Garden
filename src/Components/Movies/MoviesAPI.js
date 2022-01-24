import axios from "axios";

const url = "http://localhost:4288/Movies";

export const GetMoviesListAPI = async()=>{
    return await axios.get(url);
}

export const GetMoviesListAPIById = async(id)=>{
    return await axios.get(`${url}/${id}`);
}