import React, {useState} from 'react';
import authAxios from "../util/authAxios";

const AddTask = (props) => {
    const [task, setTask] = useState()
 return(
     <div className='inner-task-box'>
         <h3>Add Task</h3>
         <textarea type="text" name="task" placeholder="Enter Task"/>
         <button className='button'>Save Task</button>
     </div>
 )
}
export default AddTask;