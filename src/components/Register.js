import React from 'react';
import axiosAuth from "../util/authAxios";
import { validateUser } from '../util/formValidation/validateUser'
import { useForm } from '../util/useForm'

const initialState = {
  email: '',
  password: ''
}

const Register = props => {
  const { values: user, handleChange, errors, handleSubmit } = useForm(
    initialState,
    validateUser,
    submit
)
console.log(user)
  
  function submit(e) {
    e.preventDefault();
    axiosAuth()
    .post('https://plant-purpose.herokuapp.com/api/register', user)
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
    <form  onSubmit={submit}>
      <h1> Register </h1>
      <label htmlFor="email">E: </label>
      <input
        type='email' 
        name='email' 
        placeholder='E-mail'
        value={user.email}
        onChange={handleChange}
      />
      <p id='error-text'>{errors.email}</p>

      <label htmlFor="password">P: </label>
      <input
        type='password' 
        name='password' 
        placeholder='Password'
        value={user.password}
        onChange={handleChange}
      />
      <p id='error-text'>{errors.password}</p>

      <button type='submit'> Register </button>
      </form>
    </>
  )
}

export default Register;