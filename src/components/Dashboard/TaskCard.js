import React, { useState } from 'react';
import axios from 'axios';
const TaskCard = props => {
    const [ edit, setEdit ] = useState(false);
    const [ updatedTask, setUpdatedTask ] = useState(props.task)
    const userId = localStorage.getItem('uid')

    const editToggle = e => {
        e.preventDefault();

        setEdit(!edit);
    }
    console.log('lop', updatedTask);

    const onChangeHandler = e => {
        e.preventDefault();

        const update = {
            ...updatedTask,
            [e.target.name]: e.target.value
        }

        delete update.completed

        setUpdatedTask(update);
    }

    const editTask = e => {
        e.preventDefault();

        axios.put(`https://plant-purpose.herokuapp.com/api/users/${userId}/tasks/${props.task.id}`, updatedTask)
        .then(res => {
            console.log(res)
            window.location.reload();
        })
        .catch(err => {
            console.log(err)
        });
    }

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
            { edit ? <input type='text' name="title" onChange={e => onChangeHandler(e)} placeholder="Title..." /> : <h2>{props.task.title}</h2>}
            { edit ? <input type='text' name="task" onChange={e => onChangeHandler(e)} placeholder="Task..." /> : <p>{props.task.task}</p>}
            { edit ? <input type='text' name="deadline" onChange={e => onChangeHandler(e)} placeholder="Deadline..." /> : <p>Due By: {props.task.deadline}</p>}
            { edit ? <button className='button' onClick={e => editTask(e)}>Save Changes</button> :  <p style={{ cursor: 'pointer' }} onClick={deleteHandler}><img src='images/trash-solid.svg' width="20px" alt="trash"/></p>}
            
            <p style={{ cursor: 'pointer' }} onClick={editToggle}><img src='images/edit.svg' alt="edit"/></p>
        </div>
    )
}
export default TaskCard;