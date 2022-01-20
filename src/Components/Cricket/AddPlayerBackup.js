import React, { useState } from "react";
import { AddPlayerAPI } from './API';
import { useHistory } from "react-router-dom";

import IndiaWorldCupOne from '../../Assets/images/india-world-cup-2011.jpg';
import IndiaWorldCupTwo from '../../Assets/images/india-world-cup-2011-2.jpg';

function AddPlayer(){
    const history = useHistory();
    const initialValue = {
        playerName: "",
        playerEmail: "",
        playerPhone: "",
        playerTeam: "",
        playerBoard: ""
    }
    const [user, setUser] = useState(initialValue);
    const { playerName, playerEmail, playerPhone, playerTeam, playerBoard  } = user;
    const onValueChange = (e)=>{
        //console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
        //console.log(user);
    }

    const AddPlayerData = async()=>{
        await AddPlayerAPI(user);
        history.push('/cricket-dashboard/view-player-list');
        console.log("New Player Added Successfully !");
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="thumbnail">
                        <h5 className="bg-success p-1 rounded text-warning text-center">Add New Player Data <i className="fa fa-user-plus" aria-hidden="true"></i></h5>
                        <div className="form-group">
                            <label htmlFor="playerName">Player Name:</label>
                            <input type="text" id="playerName" name="playerName" className="form-control" onChange={onValueChange} value={playerName} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="playerEmail">Player Email:</label>
                            <input type="text" id="playerEmail" name="playerEmail" className="form-control" onChange={onValueChange} value={playerEmail} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="playerPhone">Player Phone:</label>
                            <input type="text" id="playerPhone" name="playerPhone" className="form-control" onChange={onValueChange} value={playerPhone} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="playerTeam">Player Team:</label>
                            <input type="text" id="playerTeam" name="playerTeam" className="form-control" onChange={onValueChange} value={playerTeam} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="playerBoard">Player Board:</label>
                            <input type="text" id="playerBoard" name="playerBoard" className="form-control" onChange={onValueChange} value={playerBoard} />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-success" onClick={AddPlayerData}>Submit</button>
                            {/* <button type="submit" className="btn btn-success">Submit</button> */}
                        </div>
                    </div>
                </div>

                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <img src={IndiaWorldCupOne} alt={IndiaWorldCupOne} className="img-fluid rounded" />
                    <br/><br/>
                    <img src={IndiaWorldCupTwo} alt={IndiaWorldCupTwo} className="img-fluid rounded" />
                </div>
            </div>
        </div>
    )
}

export default AddPlayer;