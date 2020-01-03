import React from 'react';
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

    function submit() {
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
                    <label htmlFor="email">E: </label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder='E-mail'
                        value={user.email}
                        onChange={handleChange}
                    /> 

                    <p id='error-text'>{errors.email}</p>

                    <label htmlFor="password">P: </label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder='Password'
                        value={user.password}
                        onChange={handleChange}
                    /> 
                    
                    <p id='error-text'>{errors.password}</p>

                    <button type='submit'>Login</button>
                </form>
            </div>
        )


}

export default Login;