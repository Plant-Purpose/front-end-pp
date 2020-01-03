import React, { useState } from 'react';

const Menu = () => {
 

  return (
    <>
      <div className='menuUserBox'>
      <img src="images/Menu/profile.svg" alt="profile picture example"/>
        <p> user modal drop down here </p>
      </div>

      <div className="menu">
        <div className="dashboard"> <img src='images/Menu/dashboard.svg' alt='dashboard'/> Dashboard </div>
        <div className="plants"> <img src='images/Menu/myplants.svg'alt='leaf'/> My Plants </div>
        <div className="tasks"> <img src='images/Menu/tasks.svg' alt='task'/> Tasks </div>
        <div className="notes"> <img src='images/Menu/notes.svg' alt='notes'/> Notes </div>
        
      </div>

      <div className="userpref">
        <div className='settings'> <img src='images/Menu/setting.svg' alt='settings'/>Settings</div>
        <div className="notifications"> <img src='images/Notifications/notification_black.svg' alt='bell'/>Notifications </div>
      </div>
    </>
  )
}

export default Menu;