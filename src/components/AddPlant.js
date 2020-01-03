import React, {useState, useEffect} from 'react';
import authAxios from "../util/authAxios";
import plantAPI from "../util/plantapi.js"
import axios from "axios";

import AddTask from "./AddTask"

const AddPlant = (props) => {
    const [plant, setPlant] = useState({
        plant_id: '',
        created_at: Date.now(),
        common_name: ''
    })

    

    const handleInput = e => {
        setPlant({
        ...plant,
        [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        authAxios()
        .post('api/users/:id/plants', plant)
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
        .get(`https://trefle.io/api/plants?token=elpiZ21wT1JXZFVzemlubmx0VlRJZz09`)
        .then(response => {
            console.log(response);
            // setPlant(response.data)
        })
        .catch(error => {
            console.dir(error)
        })
    }

    return(
        <div>
            <form onSubmit={handleSearch}>
                <h2>Add a Plant</h2>
                <input type='text' name="common_name" placeholder="Find Plant" onChange={handleInput}/>
                <button type='submit'>Search</button>
            </form>
            <div>
                <AddTask/>
            </div>
        </div>
    )
} 

export default AddPlant;