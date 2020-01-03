import React, { useState, useEffect } from 'react';
import authAxios from '../util/authAxios';

const QueryUserPlants = () => {
	const [listPlants, setListPlants] = useState({
		plants: []
	});
	const userId = localStorage.getItem('uid');

	useEffect(() => {
		authAxios()
			.get(`https://plant-purpose.herokuapp.com/api/users/${userId}/plants`)
			.then(response => {
				console.log('ListUserPlants ---->', response);
				setListPlants([...response.data]);
			})
			.catch(error => {
				console.log('ListPlants', error);
			});
	}, [userId]);

	return (
		<div className='plant-panel'>
			{/* <h1>Please Work</h1> */}
			{/* <h2>My Plants</h2>
		<div className='ListContainer'>
				{listPlants && listPlants.plants.length !== 0 ? ( 
					listPlants.plants.map(plant => {
						return plant;
					})
				) : (
					<div>
						<p>You have no Plants at this time.</p>
					</div>
				)}
			</div>  */}
		</div>
	);
};
export default QueryUserPlants;
