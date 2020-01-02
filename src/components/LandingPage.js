import React from 'react';


const LandingPage = () => {

  return (
    <div className='landing'>

      <div className='landingBody'>
        <h1> Welcome to Plant Purpose </h1>
        <h3> A plant managment service, which helps plant owners take better care of their plants </h3>
        <button> Sign Up Now </button>
        <img src="images/Landing/landingBody.svg" alt="home page plant picture"/>
      </div>

      <div className='landingFeatures'>
        <img src="images/Landing/landingFeature.svg" alt="home page feature plant picture"/>
        <h6> Feature One Details </h6>
        <p> Voluptate ullamco Voluptate ullamco Voluptate ullamco </p>
        <img src="images/Landing/landingFeat1.svg" alt="home page feature 1 picture"/>
        <h6> Feature Two Details </h6>
        <p> Voluptate ullamco Voluptate ullamco Voluptate ullamco </p>
        <img src="images/Landing/landingFeat2.svg" alt="home page feature 2 picture"/>
        <h6> Feature Three Details </h6>
        <p> Voluptate ullamco Voluptate ullamco Voluptate ullamco </p>
        <img src="images/Landing/landingFeat3.svg" alt="home page feature 3 picture"/>
      </div>

      <div className='landingContact'>
        <img src="images/Landing/Facebook.svg" alt="facebook link image"/>
        <img src="images/Landing/Twitter.svg" alt="twitter link image"/>
        <img src="images/Landing/Instagram.svg" alt="instagram link image"/>

        <p> Privacy Policy </p>
        <p> Terms of Use </p>
        <p> Contact Us </p>
      </div>

    </div>
  )
}

export default LandingPage;