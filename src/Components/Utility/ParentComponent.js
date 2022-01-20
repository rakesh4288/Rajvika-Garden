import React from 'react';
import ChildComponent from './ChildComponent';
import propsVSstate from '../../Assets/images/props_vs_state.png';

class ParentComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            parent: 'Mr.',
            parentName: 'Rakesh Shah'
        }
        this.greetingParent = this.greetingParent.bind(this);
    }

    greetingParent(){
        //alert(`Hello ${this.state.parentName}`);
        this.setState({
            parent: 'Mrs.',
            parentName: 'Lalita Sahu'
        })
    }

    childMethod(childParameter){
        alert(`Hello User! ${childParameter}`);
    }

    render(){
        return(
            <div className="container">
                <div className='row'>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <h2>ReactJS - Methods as props</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div>{this.state.parent} {this.state.parentName}</div>
                        <ChildComponent greetHandler={this.greetingParent}></ChildComponent>
                        <img src={propsVSstate} className="img-fluid" />
                        <ul>
                            <li>Props is useful for when are receiving any attributes value from component.</li>
                            <li>State is useful for when we are manipulating any values inside the class or function in the execution mode</li>
                            <li>Props are immutable But States are non immutable</li>
                        </ul>
                        {/* <ChildComponent childFunction={this.childMethod}></ChildComponent> */}
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/QpfyjwhY9kg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default ParentComponent;