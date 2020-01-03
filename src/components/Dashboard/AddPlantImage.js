import React from 'react';
import AddPlant from "../AddPlant";


const AddPlantImage = () => {
    return (
        <div className="addPlant">           
            <img src='images/empty_pot.svg' alt='Empty Pot'/>
            <img src='images/plus.svg' alt='plus sign' className='plusSign'/>
            <p>Add Plants</p>            
        </div>
    )
}

export default AddPlantImage;