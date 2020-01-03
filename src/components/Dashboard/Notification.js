import React, {useState, useEffect} from 'react'
import authAxios from '../../util/authAxios';


const Notification =() => {
    const [notification, setNotification] = useState({
        plants: [],
        tasks: [],
        notifications: [],
        notes: []
    });

    useEffect( () => {
        const userID = localStorage.getItem('uid');
        
        const getData = async () => {
            const result = await Promise.all([
                authAxios().get(`https://plant-purpose.herokuapp.com/api/users/${userID}/plants`),
                authAxios().get(`https://plant-purpose.herokuapp.com/api/users/${userID}/tasks`)
            ]);

            console.log('RESULT', result)
        }
   
    //     authAxios()
    //     .get('')
    //     .then(response => {
    //         setNotification(response.data);
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    }, [notification])         
                
                
    return(
        <div>
            <div className="notifBar">

                {notification.plants && notification.plants.length !== 0 ?                  
                    notification.plants.map(notif => {
                        return(
                        <div className='plants'>
                            <img src='images\Notifications\leaf_green.svg' alt='green leaf'/>
                            <p>{notification.plants.length}<br/>
                            Plants</p>
                        </div>
                        )}):                
                    <div className='plantsNo'>
                        <img src='images\Notifications\leaf_black.svg' alt='black leaf'/>
                        <p>0<br/>
                        Plants</p>
                    </div>
                }

                {notification.tasks && notification.tasks.length !== 0 ?                 
                    notification.tasks.map(notif => {
                        return(
                        <div className='tasks'>
                            <img src='images\Notifications\task_green.svg' alt='green task'/>
                            <p>{notif.tasks.length}<br/>
                            Tasks</p>
                        </div>
                        )}):                
                    <div className='tasksNo'>
                        <img src='images\Notifications\task_black.svg' alt='black task'/>
                        <p>0<br/>
                        Tasks</p>
                    </div>
                }

                {notification.notifications && notification.notifications.length !== 0 ?                 
                    notification.notifications.map(notif => {
                        return(
                        <div className='notifications'>
                            <img src='images\Notifications\notification_green.svg' alt='green notification'/>
                            <p>{notif.notifications.length}<br/>
                            Notifications</p>
                        </div>
                        )}):                
                        <div className='notificationsNo'>
                            <img src='images\Notifications\notification_black.svg' alt='black notification'/>
                            <p>0 <br/> Notifications</p>
                        </div>
                }

                {notification.notes && notification.notes.length !== 0 ?                 
                notification.notes.map(notif => {
                    return(
                    <div className='notes'>
                        <img src='images\Notifications\notes_green.svg' alt='green notes'/>
                        <p>{notif.notes.length}<br/>
                        Notes</p>
                    </div>
                    )}):                
                    <div className='notesNo'>
                        <img src='images\Notifications\notes_black.svg' alt='black notes'/>
                        <p>0<br/>
                        Notes</p>
                    </div>
                }

            </div>
        </div>
    )
}
export default Notification;