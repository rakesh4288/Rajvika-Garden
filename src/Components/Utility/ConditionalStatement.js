import React from "react";
import NTR from '../../Assets/images/NTR.jpg';
import Ram from '../../Assets/images/Ram_Charan.jpg';
import Allu from '../../Assets/images/Allu_Arjun.jpg';
import Prabhas from '../../Assets/images/Prabhas.png';
import BlankProfileImg from '../../Assets/images/blank_profile.jpeg';
import WHO from '../../Assets/images/who.jpg';

class ConditionalStatment extends React.Component{
    constructor(props){
        super(props)
        // this.state = {
        //     isLoggedIn : false
        // }

        this.state = {
            actorName: ''
        }
    }
    selectActor(value){
        //var actorName = "";
        let selectedValue = value;
        console.log("Your selected Actor = ", selectedValue);
        if(selectedValue === 'NTR'){
            console.log('NTR here');
            // this.setState.actorName = <img src={NTR} alt="Actor Telgu Cinema 1" className="img-fluid" />
            // this.setState.actorName = "../../Assets/images/NTR.jpg";
            this.setState({
                actorName : 'NTR'
            })

        } else if(selectedValue === 'Ram'){
            console.log('Ram here');
            // this.setState.actorName = <img src={Ram} alt="Actor Telgu Cinema 2" className="img-fluid" />
            //this.setState.actorName = "../../Assets/images/Ram_Charan.jpg";
            this.setState({
                actorName : 'Ram Charan'
            })

        } else if(selectedValue === 'Allu'){
            console.log('Allu Arjun here');
            // this.setState.actorName = <img src={Allu} alt="Actor Telgu Cinema 3" className="img-fluid" />
            //this.setState.actorName = "../../Assets/images/Allu_Arjun.jpg";
            this.setState({
                actorName : 'Allu Arjun'
            })

        } else if(selectedValue === 'Prabhas'){
            console.log('Prabhas here');
            // this.setState.actorName = <img src={Prabhas} alt="Actor Telgu Cinema 4" className="img-fluid" />
            //this.setState.actorName = "../../Assets/images/Prabhas.png";
            this.setState({
                actorName : 'Prabhas'
            })
        }
        else {
            console.log('Not selected anyone');
        }
    }

