import React, {useState, useEffect} from 'react'
import authAxios from '../../util/authAxios';


const Notification =() => {
    const [notification, setNotification] = useState({
        plants: [],
        tasks: [],
        notifications: [],
        notes: []
    });

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
            <div className="notifBar">
                {notification.plants && notification.plants.length !== 0 ?                  
                    notification.plants.map(notif => {
                        return(
                        <div className='plants'>
                            <img src='images\Notifications\leaf_green.svg' alt='green leaf'/>
                            <p>{notification.plants.length}</p>
                            <p>Plants</p>
                        </div>
                        )}):                
                    <div className='plantsNo'>
                        <img src='images\Notifications\leaf_black.svg' alt='black leaf'/>
                        <p>0</p>
                        <p>Plants</p>
                    </div>
                }
                {notification.tasks && notification.tasks.length !== 0 ?                 
                    notification.tasks.map(notif => {
                        return(
                        <div className='tasks'>
                            <img src='images\Notifications\task_green.svg' alt='green task'/>
                            <p>{notif.tasks.length}</p>
                            <p>Tasks</p>
                        </div>
                        )}):                
                    <div className='tasksNo'>
                        <img src='images\Notifications\task_black.svg' alt='black task'/>
                        <p>0</p>
                        <p>Tasks</p>
                    </div>
                }
                {notification.notifications && notification.notifications.length !== 0 ?                 
                    notification.notifications.map(notif => {
                        return(
                        <div className='notifications'>
                            <img src='images\Notifications\notification_green.svg' alt='green notification'/>
                            <p>{notif.notifications.length}</p>
                            <p>Notifications</p>
                        </div>
                        )}):                
                        <div className='notificaitonsNo'>
                            <img src='images\Notifications\notification_black.svg' alt='black notification'/>
                            <p>0</p>
                            <p>Notifications</p>
                        </div>
                }
                    {notification.notes && notification.notes.length !== 0 ?                 
                    notification.notes.map(notif => {
                        return(
                        <div className='notifications'>
                            <img src='images\Notifications\notes_green.svg' alt='green notes'/>
                            <p>{notif.notes.length}</p>
                            <p>Notes</p>
                        </div>
                        )}):                
                        <div className='tasksNo'>
                            <img src='images\Notifications\notes_black.svg' alt='black notes'/>
                            <p>0</p>
                            <p>Notes</p>
                        </div>
                }
            </div>
        </div>
    )
}
export default Notification;