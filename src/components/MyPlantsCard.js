import React from 'react'


const MyPlantsCard = (props) =>{
    console.log("props",props)
    return(
                        
        <div className="plantCard" key={props.plant.data.id}>
            <img src={ props.plant.data.images.length > 0 ? props.plant.data.images[0].url : ""} alt={props.plant.data.common_name} width="150" height="150"/>
            <h3>{props.plant.data.name}</h3>
            {/* <p>{plant.data.plant_id}</p>  */}
            <button className='button' style={{ cursor: 'pointer' }} onClick={props.deleteHandler}>Delete</button>   
        </div>
    )
}
export default MyPlantsCard;