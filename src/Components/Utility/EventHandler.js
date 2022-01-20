import React from "react";

class EventHandler extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            messageOne : 'Hi Rakesh',
            messageTwo: 'Hello Mr. Rakesh',
            messageThree : 'Mr. Shah'
        }

        this.clickThree = this.clickThree.bind(this); // this class method binding is better than template level binding
    }

    clickOne(){
        this.setState({
            messageOne : 'Welcome to TCS Family !'
        })
    }

    clickTwo(){
        this.setState({
            messageTwo: 'Have a Great Journey with TCS !'
        });
    }

    clickThree(){
        this.setState({
            messageThree: 'All the best for the rest of your life !'
        });
    }

    render(){
        return(
            <section className="bgBlueGradient">
                <div className="container">
                        <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h2>Event Handler in React JS</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-7 col-lg-7 col-md-5 col-sm-12">
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/kVWpBtRjkCk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>

                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                            <div className="alert alert-info">
                                <h6>Click Event with Bind method</h6>
                                <button className="btn btn-success btn-sm" onClick={this.clickOne.bind(this)}> Click Me </button>
                                <div>{this.state.messageOne}</div>
                            </div>

                            <div className="alert alert-success">
                                <h6>Click Event with Arrow Function</h6>
                                <button className="btn btn-danger btn-sm" onClick={()=> this.clickTwo()}> 
                                Click Me </button>
                                <div>{this.state.messageTwo}</div>
                            </div>

                            <div className="alert alert-warning">
                                <h6>Simpler way for Click Event </h6>
                                <button className="btn btn-primary btn-sm" onClick={this.clickThree}> 
                                Click Me </button>
                                <div>{this.state.messageThree}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default EventHandler;