import React from 'react';
import axios from 'axios';

const TaskCard = ({ title, task, deadline, id }) => {
    const deleteHandler = () => {

    }

    return(
        <div className="taskCard">
            {/* <h2>{title}</h2>
            <p>{task}</p>
            <p>Due By: {deadline}</p> */}
        </div>
    )
}

export default TaskCard;