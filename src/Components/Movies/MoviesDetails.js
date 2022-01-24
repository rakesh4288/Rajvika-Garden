import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {GetMoviesListAPIById} from './MoviesAPI';

function MoviesDetails(){
    const [moviesData, setMoviesData] = useState([]);
    const {id} = useParams();
    console.log("fetch id =", id);

    useEffect(()=>{
        //loadMoviesData();
        axios.get(`http://localhost:4288/Movies/${id}`)
        .then((res)=>{
            console.log("Movies Response = ", res.data);
            setMoviesData(res.data)
        })
        .catch(error=>{
            console.log("Error: ", error);
        })
    },[])

    // const loadMoviesData = async(id)=>{
    //    const response = await GetMoviesListAPIById(id);
    //    setMovieData(response);
    //    console.log("loadMoviesData = ", response);
    // }

    

    return(
        <div id="movies-details">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="pull-left">
                                <h1> Movies Dashboard </h1>
                            </div>

                            <div className="pull-right">
                                <div className="text-white">json-server --watch db.json</div>
                            </div>
                
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='movie-by-id'>
                <div className='container'>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h3>Movies: {moviesData.MoviesName} </h3>
                            <h6>Genre : {moviesData.Genre}</h6>
                            <h6>IMDb Rating : {moviesData.IMDbRating}</h6>
                            <h6>Director : {moviesData.Director}</h6>
                            <h6>Star Cast : {moviesData.StarCast}</h6>
                            <h6>Language : {moviesData.Language}</h6>
                            <h6>Budget : {moviesData.Budget}</h6>
                            <h6>Box Office Collection : {moviesData.BoxOffice}</h6>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <img src={moviesData.Poster} className='img-fluid' />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h5>Movie Trailer</h5>
                            {/* {moviesData.Trailer} */}
                            <iframe width='100%' height='500px' src={moviesData.Trailer} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MoviesDetails;