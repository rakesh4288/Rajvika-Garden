import React from "react";

class ReactRefs extends React.Component{
    constructor(props){
        super(props)
        this.userNameRef = React.createRef();
        this.userPassRef = React.createRef();
        let userId;
        let userPass;
        this.state = {
            userError : false,
            passError : false
        }
    }

    componentDidMount(){
        //console.log(this.inputRef);
        this.userNameRef.current.focus();
    }

    fetchInput = () =>{
        alert(this.userNameRef.current.value);
    }

    submitForm = (event) =>{
        event.preventDefault();
        // alert("User Name = " + this.userNameRef.current.value + " Password " + this.passwordRef.current.value);
        this.userId = this.userNameRef.current.value;
        this.userPass = this.userPassRef.current.value;

        if(this.userId === ''){
            this.setState({
                userError : true
            })
            return false
        } else {
            this.setState({
                userError : false
            })
        }

        if(this.userPass === ''){
            this.setState({
                passError : true
            })
            return false
        } else {
            this.setState({
                passError : false
            })
        }

        console.log("User Name = ", this.userId);
        console.log("User Password = ", this.userPass);
    }

    render(){
        const formStyling = {
            width: '250px',
            height: 'auto',
            border: '1px solid #003c6a',
            padding: '10px',
            borderRadius: '5px'
        }
        return(
            <React.Fragment>
                <form onSubmit={this.submitForm} style={formStyling}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Email Id" ref={this.userNameRef} />
                        {
                            this.state.userError === true ?
                            <p className="text-danger">Please enter user name</p> :
                            <span></span>
                        }
                        
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Enter Password"  ref={this.userPassRef} />

                        {
                            this.state.passError === true ?
                            <p className="text-danger">Please enter login password</p>:
                            <span></span>
                        }
                    </div>

                    <div className="form-group">
                        {/* <button type="submit" onClick={this.fetchInput} className="btn btn-info btn-sm"> Log In </button> */}
                        <button type="submit" className="btn btn-info btn-sm"> Log In </button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default ReactRefs;