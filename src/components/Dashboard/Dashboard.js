import React, {useState} from 'react';
import Calendar from "react-calendar";

import MyPlants from "./MyPlants";
import MyTasks from "./MyTasks";
import Menu from "./Menu";
import Notification from "./Notification";
import AddPlantImage from "./AddPlantImage"

const Dashboard = () => {
    const [date, setDate] = useState({ date: '' })

	const handleChange = e => {
		setDate({
			...date,
			[e.target.name]: e.target.value
		});
    };
    
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
            type='date'
            name='date'
            // value={date.date}
            onChange={handleChange}
            className="calendar"
            />

            <AddPlantImage/>

            </div>
        </div>
    )
}

export default Dashboard;