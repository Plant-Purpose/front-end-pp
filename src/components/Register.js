import React, {useState, useEffect} from 'react';

const Register = props => {

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]:e.target.value,
    })
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    props.registerUser(state, props);
  }

  return (
    <>
    <form  onSubmit={onSubmit}>
      <h1> Register </h1>
      <input
        type='email' 
        name='email' 
        placeholder='E-mail'
        value={props.email}
        onChange={onChange}
      />
      <input
        type='password' 
        name='password' 
        placeholder='Password'
        value={props.password}
        onChange={onChange}
      />
      <button type='submit'> Register </button>
      </form>
    </>
  )
}

export default Register;