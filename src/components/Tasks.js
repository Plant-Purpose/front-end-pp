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

            <div>
                <h1>Tasks</h1>
                <h4>{date}</h4>
            </div>
            
            {task && task.length !==0 ? task.map(task => {
                return(
                <div>
                    <img src='' alt='plant'/>
                    <div>
                        <p>{task.title}</p>
                        <p>{task.task}</p>
                        <p>{task.deadline}</p>
                    </div>
                </div>
            )}):
            <div>

            </div>
            }
        </div>
    )
    
}

export default Tasks;