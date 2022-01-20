import React from "react";
import ActorDetails from "./ActorDetails";

function ActorList(){
    //const names = ["Prabhas", "NTR", "Ram Charan", "Allu Arjun", "Vijay"];
    // return(
    //     <div>
    //         {
    //             names.map(name => <h4>{name}</h4>)
    //         }
    //     </div>
    // )

    let actorsArray = [
        {
            id: 1,
            name: 'Prabhas',
            industry: 'Telagu Cinema',
            movieName: 'Bahubali'
        },
        {
            id: 2,
            name: 'Mammootty',
            industry: 'Malayalam Cinema',
            movieName: 'ONE'
        },
        {
            id: 3,
            name: 'NTR',
            industry: 'Telagu Cinema',
            movieName: 'RRR'
        },
        {
            id: 4,
            name: 'Vijay',
            industry: 'Tamil Cinema',
            movieName: 'Masters'
        },
        {
            id: 5,
            name: 'Allu Arjun',
            industry: 'Telagu Cinema',
            movieName: 'Race Gurram'
        },
        {
            id: 6,
            name: 'Ram Charan',
            industry: 'Telagu Cinema',
            movieName: 'Yewadu'
        }

    ]

    var actorList = actorsArray.map(arrayValue => (
        <ActorDetails key={arrayValue.id} arrayValue={arrayValue}></ActorDetails>
    ));
    return(
        <>
            <h5>South Indian Actors Details</h5>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>Name</th>
                        <th>Movie</th>
                        <th>Industry</th>
                    </tr>
                </thead>

                <tbody>
                    {actorList }
                </tbody>
            </table>
        </>
    )
}

export default ActorList;