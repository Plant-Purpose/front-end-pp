import React, {useState, useEffect} from 'react';
import authAxios from "../../util/authAxios";
import plantAPI from "../../../src/util/plantapi.js"


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
            plantAPI()
            .get('https://trefle.io/api/plants/{id}', plantid.id)
            .then(response => {
                setPlants(response.data)
            })
            .catch(error => {
                console.log(error);
            })
        })
        .catch(error => {
            console.log(error);
        })      
    }, [plantid.id])

    return(
        <div>
            {plants && plants.length ? plants.map(plant => {
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