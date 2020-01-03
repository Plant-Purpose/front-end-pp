import React from 'react';
import axios from 'axios';
const TaskCard = props => {
    console.log("props",props)
    const userId = localStorage.getItem('uid')
    const deleteHandler = () => {
        axios.delete(`https://plant-purpose.herokuapp.com/api/users/${userId}/tasks/${props.task.id}`)
            .then(res => {
                console.log(res)
                window.location.reload();
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (
        <div className="taskCard">
            <h2>{props.task.title}</h2>
            <p>{props.task.task}</p>
            <p>Due By: {props.task.deadline}</p>
            <p style={{ cursor: 'pointer' }} onClick={deleteHandler}><img src='images/trash-solid.svg' width="20px" alt="trash"/></p>
            <p style={{ cursor: 'pointer' }} ><img src='images/edit.svg' alt="edit"/></p>
        </div>
    )
}
export default TaskCard;