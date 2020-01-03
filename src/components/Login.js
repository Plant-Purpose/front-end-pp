import React from 'react';
import axios from 'axios'
import { validateUser } from '../util/formValidation/validateUser'
import { useForm } from '../util/useForm'

const initialState = {
    email: '',
    password: ''
}

const Login = (props) => {
    const { values: user, handleChange, errors, handleSubmit } = useForm(
        initialState,
        validateUser,
        submit
    )

    function submit() {
        axios
        .post('https://plant-purpose.herokuapp.com/api/auth/login', user)
        .then(response => {
            console.log(response)
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('uid', response.data.id);
            props.history.push('/dashboard');
        })
        .catch(error => {
            console.log(error)
        })
    };

        return (
            <div className='login-register'> 
            <div className='log-reg-head'>
                <h2 className='active-header'>Sign In</h2>  
                <h2>Sign Up</h2>
            </div>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="email">Email: </label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder='E-mail'
                        value={user.email}
                        onChange={handleChange}
                    /> 

                    <p id='error-text'>{errors.email}</p>

                    <label htmlFor="password">Password: </label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder='Password'
                        value={user.password}
                        onChange={handleChange}
                    /> 

                    <p id='error-text'>{errors.password}</p>

                    <button className='button' type='submit'>Login</button>
                    
                </form>
            </div>
        )


}

export default Login;