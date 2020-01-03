import React, {useState, useEffect} from 'react';
import authAxios from "../../util/authAxios";
import plantAPI from "../../../src/util/plantapi.js";
import AddPlant from '../AddPlant';
import axios from "axios";
import {Link} from "react-router-dom";


const MyPlants = () => {
    const [plants, setPlants] = useState();
    const [plantIDs, setPlantIDs] = useState([]);
    // const plantId = plants.plant_id;
    const userId = localStorage.getItem('uid');

    
    

    useEffect(() => {
        authAxios()
        .get(`https://plant-purpose.herokuapp.com/api/users/${userId}/plants`)
        .then(async response => {

            const IDS = response.data.map(plant => {
                return axios.get(`https://plant-purpose.herokuapp.com/api/plants/browse/${plant.plant_id}`)
            });
            console.log('ids', IDS)
            const allPlants = await Promise.all(IDS);
            console.log(allPlants)
            setPlants(allPlants)
        })
        .catch(error => {
            console.log(error);
        })      
    }, [userId])
    // console.log(plants, plantIDs)

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
        <div className="myPlants">
            <h2>My Plants</h2>
            <div className='plantContainer'>
            {plants && plants.length !==0 ? plants.map(plant => {
                
                return(
                    <div className="plantCard" key={plant.data.id}>
                        <h3>{plant.data.common_name}</h3>                        
                        <img src={ plant.data.images.length > 0 ? plant.data.images[0].url : ""} alt={plant.data.common_name}/>
                        <p>{plant.data.plant_id}</p>                        
                    </div>

                )
            }): 
            <div className="add-plant" >
                
                <button className='button' onClick={e => displayModal(e)}>Add Plant</button>

                <div className="add-modal" id="add-modal">
                    <div className="modal-content">
                        <div className="close" onClick={displayModal}>&times;</div>
                        <div className="left-col">
                            <AddPlant />
                        </div>
                        <div className="right-col">
                            <div className="img-uploader">
                                <p>Upload <br /> Image</p>
                            </div>
                            <button className='button' id='bjs-special-button-that-needs-special-styling-for-some-reason'>Add Plant</button>
                        </div>
                    </div>
                </div>
            </div>            
    }
            </div>
        </div>
    )
}
export default MyPlants;