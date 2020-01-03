import React, {useState, useEffect} from 'react';
import authAxios from "../util/authAxios";
import plantAPI from "../util/plantapi.js"
import axios from "axios";

import AddTask from "./AddTask"

const AddPlant = props => {
    const [plant, setPlant] = useState({
        plant_id: '',
        created_at: Date.now(),
        common_name: ''
    })    
    const userId = localStorage.getItem('uid')

    const handleInput = e => {
        setPlant({
        ...plant,
        [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        authAxios()
        .post(`api/users/${userId}/plants`, plant)
        .then(response => {
            console.log(response)
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

    return(
        <div className='add-container'>
            <form onSubmit={handleSearch} className='add-form'>
                <h2>Add a Plant</h2>
                <div className='search'>
                    <input className='find-plant' type='text' name="common_name" placeholder="Find Plant" onChange={handleInput} />
                    <i className="icon-search" aria-hidden="true"></i>
                </div>
            </form>
            <div className='task-box'>
                <AddTask/>
            </div>  
        </div>
    )
} 

export default AddPlant;