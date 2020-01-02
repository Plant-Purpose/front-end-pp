import React, {useState} from 'react';
import authAxios from "../util/authAxios";

const AddTask = (props) => {
    const [task, setTask] = useState()
 return(
     <div>
         <h3>Add Task</h3>
         <input type="text" name="task" placeholder="Enter Task"/>
         <button>Save Task</button>
     </div>
 )
}
export default AddTask;