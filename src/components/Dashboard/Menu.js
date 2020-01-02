import React, { useState } from 'react';

const Menu = () => {
 

  return (
    <>
      <div className='menuUserBox'>
      <img src="images/Menu/profile.svg" alt="profile picture example"/>
        <p> user modal drop down here </p>
      </div>

      <div>
        <div> <img src='images/Menu/dashboard.svg'/> Dashboard </div>
        <div> <img src='images/Menu/myplants.svg'/> My Plants </div>
        <div> <img src='images/Menu/tasks.svg'/> Tasks </div>
        <div> <img src='images/Menu/notes.svg'/> Notes </div>
        
      </div>

      <div>
        <div> Settings </div>
        <div> Notifications </div>
      </div>
    </>
  )
}

export default Menu;