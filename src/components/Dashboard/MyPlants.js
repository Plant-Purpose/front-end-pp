import React, {useState, useEffect} from 'react';
import authAxios from "../../util/authAxios";
import plantAPI from "../../../src/util/plantapi.js";
import AddPlant from '../AddPlant';
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

    const displayModal = () => {
        const modal = document.querySelector('#add-modal');

        modal.style.display === 'none' ? modal.style.display = 'block'
                                       : modal.style.display = 'none';
    }

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
            <div className="add-plant" >
                <h2>My Plants</h2>
                <button onClick={displayModal}>Add Plant</button>

                <div className="add-modal" id="add-modal">
                    <div className="modal-content">
                        <div className="close" onClick={displayModal}>&times;</div>
                        <div className="left-col">
                            <AddPlant />
                        </div>
                        <div className="right-col">
                            <div className="img-uploader"></div>
                            <button>Add Plant</button>
                        </div>
                    </div>
                </div>
            </div>            
    }
            
        </div>
    )
}
export default MyPlants;