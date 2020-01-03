import React from 'react';
import axios from 'axios';
const TaskCard = props => {
    const userId = localStorage.getItem('uid')
    const deleteHandler = () => {
        axios.delete(`https://plant-purpose.herokuapp.com/api/users/${userId}/tasks/${props.task.id}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            });
    }
    console.log(props.task)
    return (
        <div className="taskCard">
            <h2>{props.task.title}</h2>
            <p>{props.task.task}</p>
            <p>Due By: {props.task.deadline}</p>
            <p onClick={deleteHandler}>Delete</p>
        </div>
    )
}
export default TaskCard;