import React, {useState} from 'react';
import authAxios from "../util/authAxios";
import MyTasks from './Dashboard/MyTasks';

const AddTaskPanel = () => {
    const [title, setTitle] = useState('');
    const [task, setTask] = useState('');
    
    const uid = localStorage.getItem('uid');
    
    const onChangeHandler = (e, setCB) => {
         setCB(e.target.value)
    }
    
    const onSubmit = e => {
        e.preventDefault();
    
        const new_task = {
            user_id: localStorage.getItem('uid'),
            title,
            task,
            deadline: '1/4/2014',
            created_at: Date.now()
        }
    
        authAxios().post(`https://plant-purpose.herokuapp.com/api/users/${uid}/tasks`, new_task)
                 .then(res => {
                     console.log(res)
                     window.location.reload() 
                 })
                 .catch(err => {
                     console.log(err)
                 });
    }
    

    return (
        <div className="task-panel">   
            <MyTasks />
        </div>
    )
}

export default AddTaskPanel;