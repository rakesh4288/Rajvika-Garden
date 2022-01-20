import React from "react";

class VishwasForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            yourName : '',
            yourAddress : '',
            yourSkills : ''
        }
    }

    yourNameChange = (event) =>{
        this.setState({
            yourName : event.target.value
        })
    }

    yourAddressChange = (event) =>{
        this.setState({
            yourAddress : event.target.value
        })
    }

    yourSkillsChange = (event) =>{
        this.setState({
            yourSkills : event.target.value
        })
    }

    submitForm = (event) => {
        console.log("Your Name =", this.state.yourName);
        console.log("Your Address =", this.state.yourAddress);
        console.log("Your Skills =", this.state.yourSkills);
        event.preventDefault();
    }

    render(){
        return(
            <form className="thumbnail" onSubmit={this.submitForm}>
                <h5>Code Evolution Sample Vishwas Form</h5>
                <div className="form-group">
                    <label htmlFor="yourName">Enter Your Name:</label>
                    <input type="text" id="yourName" className="form-control" value={this.state.yourName} onChange={this.yourNameChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="yourAddress">Enter Your Adress:</label>
                    <textarea id="yourAddress" value={this.state.yourAddress} className="form-control" onChange={this.yourAddressChange}></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="yourSkills">Enter Your Skills:</label>
                    <select id="yourSkills" value={this.state.yourSkills} className="form-select" onChange={this.yourSkillsChange}>
                        <option value="">Select</option>
                        <option value="React Js">React Js</option>
                        <option value="Angular">Angular</option>
                        <option value="Jquery">Jquery</option>
                    </select>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        )
    }
}

export default VishwasForm;