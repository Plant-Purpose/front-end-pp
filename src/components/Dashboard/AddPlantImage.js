import React from 'react';
import AddPlant from '../AddPlant';

const AddPlantImage = () => {
	const displayModal = e => {
		e.preventDefault();

		const modal = document.querySelector('#add-modal');
		const content = document.querySelector('.modal-content');

		if (modal && modal.style) {
			modal.style.height === '0%'
				? (modal.style.height = '100%')
				: (modal.style.height = '0%');

			if (content.style.opacity === '0') {
				setTimeout(() => {
					content.style.opacity = '100%';
					content.classList.add('zindex-one');
					content.classList.remove('zindex-minus-one');
				}, 200);
			} else {
				content.style.opacity = '0';
				content.classList.add('zindex-minus-one');
				content.classList.remove('zindex-one');
			}
		}
	};

	return (
		<div className='addPlant'>
			<img className='pot' src='images/empty_pot.svg' alt='Empty Pot' />
			<img
				src='images/plus.svg'
				alt='plus sign'
				className='plusSign'
				onClick={displayModal}
				style={{ cursor: 'pointer' }}
			/>
			<p onClick={displayModal} style={{ cursor: 'pointer' }}>
				Add Plants
			</p>

			<div className='add-modal' id='add-modal'>
				<div className='modal-content'>
					<div className='close' onClick={displayModal}>
						&times;
					</div>
					<div className='left-col'>
						<AddPlant />
					</div>
					<div className='right-col'>
						<div className='img-uploader'>
							<p>
								Upload <br /> Image
							</p>
						</div>
						<button
							className='button'
							id='bjs-special-button-that-needs-special-styling-for-some-reason'
						>
							Add Plant
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddPlantImage;
