import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import './css/index.css';

import ProtectedRoute from "./util/ProtectedRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard/Dashboard";
import AddPlant from "./components/AddPlant";
import AddTask from "./components/AddPlant"

function App() {
	return (
		<div className='App'>
			<Nav/>
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<Route exact path='/register' render={props => <Register {...props} />} />
				<Route exact path='/login' render={props => <Login {...props} />} />
				<Route exact path="/dashboard" component={Dashboard}/>
				<Route exact path='/add-plant' render={props => <AddPlant {...props} />} />
				<Route exact path='/add-task' render={props => <AddTask {...props} />} />
			</Switch>
		</div>
	);
}

export default App;
