import React from 'react';
import AddPlant from "../AddPlant";

const AddPlantImage = () => {

    const displayModal = (e) => {
        e.preventDefault();

        const modal = document.querySelector('#add-modal');
        const content = document.querySelector('.modal-content');

        modal.style.height === '0%' ? modal.style.height = '100%'
                                    : modal.style.height = '0%';
        console.log('modal', modal, content)
        if( content.style.opacity === '0') {
            setTimeout(() => {
                content.style.opacity = '100%'
            }, 200);
        } else {
            content.style.opacity = '0';
        }
    }
    
    return (
        <div className="addPlant">           
            <img src='images/empty_pot.svg' alt='Empty Pot'/>
            <img src='images/plus.svg' alt='plus sign' className='plusSign' onClick={displayModal} style={{ cursor: "pointer" }}/>
            <p onClick={displayModal} style={{ cursor: "pointer" }}>Add Plants</p>            
        </div>
    )
}

export default AddPlantImage;