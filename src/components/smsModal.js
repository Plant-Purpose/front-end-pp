import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SMSModal = () => {
	const [task, setTask] = useState('');
	const [time, setTime] = useState('');
	const [unit, setUnit] = useState('h');
	const [phone, setPhone] = useState('');

	useEffect(() => {
		const userId = localStorage.getItem('uid');

		axios
			.get(`https://plant-purpose.herokuapp.com/api/users/${userId}`)
			.then(user => {
				console.log(user);
				setPhone(user.data.phone);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const changeHandler = (e, setCB) => {
		e.preventDefault();

		setCB(e.target.value);
	};

	const submitHandler = e => {
		e.preventDefault();

		const number = '+1' + phone.replace(/-/g, '').trim();

		const sms = {
			phone: number,
			task: task,
			time: 0
		};

		if (unit === 'h') {
			const ms = Number(time) * 60 * 60 * 1000;

			sms.time = ms;
		} else {
			const ms = Number(time) * 60 * 1000;

			sms.time = ms;
		}

		axios
			.post('https://plant-purpose.herokuapp.com/api/sms/schedule', sms)
			.then(result => console.log(result))
			.catch(err => console.log(err));
	};

	console.log(task, time, unit, phone);
	return (
		<div className='sms-modal-outter'>
			<div className='sms-modal-inner'>
				<form onSubmit={e => submitHandler(e)}>
					<h2 style={{ fontSize: '26px', margin: '25px' }}>
						<img
							src='images/Notifications/notification_black.svg'
							alt='bell'
							style={{ marginRight: '15px' }}
						/>
						Set A Reminder
					</h2>

					<input
						type='text'
						name='task'
						placeholder='What do you need to do...'
						onChange={e => changeHandler(e, setTask)}
					/>

					<input
						type='text'
						name='time'
						placeholder='Enter the amount of time before you recieve your message...'
						onChange={e => changeHandler(e, setTime)}
					/>

					<select
						onChange={e => changeHandler(e, setUnit)}
						style={{ marginBottom: '35px' }}
					>
						<option value='h'>Hours</option>
						<option value='m'>Minutes</option>
					</select>

					<button className='button' type='submit'>
						Set Reminder
					</button>
				</form>
			</div>
		</div>
	);
};

export default SMSModal;
