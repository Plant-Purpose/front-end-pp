import React from 'react';
import AddTaskPanel from '../AddTaskPanel';
import AddNotesPanel from '../addNotesPanel';
import SMSModal from '../smsModal';
import ListMyPlantPanel from '../ListMyPlantPanel';

const Menu = () => {
	const togglePlantPanel = e => {
		const panel = document.querySelector('.plant-panel');
		const menu = document.querySelector('.plants');

		menu.classList.toggle('dark');
		panel.classList.toggle('show');
	};

	const toggleTaskPanel = e => {
		const panel = document.querySelector('.task-panel');
		const menu = document.querySelector('.tasks');

		menu.classList.toggle('dark');
		panel.classList.toggle('show');
	};

	const toggleNotesPanel = () => {
		const menu = document.querySelector('.notes');

		menu.classList.toggle('dark');
	};
	const welcome = localStorage.getItem('message');
	return (
		<>
			<div className='menuUserBox'>
				<img src='images/Menu/profile.svg' alt='profile  example' />
				<p>{welcome}</p>
			</div>

			<div className='menu'>
				<div className='dashboard'>
					{' '}
					<img
						src='images/Menu/dashboard.svg'
						alt='dashboard'
					/> Dashboard{' '}
				</div>
				<div
					className='plants'
					style={{ position: 'relative', cursor: 'pointer' }}
					onClick={e => togglePlantPanel(e)}
				>
					{' '}
					<img src='images/Menu/myplants.svg' alt='leaf' /> My Plants{' '}
				</div>

				<div
					className='tasks'
					style={{ position: 'relative', cursor: 'pointer' }}
					onClick={e => toggleTaskPanel(e)}
				>
					<img src='images/Menu/tasks.svg' alt='task' /> Tasks
				</div>
				<AddTaskPanel />

				<div
					className='notes'
					style={{ position: 'relative', cursor: 'pointer' }}
					onClick={toggleNotesPanel}
				>
					{' '}
					<img src='images/Menu/notes.svg' alt='notes' /> Notes{' '}
				</div>
				{/* <AddNotesPanel /> */}
			</div>

			<div className='userpref'>
				<div className='settings'>
					{' '}
					<img src='images/Menu/setting.svg' alt='settings' />
					Settings
				</div>

				<SMSModal />
			</div>
		</>
	);
};

export default Menu;
