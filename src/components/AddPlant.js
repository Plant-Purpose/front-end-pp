import React, {useState, useEffect} from 'react';
import authAxios from "../util/authAxios";

const AddPlant = () => {
    const [plant, setPlant] = useState({
        
    })

    const handleInput = e => {
        setText({
        ...text,
        [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        authAxios()
        .post('api/users/:id/plants', plant)
        .then()
    }
}