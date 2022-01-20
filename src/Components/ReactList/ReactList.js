import React from "react";
import ActorList from "./ActorList";
import ListKeysImg from '../../Assets/images/list_keys.png'
import ReactStyling from "../ReactStyling/ReactStyling";
import InlineStyle from "../ReactStyling/InlineStyle";
import ReqresGetHTTP from '../ReactHTTP/ReqresGetHTTP';
import ReqresPostHTTP from '../ReactHTTP/ReqresPostHTTP';

class ListRendering extends React.Component{
    render(){
        return(
            <div className="reactListPage">
                <section className="pageHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="float-left">
                                    <h1> List Rendering <i className="fa fa-check" aria-hidden="true"></i> </h1>
                                </div>
                    
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <ActorList />
                            <p className="text-danger">Note: Each child in a list should have a unique "key" prop.</p>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/5s8Ol9uw-yM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <img src={ListKeysImg} alt="list keys" className="img-fluid" />
                        </div>
                    </div>
                </section>

                <section className="bgBlack">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <h2>React JS - How to work with CSS styling</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <ReactStyling status={true}/>
                                <InlineStyle />
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/j5P9FHiBVNo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="jasonPlacegolder">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <ReqresGetHTTP></ReqresGetHTTP>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <ReqresPostHTTP></ReqresPostHTTP>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ListRendering