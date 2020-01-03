import React from 'react';
import axios from "axios";
import { validateRegistration } from '../util/formValidation/validateRegistration'
import { useForm } from '../util/useForm';

const initialState = {
  full_name: '',
  email: '',
  password: '',
  phone: null,
  location: null
}

const Register = props => {
  const { values: user, handleChange, errors, handleSubmit } = useForm(
    initialState,
    validateRegistration,
    submit
  )
  
  function submit() {
    console.log(user)
    axios
    .post('https://plant-purpose.herokuapp.com/api/auth/register', user)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.token)
      // props.history.push('/dashboard')
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

      <p id='error-text'>{errors.full_name}</p>

      <label htmlFor="email">Email: </label>
      <input
        type='text' 
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