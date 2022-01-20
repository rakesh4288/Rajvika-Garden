import React from "react";
import {useState, useEffect} from 'react';

function LoginForm(){
    const initialValues = {
        userName: '',
        email: '',
        password : ''
    }
    const [formValues,setFormvalues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const valueChange = (e) =>{
        //console.log(e.target);
        const { name, value } = e.target;
        setFormvalues({...formValues, [name]:value});
        //console.log(formValues);
    }

    const submitForm = (e)=>{
        e.preventDefault();
        //formValidation(formValues);
        setFormErrors(formValidation(formValues));
        setIsSubmit(true);
    }

    useEffect(()=>{
        //console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log("All form values =",formValues);
        }
    },[formErrors]);

    const formValidation = (values)=>{
        const errors = {}

        const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if(!values.userName){
            errors.userName = "User name is required !";
        }

        if(!values.email){
            errors.email = "Email is required !"
        } else if(!regex.test(values.email)){
            errors.email = "Email is not is correct format !";
        }

        if(!values.password){
            errors.password = "Password is required !";
        } else if(values.password.length < 4){
            errors.password = "Password must be more than 4 character !";
        } else if (values.password.length > 10){
            errors.password = "Password can not be exceed more than 10 character !"
        }

        return errors;
    }

    return(
        <form className="thumbnail" onSubmit={submitForm}>
            <h5>Sample Login Registration Form with vaildation</h5>
            <hr/>
            <pre>{JSON.stringify(formValues,undefined,2)}</pre>
            <div className="form-group">
                <label>Enter User Name</label>
                <input type="text" name="userName" className="form-control" value={formValues.userName} onChange={valueChange}  />
                <p className="text-danger">{formErrors.userName}</p>
            </div>

            <div className="form-group">
                <label>Enter Email</label>
                <input type="text" name="email" className="form-control" value={formValues.email} onChange={valueChange}  />
                <p className="text-danger">{formErrors.email}</p>
            </div>

            <div className="form-group">
                <label>Enter Password</label>
                <input type="password" name="password" className="form-control" value={formValues.password} onChange={valueChange} />
                <p className="text-danger">{formErrors.password}</p>
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-success btn-sm">Submit</button>
            </div>

            {
                Object.keys(formErrors).length === 0 && isSubmit ? 
                (<div className="alert alert-success">
                    <h5 className="text-success">
                        <i className="fa fa-check"></i> Form Saved successfully !
                    </h5>
                </div>)
                : null
            }
        </form>
    )
}

export default LoginForm;