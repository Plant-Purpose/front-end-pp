import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import ProtectedRoute from "./util/ProtectedRoute";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
	return (
		<div className='App'>
			<Route exact path='/register' render={props => <Register {...props} />} />
			<Route exact path='/login' render={props => <Login {...props} />} />
		</div>
	);
}

export default App;
