import React from "react";
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';
import EditPlayer from './EditPlayer';
import {Switch,Route, Link } from "react-router-dom";
import AppImages from "../../Assets/images";

function CricketDashboard(){
    return(
        <div className="CricketDashbaord">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="pull-left">
                                <h1> Cricket Dashboard </h1>
                            </div>

                            <div className="pull-right">
                                <div className="text-white">json-server --watch db.json</div>
                                <Link className="btn btn-warning btn-sm" to="/cricket-dashboard/add-new-player"> <i className="fa fa-plus text-danger" aria-hidden="true"></i> New Player</Link>
                                &nbsp;&nbsp;
                                <Link className="btn btn-warning btn-sm" to="/cricket-dashboard/view-player-list">View All Player</Link>
                            </div>
                
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* <section id="add-new-player">
                <Switch>
                    <Route path="/cricket-dashboard/add-new-player" exact component={AddPlayer} />
                </Switch>
            </section> */}

            {/* <section id="edit-player">
                <Switch>
                    <Route path="/cricket-dashboard/edit-player/:id" exact component={EditPlayer} />
                </Switch>
            </section> */}

            {/* <section id="player-list">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <Switch>
                                <Route path="/cricket-dashboard/view-player-list" exact component={PlayerList} />                           
                            </Switch>
                        </div>
                    </div>
                </div>
            </section> */}
            
            <section id="photo-gallery">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={AppImages.WorldCup_2011_2} className="d-block w-100 rounded" alt={AppImages.WorldCup_2011_2} />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5 className="text-warning">ICC World Champions Winner - 2011</h5>
                                            <p>Some representative placeholder content for the first slide.</p>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <img src={AppImages.WorldCup_2013_1} className="d-block w-100 rounded" alt={AppImages.WorldCup_2013_1} />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5 className="text-warning">ICC World Champions Winner - 2013</h5>
                                            <p>Some representative placeholder content for the first slide.</p>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <img src={AppImages.WorldCup_2007_1} className="d-block w-100 rounded" alt={AppImages.WorldCup_2007_1} />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5 className="text-warning">ICC World Champions Winner - 2007</h5>
                                            <p>Some representative placeholder content for the first slide.</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <h5>Indian Caption - MS Dhoni with Trophy</h5>
                            <img src={AppImages.Dhoni_2013} className="img-fluid rounded" alt={AppImages.Dhoni_2013} />
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <img src={AppImages.WorldCup_2011_3} className="img-fluid rounded" alt={AppImages.WorldCup_2011_3} />
                            <p>World Cup 2011 Moments</p>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <img src={AppImages.WorldCup_2013_2} className="img-fluid rounded" alt={AppImages.WorldCup_2013_2} />
                            <p>Team Celebrating ICC Champions Trpphy 2013</p>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <img src={AppImages.WorldCup_2007_2} className="img-fluid rounded" alt={AppImages.WorldCup_2007_2} />
                            <p>Young Team India wins 2007 Debut T20 WOrld Cup</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CricketDashboard;