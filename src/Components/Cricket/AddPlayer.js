import React, { useEffect, useState } from "react";
import { AddPlayerAPI } from './API';
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom'

function AddPlayer(){
    const initialValue = {
        playerName: "",
        playerEmail: "",
        playerPhone: "",
        playerTeam: "",
        playerBoard: ""
    }

    const [formValues, setFormValues] = useState(initialValue); 
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const { playerName, playerEmail, playerPhone, playerTeam, playerBoard  } = formValues;

    const formValueChanges = (e)=>{
        //console.log("formValueChanges = ", e.target.value);
        setFormValues({...formValues,[e.target.name]:e.target.value});
        //console.log("formValueChanges = ", formValues);
    }

    const submitForm = (e)=>{
        e.preventDefault();
        setFormErrors(formValidate(formValues));
        setIsSubmit(true);
    }

    useEffect(()=>{
        console.log("Form Errors = ", formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            //console.log("Form values = ", formValues);
            AddPlayerData(formValues);
        }
    },[formErrors]);

    const AddPlayerData = async()=>{
        await AddPlayerAPI(formValues);
        console.log("New Player Added Successfully !");
    }

    const formValidate = (values)=>{
        const errors = {}
        const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const phoneRegex = /^[6-9]\d{9}$/gi;
        // https://melvingeorge.me/blog/check-if-string-is-valid-indian-mobile-number-javascript
        if(values.playerName == ""){
            errors.playerName  = "Player name is required !"
        }

        if(values.playerEmail == ""){
            errors.playerEmail  = "Email is required !"
        } else if(!emailRegex.test(values.playerEmail)){
            errors.playerEmail = "This is not a Valid email !"
        }

        if(values.playerPhone == ""){
            errors.playerPhone  = "Phone number is required !"
        } else if(!phoneRegex.test(values.playerPhone)){
            errors.playerPhone = "Please enter a valid phone number !"
        }

        if(values.playerTeam == ""){
            errors.playerTeam  = "Please mentioned the Team !"
        }

        if(values.playerBoard == ""){
            errors.playerBoard  = "Please enter the board name !"
        }

        return errors;
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <form className="alert alert-success" onSubmit={submitForm}>
                        <h5 className="bg-success p-1 rounded text-warning text-center">Add New Player Data <i className="fa fa-user-plus" aria-hidden="true"></i></h5>
                        <div className="form-group">
                            <label htmlFor="playerName">Player Name:</label>
                            <input type="text" id="playerName" name="playerName" className="form-control" value={formValues.playerName} onChange={formValueChanges} />
                            <div className="text-danger">{formErrors.playerName}</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="playerEmail">Player Email:</label>
                            <input type="text" id="playerEmail" name="playerEmail" className="form-control" value={formValues.playerEmail} onChange={formValueChanges} />
                            <div className="text-danger">{formErrors.playerEmail}</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="playerPhone">Player Phone:</label>
                            <input type="text" id="playerPhone" name="playerPhone" className="form-control" value={formValues.playerPhone} onChange={formValueChanges} />
                            <div className="text-danger">{formErrors.playerPhone}</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="playerTeam">Player Team:</label>
                            <input type="text" id="playerTeam" name="playerTeam" className="form-control" value={formValues.playerTeam} onChange={formValueChanges} />
                            <div className="text-danger">{formErrors.playerTeam}</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="playerBoard">Player Board:</label>
                            <input type="text" id="playerBoard" name="playerBoard" className="form-control" value={formValues.playerBoard} onChange={formValueChanges} />
                            <div className="text-danger">{formErrors.playerBoard}</div>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>

                    {
                        Object.keys(formErrors).length === 0 && isSubmit ?
                        <div className="alert alert-success">
                            <h5 className="text-success">
                                <i className="fa fa-check"></i> Form Saved successfully ! <br/><br/>
                                <Link to="/cricket-dashboard/view-player-list" className="btn btn-primary btn-sm"> Click here to view </Link>
                            </h5>
                        </div>
                        :
                        null
                    }
                </div>

                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    {/* <img src={IndiaWorldCupOne} alt={IndiaWorldCupOne} className="img-fluid rounded" />
                    <br/><br/>
                    <img src={IndiaWorldCupTwo} alt={IndiaWorldCupTwo} className="img-fluid rounded" /> */}
                </div>
            </div>
        </div>
    )
}

export default AddPlayer;