import React from "react";
import { Switch,Route, NavLink} from 'react-router-dom';

import LifeCycleB from "./LifeCycleB";
import LifeCycleImg1 from '../../Assets/images/life_cycle_1.png';
import LifeCycleImg2 from '../../Assets/images/life_cycle_2.png';
import LifeCycleImg3 from '../../Assets/images/life_cycle_3.png';
import LifeCycleImg4 from '../../Assets/images/life_cycle_4.png';
import LifeCycleImg5 from '../../Assets/images/life_cycle_5.png';
import LifeCycleImg6 from '../../Assets/images/life_cycle_6.png';

class LifeCycle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName : 'Rakesh Shah'
        }
        console.log("LifeCycle A (1) : Constructor()");
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle A (2) : getDerivedStateFromProps()');
       return null; 
    }

    componentDidMount(){
       console.log('LifeCycle A (4) : componentDidMount()'); 
    }

    render(){
        console.log("LifeCycle A (3) : render()");
        return(
            <div className="reactLifeCycle">
                <section className="pageHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="pull-left">
                                    <h1> React Life Cycle <i className="fa fa-life-ring" aria-hidden="true"></i> </h1>
                                </div>

                                <div className="pull-right">
                                    <NavLink to="/updating-life-cycle" className="btn btn-warning btn-sm"> Updating Life Cycle Methods </NavLink>
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
                                <LifeCycleB></LifeCycleB>
                                <img src={LifeCycleImg1} alt="LifeCycleImg1" className="img-fluid" />
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <img src={LifeCycleImg2} alt="LifeCycleImg2" className="img-fluid" />
                            </div>
                        </div>

                        <hr/>

                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <img src={LifeCycleImg3} alt="LifeCycleImg3" className="img-fluid" />
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <img src={LifeCycleImg4} alt="LifeCycleImg4" className="img-fluid" />
                            </div>
                        </div>

                        <hr/>

                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <img src={LifeCycleImg5} alt="LifeCycleImg5" className="img-fluid" />
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <img src={LifeCycleImg6} alt="LifeCycleImg6" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
                
                <hr/>
            </div>
        )
    }
}

export default LifeCycle;