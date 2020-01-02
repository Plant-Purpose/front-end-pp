import React, {useState, useEffect} from 'react';
import authAxios from "../../util/authAxios";

const MyTasks = () => {
    const [tasks, setTasks] = useState()
    useEffect(() => {
       authAxios()
       .get('api/users/:id/tasks')
       .then(response => {
        setTasks(response.data)
        })
        .catch(error => {
            console.log(error)
        })
        }, [tasks])

    return(
        
    )
}