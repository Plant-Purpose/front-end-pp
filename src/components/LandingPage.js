import React from 'react';

const LandingPage = props => {
	return (
		<div className='landing'>
			<div className='landingBody'>
				<div>
					<h1> Welcome to </h1>
					<h1 className='greenheader'> Plant Purpose </h1>
					<h3>
						{' '}
						A plant managment service, which helps plant owners take
						better care of their plants{' '}
					</h3>
					<button
						className='sign-up button'
						onClick={() => props.history.push('/register')}
					>
						{' '}
						Sign Up Now{' '}
					</button>
				</div>
				<img
					className='potted'
					src='images/Landing/pottedPlant.jpg'
					alt='home page plant'
				/>
			</div>

			<div className='landingFeatures'>
				<img
					className='sideLeaf'
					id='side-l'
					src='images/Landing/landingFeature.svg'
					alt='home page feature plant'
				/>

				<div>
					<img
						className='featureImg'
						src='images/Landing/landingFeat1.svg'
						alt='home page feature 1'
					/>
					<h6> Watering </h6>
					<p> Keeping track of when and which plants need water </p>
				</div>

				<div>
					<img
						className='featureImg'
						src='images/Landing/landingFeat2.svg'
						alt='home page feature 2'
					/>
					<h6> Growing </h6>
					<p> Discovering your plants optimal growth period </p>
				</div>

				<div>
					<img
						className='featureImg'
						src='images/Landing/landingFeat3.svg'
						alt='home page feature 3'
					/>
					<h6> Getting the Details </h6>
					<p> Plan tasks and take notes specific to each plant and get reminders </p>
				</div>
			</div>

			<div className='landingContact'>
				<div className='socialApps'>
					<img src='images/Landing/Facebook.svg' alt='facebook link' />
					<img src='images/Landing/Twitter.svg' alt='twitter link' />
					<img src='images/Landing/Instagram.svg' alt='instagram link' />
				</div>

				<div className='terms'>
					<p> Privacy Policy </p>
					<pre>
						<p> | Terms of Use | </p>
					</pre>
					<p> Contact Us </p>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
