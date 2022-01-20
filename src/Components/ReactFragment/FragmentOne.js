import React from 'react'
import NTR from '../../Assets/images/NTR.jpg';
import Allu from '../../Assets/images/Allu_Arjun.jpg';

class FragmentOne extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="card">
                    <img src={NTR} className="card-img-top img-fluid" alt="NTR" />
                    <div className="card-body">
                        <h5 className="card-title">NTR</h5>
                        <p className="card-text">Nandamuri Taraka Rama Rao Jr., also known as Jr NTR or Tarak, is an Indian actor, singer, and television presenter who works in Telugu cinema. In his film career spanning 20 years, he has worked in over 30 films</p>
                        <a href="https://en.wikipedia.org/wiki/N._T._Rama_Rao_Jr." target="_blank" className="btn btn-danger btn-sm">Full Page in Wikipedia</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FragmentOne;