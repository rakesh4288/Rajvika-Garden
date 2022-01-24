
import React from "react";
import axios from "axios";
import {useState, useEffect} from 'react';

function Covid19API(){
    const [covidData, setCovidData] = useState([]);
    useEffect(()=>{
        axios.get('https://api.rootnet.in/covid19-in/stats/latest')
        .then(response=>{
            //console.log("Covid Response = ", response.data.data.regional);
            setCovidData(response.data.data.regional);
        })
        .catch(error=>{
            console.log("Covid Error = ", error);
        });
    });
    return(
        <>
            <h5>India: State wise daily Covid data</h5>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Discharge</th>
                        <th>Deaths</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        covidData.map((covid,index)=>
                            <tr key={covid.loc}>
                                <td>{index + 1}</td>
                                <td>{covid.loc}</td>
                                <td className="text-primary">{covid.confirmedCasesIndian}</td>
                                <td className="text-success">{covid.discharged}</td>
                                <td className="text-danger">{covid.deaths}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Covid19API;

// https://www.mygov.in/corona-data/covid19-statewise-status/
// https://api.rootnet.in/
// https://api.rootnet.in/covid19-in/stats/latest
