import React from 'react';
import '../styles/AvatarPicture.scss';

const AvatarPicture = ({url}) => {
	return (
		<div className='avatar-container'>
			<img src={url} alt='' />
		</div>
	);
};

export default AvatarPicture;
