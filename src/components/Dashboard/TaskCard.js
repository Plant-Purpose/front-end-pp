import React from 'react';
import axios from 'axios';


const TaskCard = props => {
    const deleteHandler = () => {
    }
    console.log(props.task)
    return (
        <div className="taskCard">
            <h2>{props.task.title}</h2>
            <p>{props.task.task}</p>
            <p>Due By: {props.task.deadline}</p>
        </div>
    )
}
export default TaskCard;