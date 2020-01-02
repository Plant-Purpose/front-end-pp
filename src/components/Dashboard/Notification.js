import React, {useState} from 'react'
import authAxios from '../../util/authAxios';


const Notification =() => {
    const [notification, setNotification] = useState();

    useEffect(() => {
        authAxios()
        .get('')
        .then(response => {
            setNotification(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    }, [notification])         
                
                
    return(
        <div>
            {notification && notification.length ? notification.map(notif => {
            <div>
                if(notification.plants >= 0){
                    <div className='plants'>
                        <img src='images\Notifications\leaf_green.svg' alt='black leaf'/>
                        <p>{notification.plant.length}</p>
                        <p>Plants</p>
                    </div>
                } else {

                }

            
        })}
        </div>

    )
}