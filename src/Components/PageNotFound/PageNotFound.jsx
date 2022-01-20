import React from "react";
import ErrorPage from '../../Assets/images/404-error-page-design.jpg';
import { useHistory } from 'react-router-dom';
import ClickToNav  from '../../Assets/images/clickToNavigate.png';

const PageNotFound = () =>{
    
    let history = useHistory();
    let goToHome = () => history.push('/');

    return(
        <div className="PageNotFound">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="text-center">
                            <p>
                                <img src={ErrorPage} className="img-fluid rounded" alt="" />
                            </p>

                            <button className="btn btn-success" onClick={goToHome}>Go to Home Page</button> <br/><br/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="text-center">
                            <p>
                                <img src={ClickToNav} className="img-fluid rounded" alt="" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PageNotFound;