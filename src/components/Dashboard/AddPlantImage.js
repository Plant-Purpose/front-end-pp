import React from 'react';
import AddPlant from "../"


const AddPlant = () => {
    return (
        <div className="addPlant">           
                <img src='images/empty_pot.svg' alt='Empty Pot'/>
                <img src='images/plus.svg' alt='plus sign' className='plusSign'/>
                <p>Add Plants</p>            
        </div>
    )
}

export default AddPlant;