import React, {useState} from 'react';
import Calendar from "react-calendar";

import MyPlants from "./MyPlants";
import MyTasks from "./MyTasks";
import Menu from "./Menu";
import Notification from "./Notification";
import AddPlantImage from "./AddPlantImage"

const Dashboard = () => {
    const [date, setDate] = useState({ value: new Date() })

	const handleChange = value => setDate([value]);
    
    return(
        <div className='dash'  style={{position: 'relative'}}>
            <div className='leftDash'>
                <Menu/>
            </div>
            <div className='middleDash'>
                <Notification/>
                <MyPlants/>
                <MyTasks/>
            </div>
            <div className='rightDash'>
            <Calendar 
            value={date.value}
            onChange={handleChange}
            className="calendar"
            />
            <AddPlantImage/>

            </div>
        </div>
    )
}

export default Dashboard;