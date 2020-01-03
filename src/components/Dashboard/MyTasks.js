import React, {useState, useEffect} from 'react';
import TaskCard from './TaskCard';
import authAxios from "../../util/authAxios";

const MyTasks = () => {
    const [tasks, setTasks] = useState([]);
    const userId = localStorage.getItem('uid');
    
    useEffect(() => {
       authAxios()
       .get(`https://plant-purpose.herokuapp.com/api/users/${userId}/tasks`)
       .then(response => {
            console.log('TASK -->', response)
            setTasks([ ...response.data ])
        })
        .catch(error => {
            console.log(error)
        })
        }, [userId])
        // console.log(tasks)

    return(
        <div className="myTasks">
            <h2>My Tasks</h2>
            <div className="taskContainer">
            {tasks && tasks.length !== 0 ? tasks.map(task => {
                return(
                    <TaskCard task={task} />
            )}):
            <div>                
                <p>You have no tasks at this time.</p>
            </div>             
            }
            </div>
        </div>
    )
}
export default MyTasks;