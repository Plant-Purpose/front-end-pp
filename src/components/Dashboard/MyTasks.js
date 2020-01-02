import React, {useState, useEffect} from 'react';
import authAxios from "../../util/authAxios";

const MyTasks = () => {
    const [tasks, setTasks] = useState()
    useEffect(() => {
       authAxios()
       .get('api/users/:id/tasks')
       .then(response => {
        setTasks(response.data)
        })
        .catch(error => {
            console.log(error)
        })
        }, [tasks])

    return(
        <div>
            {tasks && tasks.length ? tasks.map(task => {
                return(
                <div>
                    <h3>{task.title}</h3>
                    <p>{task.task}</p>
                    <p>{task.deadline}</p>
                </div>
            )}):null }
        </div>

    )
}
export default MyTasks;