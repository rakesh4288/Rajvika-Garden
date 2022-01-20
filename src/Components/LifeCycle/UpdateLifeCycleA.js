import React from "react";
import UpdatingLifeCycle1 from '../../Assets/images/updating_life_cycle_1.png';
import UpdatingLifeCycle2 from '../../Assets/images/updating_life_cycle_2.png';
import UpdatingLifeCycle3 from '../../Assets/images/updating_life_cycle_3.png';
import UpdatingLifeCycle4 from '../../Assets/images/updating_life_cycle_4.png';
import UpdatingLifeCycle5 from '../../Assets/images/updating_life_cycle_5.png';
import UpdatingLifeCycleB from './UpdateLifeCycleB'

class UpdatingLifeCycleA extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            myName : 'Mr. Rakesh Shah'
        }
        console.log('Updating LifeCycle A (1) : Constructor()');
    }

    static getDerivedStateFromProps(props, state){
        console.log('Updating LifeCycle A (2) : getDerivedStateFromProps()');
        return null
    }

    componentDidMount(){
        console.log('Updating LifeCycle A (4) : componentDidMount()');
    }

    shouldComponentUpdate(){
        console.log('Updating LifeCycle A (5) : shouldComponentUpdate()');
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log('Updating LifeCycle A (6) : getSnapshotBeforeUpdate()');
        return null;
    }

    componentDidUpdate(){
        console.log('Updating LifeCycle A (7) : componentDidUpdate()');
    }

    changeState = () =>{
        //alert('inside changeState');
        this.setState({
            myName : 'Lalita Sahu'
        })
    }

    render(){
        console.log('Updating LifeCycle A (3) : render()');
        return(
            <div className="updatingLifeCycle">
                <section className="pageHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="pull-left">
                                    <h1> Updating Life Cycle <i className="fa fa-life-ring" aria-hidden="true"></i> </h1>
                                </div>
                                
                                <div className="pull-right">
                                    <UpdatingLifeCycleB/>
                                    <button className="btn btn-danger btn-sm" onClick={this.changeState}>Change State</button>
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
                                <img src={UpdatingLifeCycle1} alt="LifeCycleImg1" className="img-fluid" />
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <img src={UpdatingLifeCycle2} alt="LifeCycleImg2" className="img-fluid" />
                            </div>
                        </div>

                        <hr/>

                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <img src={UpdatingLifeCycle3} alt="LifeCycleImg3" className="img-fluid" />
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <img src={UpdatingLifeCycle4} alt="LifeCycleImg4" className="img-fluid" />
                            </div>
                        </div>

                        <hr/>

                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <img src={UpdatingLifeCycle5} alt="LifeCycleImg5" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default UpdatingLifeCycleA;