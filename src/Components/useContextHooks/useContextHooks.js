import React from "react";
import useContext from '../../Assets/images/useContext.png';
import useContextWrap from '../../Assets/images/useContext_2.png';
import useContextConsumer from '../../Assets/images/useContext_3.png';
import ComponentA from './ComponentA';

export const UserContext = React.createContext();
function useContextHooks(){
    return(
        <div className="useContextHooksPage">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="pull-left">
                                <h1> useContextHooks <i class="fa fa-microchip" aria-hidden="true"></i> </h1>
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
                            <h6>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</h6>
                            <UserContext.Provider value={'Rakesh'}>
                                <ComponentA></ComponentA>
                            </UserContext.Provider>

                            <br/>
                            <div className="alert border border-primary rounded">
                                <h6>Steps: How to integrate the useContext</h6>
                                <ul>
                                    <li>Firstly, You need to make your hierarchy for the component</li>
                                    <li>In our case - We have Component A {'->'} then Component B {'->'} then Component C </li>
                                    <li>We will pass the data from App component to Component C</li>
                                    <li>We need to create a variable like this - <b>const UserContext = React.createContext()</b></li>
                                    <li>After that we need to wrap the markup where wee need to pass them, Like Below</li>
                                    <li>
                                        <img src={useContextWrap} alt="useContextWrap" className="img-fluid" />
                                    </li>
                                    <li>Here <b><i>UserContext</i></b> is the variable which you created earlier.</li>
                                    <li>Then we need to export the <b><i>UserContext</i></b> like below:</li>
                                    <li><b>export const UserContext = React.createContext();</b></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <img src={useContext} alt="Use" className="img-fluid" />
                            <div className="alert border border-primary rounded">
                                <h6>After exporting the UserContext we need need to consume this for getting.</h6>
                                    <ul>
                                        <li>Firstly, we need to import the UsexContext in Component C like below</li>
                                        <li><b> "import '{ 'UserContext' }' from './useContextHooks'""; </b></li>
                                        <li><img src={useContextConsumer} alt="Use" className="img-fluid" /></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default useContextHooks;