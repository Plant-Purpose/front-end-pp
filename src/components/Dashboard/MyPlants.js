import React, {useState, useEffect} from 'react';
import authAxios from "../../util/authAxios";
import plantAPI from "../../../src/util/plantapi.js";
import AddPlant from '../AddPlant';
import axios from "axios";
import {Link} from "react-router-dom";
import MyPlantsCard from "../MyPlantsCard";


const MyPlants = () => {
    const [plants, setPlants] = useState();
    const [plantIDs, setPlantIDs] = useState([]);
    
    const userId = localStorage.getItem('uid');
    
    useEffect(() => {
        authAxios()
        .get(`https://plant-purpose.herokuapp.com/api/users/${userId}/plants`)
        .then(async response => {

            const IDS = response.data.map(plant => {
                return axios.get(`https://plant-purpose.herokuapp.com/api/plants/browse/${plant.plant_id}`)
            });
            // console.log('ids', IDS)
            const allPlants = await Promise.all(IDS);
            // console.log("allPlants",allPlants)
            setPlants(allPlants)
        })
        .catch(error => {
            console.log(error);
        })      
    }, [userId])
    

    const displayModal = (e) => {
        e.preventDefault();

        const modal = document.querySelector('#add-modal');
        const content = document.querySelector('.modal-content');

        modal.style.height === '0%' ? modal.style.height = '100%'
                                    : modal.style.height = '0%';
        
        if( content.style.opacity === '0') {
            setTimeout(() => {
                content.style.opacity = '100%'
            }, 200);
        } else {
            content.style.opacity = '0';
        }
    }

    return(
        <div>
        <div className="myPlants">
            <h2>My Plants</h2>
            <div className='plantContainer'>
            {plants && plants.length !==0 ? plants.map(plant => {
                return(
                    plant.data.images && plant.data.images.length !==0 ?                
                    <MyPlantsCard plant={plant} key={plant.data.id}/>: null
            )}): <button className='button' onClick={e => displayModal(e)}>Add Plant</button>
           
            }    
            </div>
            </div>


                      
    </div>
    )
}
export default MyPlants;