import React from "react";
import ReactRefs from "../ReactRefs/ReactRefs";
import AppImages from "../../Assets/images/index";

class RouterInfo extends React.Component{
    render(){
        return(
            <div id="React-Router">
                <section className="pageHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="float-left">
                                    <h1> React Router <i className="fa fa-indent" aria-hidden="true"></i> </h1>
                                </div>
                    
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <h3>How to configure the Router in React </h3>
                                <ul>
                                    <li>Firstly you need to install the node module for Router plugin Because React by default is not providing this. Below is the command for installing it - </li>
                                    <li><b>npm i react-router-dom</b></li>
                                    <li>After installing you can check the package.json file. There will one entry like <b>"react-router-dom": "^5.2.0"</b> under <b>dependencies</b></li>
                                    <li>Then before doing anything Firstly you need to wrap all the project or you can say that main app inside <b>BroswerRouter tags</b>. This steps must need to follow under index.js file</li>
                                    <li>
                                        <img src={AppImages.Router_img_4} alt="router plugin" className="img-fluid" />
                                    </li>
                                    <li>Then Go to App.js file and import Switch and Route plugin from <b>react-router-dom</b>, See below screenshot:</li>
                                    <li><img src={AppImages.Router_img_1} alt="router plugin" className="img-fluid" /></li>
                                    <li>You need to configure all the component which you need to attach with Router plugin. Below is the snapshot for this:</li>
                                    <li><img src={AppImages.Router_img_2} alt="router plugin" className="img-fluid" /></li>
                                    <li>This is same like Angular. Angular is configuring these things in TS file But React is configuring inside the HTML file</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <hr/>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <h3>React JS - Refs</h3>
                                <p>Basically Refs makes it possible to access the DOM node directly within React. Example: Let suppose we have login form and we want to focus on that while loading the component.</p>
                                <ReactRefs/>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <iframe width="100%" height="400" src="https://www.youtube.com/embed/FXa9mMTKOu8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                https://www.freecodecamp.org/news/react-router-in-5-minutes/
                <br/>
                https://scrimba.com/scrim/cNq8MzCr
                <br/>
                https://v5.reactrouter.com/web/guides/quick-start

            </div>
        )
    }    
}

/*
const RouterInfo = () =>{
    return(
        <>
            <section className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="float-left">
                                <h1> React Router <i className="fa fa-indent" aria-hidden="true"></i> </h1>
                            </div>
                
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h3>How to configure the Router in React </h3>
                            <ul>
                                <li>Firstly you need to install the node module for Router plugin Because React by default is not providing this. Below is the command for installing it - </li>
                                <li><b>npm i react-router-dom</b></li>
                                <li>After installing you can check the package.json file. There will one entry like <b>"react-router-dom": "^5.2.0"</b> under <b>dependencies</b></li>
                                <li>Then before doing anything Firstly you need to wrap all the project or you can say that main app inside <b>BroswerRouter tags</b>. This steps must need to follow under index.js file</li>
                                <li>Then Go to App.js file and import Switch and React plugin from <b>react-router-dom</b>, See below screenshot:</li>
                                <li>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            https://www.freecodecamp.org/news/react-router-in-5-minutes/
            <br/>
            https://scrimba.com/scrim/cNq8MzCr
            <br/>
            https://v5.reactrouter.com/web/guides/quick-start

        </>
    )
}
*/

export default RouterInfo;