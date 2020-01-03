import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './css/index.css';

import ProtectedRoute from './util/ProtectedRoute';
import Login from './components/Login';
import Register from './components/Register';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';
import AddPlant from './components/AddPlant';
import AddTask from './components/AddPlant';
import Tasks from './components/Tasks';

function App() {
	return (
		<div className='App'>
			<div className='app-wrap'>
				<Route path='/' render={props => <Nav {...props} />} />
				<Switch>
					<Route
						exact
						path='/'
						render={props => <LandingPage {...props} />}
					/>
					<Route
						exact
						path='/register'
						render={props => <Register {...props} />}
					/>
					<Route
						exact
						path='/login'
						render={props => <Login {...props} />}
					/>
					<Route
						exact
						path='/dashboard'
						render={props => <Dashboard {...props} />}
					/>
					<Route
						exact
						path='/add-plant'
						render={props => <AddPlant {...props} />}
					/>
					<Route
						exact
						path='/add-task'
						render={props => <AddTask {...props} />}
					/>
					<Route
						exact
						path='/tasks'
						render={props => <Tasks {...props} />}
					/>
				</Switch>
			</div>
		</div>
	);
}

export default App;
