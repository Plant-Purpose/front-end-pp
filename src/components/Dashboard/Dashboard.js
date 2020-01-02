import React from 'react';

import MyPlants from "./MyPlants";
import MyTasks from "./MyTasks";
import Menu from "./Menu";
import Notification from "./Notification";
import AddPlant from "./AddPlant"

const Dashboard = () => {
    return(
        <div>
            <Menu/>
            <Notification/>
            <MyPlants/>
            <MyTasks/>
            <AddPlant/>
        </div>
    )
}

export default Dashboard;