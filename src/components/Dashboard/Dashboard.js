import React from 'react';

import MyPlants from "./MyPlants";
import MyTasks from "./MyTasks";
import Menu from "./Menu";

const Dashboard = () => {
    return(
        <div>
            <Menu/>
            <MyPlants/>
            <MyTasks/>
        </div>
    )
}

export default Dashboard;