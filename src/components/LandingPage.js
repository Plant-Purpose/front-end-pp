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
					<h6> Feature One Details </h6>
					<p> Voluptate ullamco Voluptate ullamco Voluptate ullamco </p>
				</div>

				<div>
					<img
						className='featureImg'
						src='images/Landing/landingFeat2.svg'
						alt='home page feature 2'
					/>
					<h6> Feature Two Details </h6>
					<p> Voluptate ullamco Voluptate ullamco Voluptate ullamco </p>
				</div>

				<div>
					<img
						className='featureImg'
						src='images/Landing/landingFeat3.svg'
						alt='home page feature 3'
					/>
					<h6> Feature Three Details </h6>
					<p> Voluptate ullamco Voluptate ullamco Voluptate ullamco </p>
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
