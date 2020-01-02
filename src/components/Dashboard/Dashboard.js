import React from 'react';

import MyPlants from "./MyPlants";
import MyTasks from "./MyTasks";
import Menu from "./Menu";
import Notification from "./Notification";

const Dashboard = () => {
    return(
        <div>
            <Menu/>
            <Notification/>
            <MyPlants/>
            <MyTasks/>
        </div>
    )
}

export default Dashboard;