import React from 'react';
import axios from "axios";


const MyPlantsCard = (props) =>{
   
    const userId = localStorage.getItem('uid')
    const deleteHandler = () => {
        console.log("inside", props.plantId)
        axios.delete(`https://plant-purpose.herokuapp.com/api/users/${userId}/plants/${props.plantId}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            });
    }
console.log('poooops', props);    

    return(
                        
        <div className="plantCard" >
            <img src={ props.plant.data.images.length > 0 ? props.plant.data.images[0].url : ""} alt={props.plant.data.common_name} width="150" height="150"/>
            <h3>{props.plant.data.name}</h3>
            {/* <p>{plant.data.plant_id}</p>  */}
            <button className='button' style={{ cursor: 'pointer' }} onClick={deleteHandler}>Delete</button>   
        </div>
    )
}
export default MyPlantsCard;