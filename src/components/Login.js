import React, {useState} from 'react';
import axiosAuth from "../util/authAxios";
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

    function submit(e) {
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
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" onChange={handleChange}/> 
                    <p className='error-text'>{errors.email}</p>

                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={handleChange}/> 
                    <p className='error-text'>{errors.password}</p>

                    <button type='submit'>Login</button>
                </form>
            </div>
        )


}

export default Login;