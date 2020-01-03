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

            setNotification({
                plants: [ ...result[0].data ],
                tasks: [ ...result[1].data ],
                notes: [],
                notifications: []
            })
        }

        getData()
   
    }, [])         
                
    const plantImg = notification.plants.length > 0 ? 'images/Notifications/leaf_green.svg' : 'images/Notifications/leaf_black.svg'
    const taskImg = notification.tasks.length > 0 ? 'images/Notifications/task_green.svg' :'images/Notifications/task_black.svg'
    return(
        <div>
            <div className="notifBar">

            <div className={ notification.plants.length > 0 ? 'plants' : 'plantsNo' }>
                <img src={plantImg} alt='green leaf'/>
                <p>{notification.plants.length}<br/>
                Plants</p>
            </div>
                     

            <div className={ notification.tasks.length > 0 ? 'tasks' : 'tasksNo' }>
                <img src='images\Notifications\task_green.svg' alt='green task'/>
                <p>{notification.tasks.length}<br/>
                Tasks</p>
            </div>
                                    


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