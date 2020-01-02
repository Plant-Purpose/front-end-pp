import React, {useState} from 'react';
import axiosAuth from "../util/authAxios";


const Login = (props) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };
    console.log(user);

    const handleSubmit = e => {
        e.preventDefault();
        axiosAuth()
        .post('/api/login', user)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            props.history.push('/dashboard');
        })
        .catch(error => {
            console.log(error)
        })
    };

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email: </label><input type="text" name="email" onChange={handleChange}/> 
                    <label htmlFor="password">Password: </label><input type="password" name="password" onChange={handleChange}/> 
                    <button type='submit'>Login</button>
                </form>
            </div>
        )


}

export default Login;