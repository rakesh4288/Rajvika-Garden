import React from "react";
import VishwasForm from "./VishwasForm";
import CodeEvolutionForm from '../../Assets/images/Code_Evolution_Form.png'
import ClickCounterONE from '../HighOrderComponents/ClickCounterONE';
import HoverCounterONE from '../HighOrderComponents/HoverCounterONE';
import HOC from '../../Assets/images/HOC.png';
import ClickCounterTWO from '../HighOrderComponents/ClickCounterTWO';
import HoverCounterTWO from "../HighOrderComponents/HoverCounterTWO";
import LoginForm from './LoginForm';

class ReactForms extends React.Component{
    render(){
        return(
            <div className="reactFormPage">
                <section className="pageHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="float-left">
                                    <h1> React Forms <i className="fa fa-indent" aria-hidden="true"></i> </h1>
                                </div>
                    
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <VishwasForm></VishwasForm>
                            </div>

                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                                <img src={CodeEvolutionForm} alt="Code Evolution Form" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="hrStrong" />

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                                Left
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <LoginForm></LoginForm>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="hrStrong" />
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <h3>Higher Order Components Part 1</h3>
                                <h6> <i className="fa fa-check"></i> Why we need Higher Order Components: Because When we need to use and share the common functionlity between two or more components then we can use the Higher Order Component functionlity. </h6>
                                <ClickCounterONE></ClickCounterONE>
                                <br/>
                                <HoverCounterONE></HoverCounterONE>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/B6aNv8nkUSw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="hrStrong" />

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <img src={HOC} alt="HOC" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="hrStrong" />

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <h3>Highr Order Components Part 2</h3>
                                <ClickCounterTWO></ClickCounterTWO>
                                <br/>
                                <HoverCounterTWO></HoverCounterTWO>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/rsBQj6X7UK8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ReactForms;