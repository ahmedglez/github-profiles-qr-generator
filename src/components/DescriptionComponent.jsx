import React from 'react';
import '../styles/DescriptionComponent.scss';

const DescriptionComponent = (props) => {
	return (
		<div className='message-container'>
			<p className='message'>
			    Complete the following field and get your QR code to promote your github
				profile wherever you go. You can also access information corresponding
				to the profile
			</p>
		</div>
	);
};

export default DescriptionComponent;
