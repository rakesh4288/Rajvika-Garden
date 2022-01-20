import React, { useEffect, useState } from "react";
import axios from "axios";

import {GetPlayerList, DeletePlayerAPI} from './API';
import { Link } from "react-router-dom";

function PlayerList(){
    const [playerData, setPlayerData] = useState([])
    
    // useEffect(()=>{
    //     axios.get("http://localhost:4288/cricket")
    //     .then(res=>{
    //         console.log("PLayer List = ", res.data);
    //         setPlayerData(res.data);
    //     })
    //     .catch(error=>{
    //         console.log("Player List: Error while fetching API");
    //     });
    // },[]);

    useEffect(()=>{
        GetAllPlayerList();
    },[])

    const GetAllPlayerList = async()=>{
        const response = await GetPlayerList();
        //console.log("GetPlayerList =", response.data);
        setPlayerData(response.data)
    }

    const DeletePlayer = async(id)=>{
        //await DeletePlayerAPI(id);
        //GetAllPlayerList();

        if (window.confirm("Delete the item?")) {
            await DeletePlayerAPI(id);
            GetAllPlayerList();
        }
    }

    return(
        <>
            <h4>All Player List</h4>
            <div className="table-responsive">
                <table className="table table-bordered table-striped"> 
                    <thead>
                        <tr>
                            <th>SNO</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Team</th>
                            <th>Board</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>

                    <tbody>
                        {playerData.map((player,index)=>(
                        <tr key={player.id}>
                            <td>{index + 1}</td>
                            <td>{player.playerName}</td>
                            <td><a href={'mailto:{player.playerEmail}'}>{player.playerEmail}</a></td>
                            <td>{player.playerTeam}</td>
                            <td>{player.playerBoard}</td>
                            <td className="text-center">
                                <Link className="border-0" to={`/cricket-dashboard/edit-player/${player.id}`}>
                                    <i className="fa fa-pencil text-primary" aria-hidden="true"></i>
                                </Link>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="border-0" onClick={()=>DeletePlayer(player.id)}>
                                    <i className="fa fa-trash text-danger" aria-hidden="true"></i>
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PlayerList;