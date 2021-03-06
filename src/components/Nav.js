import React from 'react'


const Nav = props => {
    const logout = e => {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('uid');
        localStorage.removeItem('message');
        props.history.push('/')
    }

    const signedIn = localStorage.getItem('token'); 
    
    const home = e => {
        props.history.push('/')
    }
    return(
        <div className='nav'>

            <div className='mainNav'>
                <img 
                    src="images/Nav/leaf.svg" 
                    alt="leaf logo" 
                    onClick={home} 
                    style={{ cursor: 'pointer' }}
                />
                <img 
                    src='images/Nav/Plant_Purpose.svg' 
                    alt="plant purpose text" 
                    onClick={home} 
                    style={{ cursor: 'pointer' }}
                />
            </div>

            <div className='nav-container'>

                {signedIn && signedIn.length ? 
                <div className="loggedInButts">
                    <button className='button'onClick={() => props.history.push('/dashboard')}>Dashboard</button>
                    <button className='signup button' onClick={logout}> Logout </button>
                </div>
                :
                <div className="loggedOutButts">
                    <button className='signin button' onClick={() => props.history.push('/login')}> Sign In</button>
                    <button className='button' onClick={() => props.history.push('/register')}> Sign Up </button>
                </div>
                }     
                
            </div>

        </div>
    )
}

export default Nav;