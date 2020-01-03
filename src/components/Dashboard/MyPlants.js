import React, {useState, useEffect} from 'react';
import authAxios from "../../util/authAxios";
import plantAPI from "../../../src/util/plantapi.js";
import axios from "axios";
import {Link} from "react-router-dom";


const MyPlants = () => {
    const [plants, setPlants] = useState();
    const [plantid, setPlantId] = useState({
        id: ''
    })

    useEffect(() => {
        authAxios()
        .get('api/users/:id/plants')
        .then(response => {
            setPlantId(response.data);
            axios
            .get('https://trefle.io/api/plants?token=elpiZ21wT1JXZFVzemlubmx0VlRJZz09', {"id": plantid.id})
            .then(response => {
                setPlants(response.data)
            })
            .catch(error => {
                console.dir(error);
            })
        })
        .catch(error => {
            console.log(error);
        })      
    }, [plantid.id])

    return(
        <div className="myPlants">

            {plants && plants.length !==0 ? plants.map(plant => {
                return(
                    <div className="plantCard" >
                        <h2>My Plants</h2>
                        <img src="" alt=''/>
                        <p>{plant}</p>                        
                    </div>

                )
            }): 
            <div >
                <h2>My Plants</h2>
                <Link to='/add-plant'>Add Plant</Link>
                
            </div>            
    }
            
        </div>
    )
}
export default MyPlants;