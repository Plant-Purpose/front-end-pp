import React, {useState, useEffect} from 'react';
import authAxios from "../../util/authAxios";


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
            
        })
        .catch(error => {
            console.log(error);
        })      
    }, [])

    return(
        <div>
            <h1>My Plants</h1>
            <img src="" alt=''/>
            <p>{plant</p>
        </div>
    )
}