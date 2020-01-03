import React, {useState, useEffect} from 'react';
import authAxios from "../../util/authAxios";

const MyTasks = () => {
    const [tasks, setTasks] = useState([]);
    const userId = localStorage.getItem('uid');
    
    useEffect(() => {
       authAxios()
       .get(`api/users/${userId}/tasks`)
       .then(response => {
        setTasks(response.data)
        })
        .catch(error => {
            console.log(error)
        })
        }, [tasks])
        console.log(tasks)

    return(
        <div className="myTasks">
            {tasks && tasks.length !== 0 ? tasks.map(task => {
                return(
                <div>
                    <h2>{task.title}</h2>
                    <p>{task.task}</p>
                    <p>{task.deadline}</p>
                </div>
            )}):
            <div>
                <h2>My Tasks</h2>
                <p>You have no tasks at this time.</p>
            </div> 
            }
        </div>
    )
}
export default MyTasks;