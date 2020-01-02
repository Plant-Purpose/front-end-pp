import React from 'react';
import axiosAuth from "../util/authAxios";
import { validateUser } from '../util/formValidation/validateUser'
import { useForm } from '../util/useForm';
import axios from "axios";

const initialState = {
  full_name: '',
  email: '',
  password: '',
  phone: '',
  location: ''
}

const Register = props => {


  const { values: user, handleChange, errors, handleSubmit } = useForm(
    initialState,
    validateUser,
    submit
)
  
  function submit() {
    console.log(user)
    axios
    .post('https://plant-purpose.herokuapp.com/api/auth/register', user)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      props.history.push('/dashboard')
    })
    .catch(err => {
      console.dir(err)
    })
  }

  return (
    <>    
      <h1> Register </h1>
      <form  onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        type='text' 
        name='full_name' 
        placeholder='Name'
        value={user.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email: </label>
      <input
        type='email' 
        name='email' 
        placeholder='E-mail'
        value={user.email}
        onChange={handleChange}
      />
      <p id='error-text'>{errors.email}</p>

      <label htmlFor="password">Password: </label>
      <input
        type='password' 
        name='password' 
        placeholder='Password'
        value={user.password}
        onChange={handleChange}
      />
      <p id='error-text'>{errors.password}</p>
      <label htmlFor="phone">Phone: </label>
      <input
        type='phone' 
        name='phone' 
        placeholder='Phone'
        value={user.phone}
        onChange={handleChange}
      />
       <label htmlFor="location">Location: </label>
      <input
        type='text' 
        name='location' 
        placeholder='Location'
        value={user.location}
        onChange={handleChange}
      />

      <button type='submit'> Register </button>
      </form>
    </>
  )
}

export default Register;