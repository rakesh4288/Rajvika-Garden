import React from "react";
import FakeGetHTTP from './FakeGetHTTP';
import FakePostHTTP from './FakePostHTTP';
import GetDataById from './GetDataById';
import GetDataByButtonClick from './GetDataByButtonClick';
import Covid19API from './Covid19API';
import Covid19 from '../../Assets/images/covid19.jpg';
import FakeRandomUserAPI from './FakeRandomUserAPI';

class MainHTTP extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="ReactHTTP"> 
                <section className="pageHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="pull-left">
                                    <h1> React HTTP <i className="fa fa-american-sign-language-interpreting" aria-hidden="true"></i> </h1>
                                </div>

                                <div className="pull-right">
                                    
                                </div>
                    
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <h3>HTTP Get Request <i className="fa fa-angle-double-right" aria-hidden="true"></i></h3>
                                <h6>Note: We are using axios for making the HTTP calls and axios is Promise based approach</h6>
                                <Covid19API></Covid19API>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <img src={Covid19} alt="covid" className="img-fluid" /> <br/>
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/NEYrSUM4Umw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                <hr/>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <h3>HTTP Post Request <i className="fa fa-angle-double-right" aria-hidden="true"></i></h3>
                                <FakePostHTTP></FakePostHTTP>
                            </div>

                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                                <div>
                                    <h5>Search API data by its ID:</h5>
                                    <GetDataById></GetDataById>
                                </div>

                                <div className="alert alert-info">
                                    <h5>Search API data by Button Click</h5>
                                    <GetDataByButtonClick></GetDataByButtonClick>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <h3>Fake Random User Details: </h3>
                            </div>
                        </div>

                        <div className="FakeRandomUser">
                            <FakeRandomUserAPI></FakeRandomUserAPI>
                        </div>
                    </div>
                </section>

                <hr/>
                
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <FakeGetHTTP></FakeGetHTTP>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default MainHTTP;