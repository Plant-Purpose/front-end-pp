import React, {useState, useEffect} from 'react';
import authAxios from "../../util/authAxios";
import plantAPI from "../../../src/util/plantapi.js";
import axios from "axios";


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
        <div>
            {plants && plants.length !==0 ? plants.map(plant => {
                return(
                    <div>
                        <h1>My Plants</h1>
                        <img src="" alt=''/>
                        <p>{plant}</p>
                    </div>

                )
            }): null}
            
        </div>
    )
}
export default MyPlants;