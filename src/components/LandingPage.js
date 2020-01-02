import React from 'react';


const LandingPage = () => {

  return (
    <>

      <div className='landingNavButtons'>
        <button> Sign In </button>
        <button> Sign Up </button>
      </div>

      <div className='landingBody'>
        <h1> Welcome to Plant Purpose </h1>
        <h3> A plant managment service, which helps plant owners take better care of their plants </h3>
        <button> Sign Up Now </button>
        <img src="images/Nav/landingBody.svg" alt="home page plant picture"/>
      </div>

      <div>
      <img src="images/Nav/landingFeature.svg" alt="home page feature plant picture"/>
      <img src="images/Nav/landingFeat1.svg" alt="home page feature 1 picture"/>
      <img src="images/Nav/landingFeat2.svg" alt="home page feature 2 picture"/>
      <img src="images/Nav/landingFeat3.svg" alt="home page feature 3 picture"/>
      </div>
    </>
  )
}

export default LandingPage;