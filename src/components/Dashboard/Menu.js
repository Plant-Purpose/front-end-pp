import React from 'react';

const Menu = () => {
  return (
    <>
      <div className='menuUserBox'>
      <img src="images/Menu/profile.svg" alt="profile picture example"/>
        <p> user modal drop down here </p>
      </div>

      <div>
        <div> Dashboard </div>
        <div> My Plants </div>
        <div> Tasks </div>
        <div> Notes </div>
      </div>

      <div>
        <div> Settings </div>
        <div> Notifications </div>
      </div>
    </>
  )
}

export default Menu;