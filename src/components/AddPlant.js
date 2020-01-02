import React, {useState, useEffect} from 'react';
import authAxios from "../util/authAxios";
import plantAPI from "../util/plantAPI"

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
        .then(props.history.push('/dashboard'))
        .catch(error => {
            console.log(error)
        })
    }

    const handleSearch = e => {
        const token = 'elpiZ21wT1JXZFVzemlubmx0VlRJZz09';
        e.preventDefault();
        plantAPI()
        .get(`https://trefle.io/api/plants/`,
         {"common_name": plant.common_name})
        .then(response => {
            setPlant(response.data)
        })
        .catch(error => {
            console.dir(error)
        })
    }

    return(
        <div>
            <form onSubmit={handleSearch}>
            <h2>Add a Plant</h2>
            <label htmlFor="common_name">Plant Name: </label>
            <input type='text' name="common_name" onChange={handleInput}/>
            <button type='submit'>Search</button>
            </form>
        </div>
    )
} 

export default AddPlant;