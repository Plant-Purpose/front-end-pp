import React from 'react'


const Nav = (props) => {
    const signedIn = localStorage.getItem('token');    
    return(
        <div className='nav'>

            <div className='mainNav'>
                <img src="images/Nav/leaf.svg" alt="leaf logo"/>
                <img src='images/Nav/Plant_Purpose.svg' alt="plant purpose text"/>
            </div>

            <div className="button">
                {signedIn && signedIn.length ? 
                <div className="loggedInButts">
                    <button className='signup'> Logout </button>
                </div>
                :
                <div className="loggedOutButts">
                    <button className='signin' onClick={() => props.history.push('/login')}> Sign In</button>
                    <button className='signup' onClick={() => props.history.push('/register')}> Sign Up </button>
                </div>
                }     
            </div>

        </div>
    )
}

export default Nav;