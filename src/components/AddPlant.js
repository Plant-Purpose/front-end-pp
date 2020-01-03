import React, {useState, useEffect} from 'react';
import authAxios from "../util/authAxios";
import plantAPI from "../util/plantapi.js"
import axios from "axios";

import AddTask from "./AddTask"

const AddPlant = props => {
    const [plant, setPlant] = useState({
        user_id: Number(localStorage.getItem('uid')),
        plant_id: 167110,
        created_at: Date.now(),
    })    
    const userId = localStorage.getItem('uid')

    const handleInput = e => {
        console.log('value', e.target.value)

        setPlant({
            user_id: Number(localStorage.getItem('uid')),
            plant_id: Number(e.target.value),
            created_at: Date.now(),
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
     
        authAxios()
        .post(`https://plant-purpose.herokuapp.com/api/users/${userId}/plants`, plant)
        .then(response => {
            console.log('RESS', response)
            // props.history.push('/dashboard')
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleSearch = e => {
        e.preventDefault();
        axios
        .get('')
        .then(function(response) {
            console.log('Rsponse',response);
            // setPlant(response.data)
        })
        .catch(error => {
            console.dir('error', error)
        })
    }

    const styles = {
        border: 'none',
        backgroundColor: 'transparent',
        letterSpacing: "2px",
        color: "green"
    }
    console.log('plant', plant)
    return(
        <div className='add-container'>
            <form onSubmit={handleSubmit} className='add-form'>
                <h2>Add a Plant</h2>
                <div className='search'>
                    <select className='find-plant' type='text' name="common_name" placeholder="Find Plant" onChange={handleInput}> 
                        <option value="167110">Hybrid Pine</option>
                        <option value="168001">Fringed Orchid</option>
                        <option value="152900">Harlequin Annual Lupine</option>
                        <option value="122955">Spring Coralroot</option>
                        <option value="122976">Cordia</option>
                        <option value="122990">Black Sage</option>
                    </select>
                    <button type="submit" style={styles}>Add</button>
                </div>
            </form>
            <div className='task-box'>
                <AddTask/>
            </div>  
        </div>
    )
} 

export default AddPlant;