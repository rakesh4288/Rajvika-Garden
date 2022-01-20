import React from "react";
import { Link,NavLink } from "react-router-dom";
import hooksImg2  from '../../Assets/images/hooks_2.png';
import hooksImg3  from '../../Assets/images/hooks_3.png';
import ClassCounterOne from './ClassCounterOne';
import HookCounterOne from './HookCounterOne';
import HookCounterTwo from './HookCounterTwo';
import HookCounterThree from './HookCounterThree'
import HookCounterFour from './HookCounterFour';
import useStateSummary from '../../Assets/images/useState_Summary.png';

class ReactHooksPage extends React.Component{
    render(){
        return(
            <div className="reactHooksPage">
                <section className="pageHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="pull-left">
                                    <h1> React Hooks <i className="fa fa-book" aria-hidden="true"></i> </h1>
                                </div>

                                <div className="pull-right">
                                    <div className="dropdown">
                                        <button className="btn btn-warning btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Some Other Hooks
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <Link className="dropdown-item" to="/basic-of-useEffect">Basic of useEffect</Link>
                                            </li>

                                            <li>
                                                <Link className="dropdown-item" to="/react-use-context">useContext</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                    
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="reactHooks">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <h5>What are the hooks ?</h5>
                                <ul>
                                    <li>Hooks are a new feature addition in React version 16.8 which allows you to use React features without having to write the class</li>
                                    <li>Example: State of Component</li>
                                </ul>
                                <p className="text-danger">Hooks don't work inside the Classes</p>
                                
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="thumbnail">
                                    <h5>Why hooks ?</h5>
                                    <h6>Reason Set 1</h6>
                                    <ul>
                                        <li>First reason is JavaScript rather than React itself </li>
                                        <li>To work with classes you have to understand how <i>this</i> keyword work with Javascript rather than other languages</li>
                                        <li>People can work with <i>props</i> and <i>state</i> But they can struggle with class component</li>
                                        <li>You have also to remember the bind the event handler in class component </li>
                                        <li>React Side with class component: classes don't minify the your code very well</li>

                                        <p className="text-danger">While working with Hooks you will not face this problem </p>
                                    </ul>
                                </div>
                                <br/>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="alert alert-info">
                                    <h5>Why hooks ?</h5>
                                    <h6>Reason Set 2</h6>
                                    <ul>
                                        <li> This reason will take care about advance JavaScript </li>
                                        <li>While working with React You felt - There is no any particular way to resuse the component logic between other components</li>
                                        <li>HOC can help to solve this problem but the approaches will be more complex</li>
                                        <li>So there is a need a proper way to reuse the component and also can communicate with proper manner in different component.</li>
                                        <li>Hooks allows to reuse the component without disturbing the HOC - Heirachy component</li>

                                        <p className="text-danger">While working with Hooks you will not face this problem </p>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div>
                                    <h5>Why hooks ?</h5>
                                    <h6>Reason Set 3</h6>
                                    <ul>
                                        <li> Sometimes data fetching is also done in - ComponentDidMount and ComponentDidUpdate </li>
                                        <li>Event Listner - ComponentDidMount and ComponentWillUmount</li>
                                    </ul>
                                    <div> 
                                        <h6>Must know about hooks:</h6>
                                        <img src={hooksImg2} alt="home image 2" className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div>
                                    <h4>Hooks Summary:</h4>
                                    <img src={hooksImg3} alt="home image 2" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="useStateWithClassAndFunction" className="bgGray">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <h3>useState Hook</h3>
                                <ClassCounterOne></ClassCounterOne> <br/><br/>
                                <HookCounterOne></HookCounterOne>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/lAW1Jmmr9hc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="useStateWithseStateprevState" className="bgGrayWithBorder">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <h4>By useState package with setState and prevState:</h4>
                                <HookCounterTwo></HookCounterTwo>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/d0plTCQgsXs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="useStateWithObject">
                    <div className="container bgPurple p-3 rounded">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <h3 className="text-white">useState with object</h3>
                                <p className="text-white">useState variable can be String,Number,Boolean,Object,array any of type. You can use as per your requirement.</p>
                                <HookCounterThree></HookCounterThree>
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/-3lL8oyev9w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="bg-light alert">
                                    <h3>What is Spread operator in ES6 ?</h3>
                                    <p>Actually ECMAScript 6 introduced the spread operator. <br/>
                                    The syntax is three dots(...) and followed by the iterable array. <br/>
                                    </p>

                                    <p>
                                    It is expanding the array into individual elements. So, it can be used to expand the array in a places where zero or more elements are expected.
                                    </p>

                                    <ul>
                                    <li>Spread operator ... is assocated with array which iterarting.</li>
                                    <li>While using ...variableName our array can become the single line.</li>
                                    <li>Spread operator can merge the array value and its spread the array data from array </li>
                                    <li>When we need to merge two array values then we can use the spread operator</li>
                                    <li>And also when we need to merge two array value then we can use the spread operator.</li>
                                    </ul>
                                </div>
                                <img src={useStateSummary} alt="useStateSummary" className="img-fluid rounded" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="useStateWithArray" className="bgBlue">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <h3 className="text-white">useState with Array</h3>
                                <HookCounterFour></HookCounterFour>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                             <iframe width="100%" height="315" src="https://www.youtube.com/embed/RZ5wKYbOM_I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ReactHooksPage;