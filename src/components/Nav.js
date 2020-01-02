import React from 'react'

const Nav = () => {
    const [isLogged, setIsLog]

    const signedIn = localStorage.getItem('token');
    return(
        <div>
        <div className='mainNav'>
            <img src="images/Nav/leaf.svg" alt="leaf logo"/>
            <img src='images/Nav/Plant_Purpose.svg' alt="plant purpose text"/>
        </div>
        <div className="button">
            {signedIn && signedIn.length ? 
            <button>Logout</button>
            :
            <div>
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
}     
        </div>
        </div>
    )
}

export default Nav;