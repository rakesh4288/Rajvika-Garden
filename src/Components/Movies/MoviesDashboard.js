import React from 'react';
import MoviesList from './MoviesList';
import './MoviesStyle.css';
import  {Switch, Route} from 'react-router-dom';
import MoviesDetails from './MoviesDetails';

function MoviesDashboard(){
    return(
        <div id="movies-page">
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

            <section className="movies-list">
                <MoviesList></MoviesList>
            </section>

            {/* <section className="movies-details">
                <Switch>
                    <Route path="/movies-dashboard/movies-details/:id" exact component={MoviesDetails} />
                </Switch>
            </section> */}
        </div>
    )
}

export default MoviesDashboard;