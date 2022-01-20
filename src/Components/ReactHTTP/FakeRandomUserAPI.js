import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
function FakeRandomUserAPI(){
    const [fakeProfile, setFakeProfile] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        axios.get("https://randomuser.me/api/?results=8")
        .then(res=>{
            console.log("Random User Profile = ", res.data.results);
            setFakeProfile(res.data.results);
            setLoading(true);
        })
        .catch(error=>{
            console.log("Random User Profile Error = ", error);
        });
    },[])

    return(
        <div className="row">
            {
                fakeProfile.map(profile=>(
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12" key={profile.gender}>
                        <div className="card">
                            <img src={profile.picture.large} className="img-fluid card-img-top" alt={'profile of {profile.name.first}'} />
                            <div className="card-body">
                                <h5 className="card-title">{profile.name.first}  {profile.name.last}</h5>
                                <p className="card-text">Description: {profile.location.timezone.description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Email: {profile.email}</li>
                                <li className="list-group-item">City : {profile.location.city}</li>
                                <li className="list-group-item">Country : {profile.location.country}</li>
                                <li className="list-group-item">Age : {profile.dob.age}</li>
                            </ul>
                            <div className="card-body">
                                <a href={'mailto:{profile.email}'} className="btn btn-primary btn-sm">Contact Person</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FakeRandomUserAPI;