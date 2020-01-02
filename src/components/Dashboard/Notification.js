import React, {useState, useEffect} from 'react'
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
                return(
            <div className="notifBar">
                if(notification.plants >= 0){
                    <div className='plants'>
                        <img src='images\Notifications\leaf_green.svg' alt='green leaf'/>
                        <p>{notification.plant.length}</p>
                        <p>Plants</p>
                    </div>
                } else {
                    <div className='plantsNo'>
                        <img src='images\Notifications\leaf_black.svg' alt='black leaf'/>
                        <p>0</p>
                        <p>Plants</p>
                    </div>
                }
                if(notification.task >= 0){
                    <div className='task'>
                        <img src='images\Notifications\task_green.svg' alt='green task'/>
                        <p>{notification.task.length}</p>
                        <p>Tasks</p>
                    </div>
                } else {
                    <div className='plantsNo'>
                        <img src='images\Notifications\leaf_black.svg' alt='black leaf'/>
                        <p>0</p>
                        <p>Plants</p>
                    </div>
                }


            </div>
            
            )}):null}
        </div>
            

    )
}
export default Notification;