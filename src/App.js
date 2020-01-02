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

function App() {
	return (
		<div className='App'>
			<Nav/>
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<Route exact path='/register' render={props => <Register {...props} />} />
				<Route exact path='/login' render={props => <Login {...props} />} />
				<Route exact path="/dashboard" component={Dashboard}/>
			</Switch>
		</div>
	);
}

export default App;
