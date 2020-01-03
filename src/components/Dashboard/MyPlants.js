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
    )
}
export default MyPlants;