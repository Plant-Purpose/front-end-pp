import React from 'react';
import './App.css';
import {Route} from "react-router-dom";

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
			<LandingPage/>
			<Route exact path='/register' render={props => <Register {...props} />} />
			<Route exact path='/login' render={props => <Login {...props} />} />
			<Route exact path="/dashboard" component={Dashboard}/>
		</div>
	);
}

export default App;
