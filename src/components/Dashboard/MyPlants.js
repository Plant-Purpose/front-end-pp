import React, {useState, useEffect} from 'react';
import authAxios from "../../util/authAxios";
import plantAPI from "../../../src/util/plantapi.js";
import AddPlant from '../AddPlant';
import axios from "axios";
import {Link} from "react-router-dom";


const MyPlants = () => {
    const [plants, setPlants] = useState();
    // const plantId = plants.plant_id;
    const userId = localStorage.getItem('uid');

    
    

    useEffect(() => {
        
        authAxios()
        .get(`https://plant-purpose.herokuapp.com/api/users/${userId}/plants`)
        .then(response => {
            console.log(response.data)
            setPlants(response.data);
            // console.log(plantid.plant_id)
           
            // axios
            // .get('https://trefle.io/api/plants?token=elpiZ21wT1JXZFVzemlubmx0VlRJZz09', {"id": plantid.id})
            // .then(response => {
            //     setPlants(response.data)
            // })
            // .catch(error => {
            //     console.dir(error);
            // })
        })
        .catch(error => {
            console.log(error);
        })      
    }, [userId])
    console.log(plants)

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
            {plants && plants.length !==0 ? plants.map(plant => {
                
                return(
                    <div className="plantCard" >                        
                        <img src="" alt=''/>
                        <p>{plant.plant_id}</p>                        
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
    )
}
export default MyPlants;