import React from "react";
import ReactPortalInfo from '../ReactPortals/ReactPortalsInfo';
import EventHandler from "../Utility/EventHandler";
import ConditionalStatment from '../Utility/ConditionalStatement';
import ReactFragmentPage from "../ReactFragment/ReactFragmentPage";

function ReactBasicPage(){
    return(
        <div className="ReactBasicPage">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="pull-left">
                                <h1> React Basic Knowledge <i className="fa fa-snowflake-o" aria-hidden="true"></i> </h1>
                            </div>

                            <div className="pull-right">
                                
                            </div>
                
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>
            
            <ReactFragmentPage />
            <hr/>
            <ConditionalStatment></ConditionalStatment>
            <hr/>
            <ReactPortalInfo/>
            <hr/>
            <EventHandler></EventHandler>
        </div>
    )
}

export default ReactBasicPage;