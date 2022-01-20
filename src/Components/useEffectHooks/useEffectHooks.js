import React from "react";
import { Link, NavLink } from "react-router-dom";
import UseEffectByClass from './UseEffectByClass_1';
import UseEffectByHooks from './UseEffectByHooks_1';
import UseEffectByClass_2 from './UseEffectByHooks_2';
import ClassMouse from './ClassMouse';
import HooksMouse from './HooksMouse';
import MouseContainer from './MouseContainer';

function useEffectHooks(){
    return(
        <div className="useEffectPage">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="pull-left">
                                <h1> useEffect Hooks <i className="fa fa-american-sign-language-interpreting" aria-hidden="true"></i> </h1>
                            </div>

                            <div className="pull-right">
                                <Link to="/ract-hooks-page" className="btn btn-outline-warning btn-sm">
                                    <i className="fa fa-arrow-left" aria-hidden="true"></i> &nbsp;
                                    Back
                                </Link>
                            </div>
                
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="useEffect">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h3>useEffect after render</h3>
                            <ul className="text-success">
                                <li>The Effect hooks lets you perform the side effect in functional component</li>
                                <li>It is a close replacement for <b>componentDidMount</b> <b>componentDidUpdate and </b> <b>componentWillUnmount</b> </li>
                                <li>useEffect executing the every render while component loading </li>
                            </ul>

                            <p>useEffect can do whatever <b><i>componentDidMount, componentDidUpdate,componentWillUnmount</i></b> is working in the class component</p>
                            
                            <UseEffectByClass></UseEffectByClass> &nbsp;&nbsp; <UseEffectByHooks></UseEffectByHooks>
                            
                            <hr/>

                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/06Y6aJzTmXY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/nAuWOnFMlOw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                            <hr/>
                            <h5> <i className="fa fa-arrow-right" aria-hidden="true"></i> useEffect() working inside the functional component not inside class component</h5>
                            <h5> <i className="fa fa-arrow-right" aria-hidden="true"></i> By using useEffect() we are requesting to React Please render whater inside the useEffect() ecverytimes. So its rendering the template everytimes</h5>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="useEffectByConditionRendering" className="bgGray">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h3>useEffect Conditionally run effects</h3>
                            <p>The main purpose of this approach to aviod the unnecessary calling the useEffect by every render. If we want to render the particular material from the component so how can we use this? this things shown in this video</p>

                            <p className="alert alert-info">We can use ,[] just after object passing in useEffect method. We can pass the lastState in this array method to check the status, if the last status changed then only this method will execute otherwise not </p>
                            <UseEffectByClass_2></UseEffectByClass_2>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/8DYlzVUTC7s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section id="runEffectsOnlyOnce" className="bgGrayWithBorder">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h3>Run effects only once</h3>
                            <p>If you want to runs the effect only once then you can use ,[] into useEffect() function. This will help you to not render the function multiple times</p>
                            <ClassMouse></ClassMouse>
                            <hr/>

                            <HooksMouse></HooksMouse>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/BH4xvzHa7H8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section id="useEffectWithCleanup">
                <div className="container thumbnail">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h3>useEffect with cleanup</h3>
                            <MouseContainer> </MouseContainer>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/DTlmk6QeOHY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default useEffectHooks;