import React from "react";
import Rakesh from '../../Assets/images/Rakesh.jpg'

class ReactPortalInfo extends React.Component{
    render(){
        return(
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h3>React Portals !</h3>
                            <p>
                                React portals provides a way to render a children element into a node that exists outside the DOM hierarchy of the parent component
                            </p>

                            <p>
                                What React Portal provides the It can separate the New element from root node. You can render the DOM node that will not render in root node
                            </p>

                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <h5>How to integrate React Portals:</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Firstly develope your component whatever you want to develop</li>
                                                <li>Then import ReactDOM from "react-dom" package</li>
                                                <li> After importing ReactDOM it needs to attach with return like below</li>
                                                <li>return ReactDOM.createPortal(first arguments will be HTML elements and second argument will be the root element where your need post it)</li>
                                                <li>Remember one thing - before doing any further task Firstly you need to create element after root element where you want to push that.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/HpHLa-5Wdys" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                           
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ReactPortalInfo;