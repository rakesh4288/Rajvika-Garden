import React from "react";
import { useState, useEffect } from "react";
import {GetMoviesListAPI} from './MoviesAPI';
import {Link} from 'react-router-dom';

function MoviesList(){
    const [moviesList, setMoviesList] = useState([]);

    useEffect(()=>{
        ShowMoviesList();
    },[]);
    
    const ShowMoviesList = async()=>{
        const Response = await GetMoviesListAPI();
        //console.log("Movies List = ", Response.data);
        setMoviesList(Response.data);
    }

    // https://www.imdb.com/search/title/?groups=top_250&sort=user_rating
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h3>Movies Information</h3>
                </div>
            </div>

            <div className="row">
                {moviesList.map(movies=>(
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12" key={movies.id}>
                        <div className="moviesCard"> 
                            <div className="card">
                                <img className="card-img-top" src={movies.Poster} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{movies.MoviesName}</h5> 
                                    <p className="card-text">IMDb Rating : <b className="text-success">{movies.IMDbRating}</b></p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Release Date : <b>{movies.ReleaseDate}</b></li>
                                    <li className="list-group-item">Director: <b>{movies.Director}</b> </li>
                                    <li className="list-group-item">Box Office: <b>{movies.BoxOffice}</b> </li>
                                    <li className="list-group-item">Budget: <b>{movies.Budget}</b> </li>
                                </ul>
                                <div className="card-body">
                                    <Link to={`/movies-dashboard/movies-details/${movies.id}`} className="btn btn-outline-success btn-sm">
                                        Read More &nbsp;
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MoviesList;