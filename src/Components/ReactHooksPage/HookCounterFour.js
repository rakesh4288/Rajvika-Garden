import React from "react";
import { useState } from "react";

function HookCounterFour(){
    const [items, setItems] = useState([]);
    const addItem = ()=>{
        setItems([
            ...items,
            {
                id: items.length,
                value : Math.floor(Math.random() * 1000) + 1
            }
        ])
    }
    return(
        <div>
            <button className="btn btn-outline-warning btn-sm" onClick={addItem}>Add a New Numer</button>
            <ul className="text-warning"> 
                {
                    items.map(item =>(
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HookCounterFour;