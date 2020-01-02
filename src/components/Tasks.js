import React, {useState} from 'react';
import authAxios from "../util/authAxios.js";

const Tasks = () => {
    const [task, setTask] = useState({
        title: '',
        task: '',
        deadline: ''
    })

    let today = new Date();
    let date = (today.getMonth()+1) +'-'+ today.getDate() + '-' + today.getFullYear();


    return(
        <div>
            <h1>Tasks</h1>
            <p>{date}</p>
        </div>
    )
    
}

export default Tasks;