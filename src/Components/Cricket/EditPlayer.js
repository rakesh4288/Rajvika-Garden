import React, { useEffect, useState } from "react";
import { EditPlayerAPI, GetPlayerList, GetPlayerDataById } from './API';
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AppImages from "../../Assets/images";

function EditPlayer(){
    const history = useHistory();
    const {id} = useParams();
    const initialValue = {
        playerName: "",
        playerEmail: "",
        playerPhone: "",
        playerTeam: "",
        playerBoard: ""
    }
    const [user, setUser] = useState(initialValue);
    const { playerName, playerEmail, playerPhone, playerTeam, playerBoard  } = user;

    useEffect(()=>{
        loadPlayerData();
    },[]);

    const loadPlayerData = async()=>{
        //GetPlayerList(id);
        //const response =  await GetPlayerList(id);
        //console.log("loadPlayerData = ", response.data);

        const response = await GetPlayerDataById(id);
        setUser(response.data);
    }

    const onValueChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    const EditPlayerData = async()=>{
        await EditPlayerAPI(id,user);
        history.push('/cricket-dashboard/view-player-list');
        //console.log("Player Edited");
    }

    return(
        <div id="edit-player-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="pull-left">
                                <h1> Cricket Dashboard </h1>
                            </div>

                            <div className="pull-right">
                                <div className="text-white">json-server --watch db.json</div>
                                <Link className="btn btn-warning btn-sm" to="/cricket-dashboard/add-new-player"> <i className="fa fa-plus text-danger" aria-hidden="true"></i> New Player</Link>
                                &nbsp;&nbsp;
                                <Link className="btn btn-warning btn-sm" to="/cricket-dashboard/view-player-list">View All Player</Link>
                            </div>
                
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <div className="thumbnail">
                            <h5 className="bg-success p-1 rounded text-warning text-center">Edit Player Data <i className="fa fa-user-plus" aria-hidden="true"></i></h5>
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
                                <button type="submit" className="btn btn-success" onClick={EditPlayerData}>Submit</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                        <img src={AppImages.WorldCup_2011_4} alt={AppImages.WorldCup_2011_4} className="img-fluid rounded" />
                        <br/><br/>
                        <img src={AppImages.WorldCup_2011_5} alt={AppImages.WorldCup_2011_5} className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPlayer;