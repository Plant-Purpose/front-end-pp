import React, {useState} from 'react';


import MyPlants from "./MyPlants.js"
import MyTasks from "./MyTasks";
import Menu from "./Menu";
import Notification from "./Notification";
import AddPlant from "./AddPlant"

const Dashboard = () => {
    const [date, setDate] = useState({ date: '' })

	const handleChange = e => {
		setDate({
			...date,
			[e.target.name]: e.target.value
		});
	};
    return(
        <div className='dash'>
            <div className='leftDash'>
                <Menu/>
            </div>
            <div className='middleDash'>
                <Notification/>
                <MyPlants/>
                <MyTasks/>
            </div>
            <div className='rightDash'>
            <input
            type='date'
            name='date'
            value={date.date}
            onChange={handleChange}
            />
            <AddPlant/>
            </div>
        </div>
    )
}

export default Dashboard;