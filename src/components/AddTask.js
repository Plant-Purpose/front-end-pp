import React, {useState} from 'react';
import authAxios from "../util/authAxios";
const AddTask = (props) => {
    const [title, setTitle] = useState('');
    const [task, setTask] = useState('');
    const uid = localStorage.getItem('uid');
    const onChangeHandler = (e, setCB) => {
        e.preventDefault();
        setCB(e.target.value)
    }
    const onSubmit = e => {

        const new_task = {
            title,
            task,
            deadline: '1/4/2014',
            created_at: Date.now()
        }
        authAxios().post(`https://plant-purpose-staging.herokuapp.com/api/users/${uid}/tasks`, new_task)
                 .then(res => {
                     console.log(res)
                 })
                 .catch(err => {
                     console.log(err)
                 });
    }
    console.log('--title', title, '--test--', task)
 return(
     <div className='inner-task-box'>
         <h3>Add Task</h3>
         <input type="text"
                name="title"
                placeholder="Enter Title"
                onChange={() => onChangeHandler(setTitle)}
         />
         <textarea type="text" 
                    name="task" 
                    placeholder="Enter Task"
                    onChange={() => onChangeHandler(setTask)}
        />
         <button className='button' type='submit'>Save Task</button>
     </div>
 )
}
export default AddTask;