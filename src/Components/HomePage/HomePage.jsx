import React from "react";

import ParentComponent from "../Utility/ParentComponent";
import Destructing from '../Utility/destructuring';


import Greeting from '../Utility/greeting';
import Welcome from '../Utility/welcome';
import Hello from '../Utility/hello';
import Message from '../Utility/Message';
import Counter from '../Utility/set.states.counter';


import ReactImage from '../../Assets/images/React.png';
import ReactFeatures from '../../Assets/images/reactjs-features.png';
import reactFolderStructure from '../../Assets/images/react-folder-structure.png';

import ReadMoreReadLess from '../Utility/ReadMore';
class HomePage extends React.Component {
    render(){
        return(
            <div className="homePage">
                <section id="what-is-react">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <h2>What is React Js</h2>
                                <ul>
                                    <li>React is a JavaScript library created by Facebook</li>
                                    <li>React is a User Interface (UI) library</li>
                                    <li>React is a tool for building UI components</li>
                                    <li>It is very easy to build the application by React Because of its component based architecure</li>
                                    <li>Main Advantages of using React is that - React rendering the virtual DOM</li>
                                    <li>Only affected node is refereshing the rather than full page re-loading. So by this approach website performance is increasing</li>
                                    <li>Many Application is already developed by React Js. one of them is PayPal Payment gateway</li>
                                </ul>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <img src={ReactImage} alt="ReactImage" className="img-fluid rounded" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <img src={ReactFeatures} alt="ReactImage" className="img-fluid rounded" />
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="alert alert-info">
                                    <h5>What should know before learning React Js</h5>
                                    <h6> <i className="fa fa-hand-o-right" aria-hidden="true"></i> HTML</h6>
                                    <h6> <i className="fa fa-hand-o-right" aria-hidden="true"></i> CSS</h6>
                                    <h6> <i className="fa fa-hand-o-right" aria-hidden="true"></i> Good Understanding of JavaScript</h6>
                                    <h6><i className="fa fa-hand-o-right" aria-hidden="true"></i> ECMA 6</h6>
                                </div>

                                <div className="card p-3">
                                    <h5>What Software needed to start React JS</h5>
                                    <h6> <i className="fa fa-hand-o-right" aria-hidden="true"></i> Node Js</h6>
                                    <h6> <i className="fa fa-hand-o-right" aria-hidden="true"></i> NPM</h6>
                                    <h6> <i className="fa fa-hand-o-right" aria-hidden="true"></i> Visual Studio Code</h6>
                                    <h6> <i className="fa fa-hand-o-right" aria-hidden="true"></i> Git - If you wanted to keep your code in central repository</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr/>

                <section id="How-to-install-React">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12"> 
                                <h3>How to install React <i className="fa fa-cog" aria-hidden="true"></i> And What is the folder structure <i className="fa fa-folder-open" aria-hidden="true"></i>
                                </h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <ul>
                                    <li>Firstly You need to install the Node.js</li>
                                    <li>And make sure while intalling the node js - NPM should be checked in installation wizard</li>
                                    <li>After fully installing the Node.js you need to check the version of Node Js and NPM, below is the command for that:</li>
                                    <li><b>node -v</b></li>
                                    <li><b>npm -v</b></li>
                                    <li>Below is the command for creating React Projects:</li>
                                    <li><b>npx create-react-app my-app</b></li>
                                    <li>open terminal then: <b>cd my-app</b></li>
                                    <li>After inside <b>my-app/npm start</b></li>
                                </ul>
                                <p>
                                    After firing the above command, a new Port using 3000 host server will be open like <b>http://localhost:3000/</b> and it will show the default page by React App. And you can edit this page and start working on React !!
                                </p>

                                <div className="alert bg-dark text-white">
                                    <h5 className="text-white">What is JSX ?</h5>
                                    <p>JSX stands for JavaScript XML.</p>
                                    <p>JSX allows us to write HTML in React.</p>
                                    <p>JSX makes it easier to write and add HTML in React.</p>
                                    <p>JSX allows us to write HTML elements in JavaScript and place them in the DOM without any <b>createElement()</b>  and/or <b>appendChild()</b> methods.</p>
                                    <p>JSX converts HTML tags into react elements.</p>
                                    <p className="bg-light p-1 rounded text-dark">You are not required to use JSX, but JSX makes it easier to write React applications.</p>

                                    <p className="bg-danger p-1 rounded">Important Notes <i className="fa fa-bullhorn" aria-hidden="true"></i> : When you want to add the CSS class name inside JSX, so you must have to use the <b>className</b> attributes instead of <b>class</b> Because <b>class</b>keyword taken by React already !</p>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <img src={reactFolderStructure} alt="ReactImage" className="img-fluid rounded" />
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="props-vs-state" className='bgGrayWithBorder'>
                    <ParentComponent/>
                </section>

                <section id="destructing">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                                <Destructing firstName="Rakesh" lastName="Shah"></Destructing>         
                            </div>

                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                                <ReadMoreReadLess></ReadMoreReadLess>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <Message></Message>
                            <Hello></Hello>
                            <Greeting firstName="Rakesh" city="Pune">
                                <p>This is a Paragraph</p>
                            </Greeting>

                            <Greeting firstName="Lalita" city="Mumbai">
                                <button>Check out</button>
                            </Greeting>
                            
                            <Greeting firstName="Rajvika" city="Bhopal"></Greeting>
                            <Greeting firstName="KrishnaMurthy" city="Noida"></Greeting>

                            <div className="welcomeBox">
                                <Welcome firstName="Pravin" lastName="Kawle"></Welcome>
                                <Welcome firstName="Alok" lastName="Panchal"></Welcome>
                                <Welcome firstName="Prasad" lastName="Mudgal"></Welcome>
                                <Welcome firstName="Aman" lastName="Chandra"></Welcome>
                            </div>

                            <Counter></Counter>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default HomePage;