    render(){
        return(
            <section>
                <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                            <h2>ReactJS - Conditional Statement</h2>
                                <ul>
                                    <li>if/else</li>
                                    <li>Element Variable</li>
                                    <li>Ternary Conditional Operator</li>
                                    <li>Short Circuit Operator</li>
                                </ul>
                                
                                <p className="text-danger">Note: If Else does not work in JSX</p>
                                <p className="text-danger">Note: Element Variable can work in JSX</p>
                            </div>

                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/7o5FPaVA9m0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>

                        <div className='row'>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                <div className="card Profile-selection">
                                    <div className="card-body">
                                        <h6>Select any actor name: </h6>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="actor" id="actor4" value="Prabhas" onChange={(e)=>this.selectActor(e.target.value)}  />
                                            <label className="form-check-label" htmlFor="actor4">
                                                Prabhas
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="actor" id="actor1" value="NTR" onChange={(e)=>this.selectActor(e.target.value)}  />
                                            <label className="form-check-label" htmlFor="actor1">
                                                NTR
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="actor" id="actor2" value="Ram" onChange={(e)=>this.selectActor(e.target.value)}  />
                                            <label className="form-check-label" htmlFor="actor2">
                                                Ram Charan
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="actor" id="actor3" value="Allu" onChange={(e)=>this.selectActor(e.target.value)}  />
                                            <label className="form-check-label" htmlFor="actor3">
                                                Allu Arjun
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                <div>
                                    <h5>Your Selected Actor : </h5>
                                    {
                                        this.state.actorName === 'NTR' ?
                                        <div className="card">
                                            <img src={NTR} className="card-img-top img-fluid" alt="NTR" />
                                            <div className="card-body">
                                                <h5 className="card-title">NTR</h5>
                                                <p className="card-text">Nandamuri Taraka Rama Rao Jr., also known as Jr NTR or Tarak, is an Indian actor, singer, and television presenter who works in Telugu cinema. In his film career spanning 20 years, he has worked in over 30 films</p>
                                                <a href="https://en.wikipedia.org/wiki/N._T._Rama_Rao_Jr." target="_blank" className="btn btn-danger btn-sm">Full Page in Wikipedia</a>
                                            </div>
                                        </div>
                                        : 
                                        this.state.actorName === 'Ram Charan' ?
                                        <div className="card">
                                            <img src={Ram} className="card-img-top img-fluid" alt="NTR" />
                                            <div className="card-body">
                                                <h5 className="card-title">Ram Charan Teja</h5>
                                                <p>Konidela Ram Charan Teja is an Indian actor, producer, and entrepreneur who works predominantly in Telugu cinema. One of the highest-paid actors in India, he has been featured in Forbes India's Celebrity 100 list since 2013
                                                </p>
                                                <a href="https://en.wikipedia.org/wiki/Ram_Charan" target="_blank" className="btn btn-danger btn-sm">Full Page in Wikipedia</a>
                                            </div>
                                        </div>
                                        :
                                        this.state.actorName === 'Allu Arjun' ?
                                        <div className="card">
                                            <img src={Allu} className="card-img-top img-fluid" alt="NTR" />
                                            <div className="card-body">
                                                <h5 className="card-title">Allu Arjun</h5>
                                                <p>Allu Arjun is an Indian actor who primarily works in Telugu cinema. Known for his dancing abilities, he is a recipient of five Filmfare Awards South and three Nandi Awards. One of the highest paid actors in India, he has been featured in Forbes India's Celebrity 100 list since 2014</p>
                                                <a href="https://en.wikipedia.org/wiki/Allu_Arjun" target="_blank" className="btn btn-danger btn-sm">Full Page in Wikipedia</a>
                                            </div>
                                        </div>
                                        :
                                        this.state.actorName === 'Prabhas' ?
                                        <div className="card">
                                            <img src={Prabhas} className="card-img-top img-fluid" alt="NTR" />
                                            <div className="card-body">
                                                <h5 className="card-title">Prabhas</h5>
                                                <p>Uppalapati Venkata Suryanarayana Prabhas Raju, known mononymously as Prabhas, is an Indian actor who works predominantly in Telugu cinema. One of the highest-paid actors in Indian cinema, Prabhas has featured in Forbes India's Celebrity 100 list three times since 2015 based on his income and popularity.</p>
                                                <a href="https://en.wikipedia.org/wiki/Prabhas" target="_blank" className="btn btn-danger btn-sm">Full Page in Wikipedia</a>
                                            </div>
                                        </div>
                                        :
                                        <img src={WHO} alt="Actor Icon" className="img-fluid1" height="200px" />
                                    }
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <h5>Suggested Youtube Videos</h5>
                                {
                                    this.state.actorName === 'Prabhas' ?
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/sOEg_YZQsTI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    :
                                    this.state.actorName === 'NTR' ?
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NgBoMJy386M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    :
                                    this.state.actorName === 'Ram Charan' ?
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/VCQvgWKRMLU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    :
                                    this.state.actorName === 'Allu Arjun' ?
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/YAscOYMTgTs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    :
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/h30wUfOeKcY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                }
                            </div>
                        </div>
                    </div>
            </section>
        )

        // This is simple If Else Condition
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             <div><h3>Welcome Rakesh !</h3></div>
        //         </div>
        //     )
        // } else {
        //     return(
        //         <div>
        //             <div><h3>Logout Successfully !</h3></div>
        //         </div>
        //     )
        // }

        // Now focus on Element variable
        // let message;
        // if(this.state.isLoggedIn){
        //     message = <div><h3>Welcome Rakesh !</h3></div>
        // } else {
        //     message = <div><h3>Logout Successfully !</h3></div>
        // }

        // return(
        //     <div>{message}</div>
        // )


        // Now We need to focus Ternary Coditional Operator
        // return this.state.isLoggedIn ? (<div><h3>Welcome Rakesh !</h3></div>) : (<div><h3>Logout Successfully !</h3></div>)

        
        // return(
        //     <div>
        //         <div><h3>Welcome Rakesh !</h3></div>
		// 		    <div><h3>Logout Successfully !</h3></div>
        //     </div>
        // )
    }
}

export default ConditionalStatment;