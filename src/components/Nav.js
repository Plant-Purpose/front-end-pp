import React from 'react'

const Nav = () => {
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
                    <button className='signin'> Sign In </button>
                    <button className='signup'> Sign Up </button>
                </div>
                }     
            </div>

        </div>
    )
}

export default Nav;