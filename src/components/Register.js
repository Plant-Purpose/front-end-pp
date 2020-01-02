import React from 'react';

const Register = () => {

  return (
    <>
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
    {/* <NavBarOther/>
    <MainContainer>
 
      <ImgContainer>
        <img src='https://images.unsplash.com/photo-1566453838084-7ec27e71b3ca?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9auto=formatfit=cropw=932q=80' style={{width: '30rem'}}alt='electricion working on lines' />
      </ImgContainer>
      <FormContainer>
        <Title>
        <h1>Register</h1>
        
        </Title>
        <form onSubmit={onSubmit}>
        <FormEntry>
            <input
              type='email' 
              name='email' 
              placeholder='E-mail'
              value={props.email}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <FormEntry>
            <input
              type='password' 
              name='password' 
              placeholder='Password'
              value={props.password}
              onChange={onChange}
            >
            </input>
          </FormEntry>
          <button type='submit' >Register</button>
          <div style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
            <p style={{marginTop: '8px'}}>Already a Member? </p>
            <Link to="/login" style={{textDecoration: 'none', fontSize: '1.5rem'}}> <button>Login</button></Link>
          </div>
          
        </form>
      </FormContainer>
      
    </MainContainer> */}
    </>
  )
};

    </>
  )
}

export default Register;