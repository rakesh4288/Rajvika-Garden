import React from "react";
import FragmentOne from "./FragmentOne";
import FragmentTwo from "./FragmentTwo";

class ReactFragmentPage extends React.Component{
    render(){
        return(
            <div className="reactFragment">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <h3> React Fragments <i className="fa fa-flag-checkered" aria-hidden="true"></i> 
                                </h3>

                                <ul>
                                    <li>
                                        Fragments does allows to grouping the number of children element without adding any extra node
                                    </li>

                                    <li className="text-primary">
                                        As we know = We can not keep children element alone in React Js. We must need to wrap the children element within the parent node.
                                    </li>
                                </ul>

                                <FragmentOne></FragmentOne>
                            </div>

                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                                <iframe width="100%" height="400" src="https://www.youtube.com/embed/bHdh1T0-US4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>SNO</th>
                                            <th>Name</th>
                                            <th>Movie</th>
                                            <th>Industry</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Prabhas</td>
                                            <td>Bahubali</td>
                                            <td>Telagu Cinema</td>
                                        </tr>
                                        <tr>
                                            <FragmentTwo></FragmentTwo>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>NTR</td>
                                            <td>RRR</td>
                                            <td>Telagu Cinema</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Vijay</td>
                                            <td>Masters</td>
                                            <td>Tamil Cinema</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Allu Arjun</td>
                                            <td>Race Gurram</td>
                                            <td>Telagu Cinema</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Ram Charan</td>
                                            <td>Yewadu</td>
                                            <td>Telagu Cinema</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ReactFragmentPage;