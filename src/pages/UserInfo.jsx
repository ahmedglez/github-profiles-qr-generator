import React from 'react';
import '../styles/UserInfo.scss';

const UserInfo = (props) => {
	return (
		<div className='user-info-container'>
			<h2>Aditional Information</h2>

			<div className='avatar-container'>
				<img src='' alt='' />
			</div>

			<div className='information-container'>				
				<div className='field-container'>
					<label htmlFor='fullname' value='fullname' />
					<input type='text' name='fullname' id='fullname' />
				</div>
				<div className='field-container'>
					<label htmlFor='location' value='location' />
					<input type='text' name='location' id='location' />
				</div>
				<div className='field-container'>
					<label htmlFor='twitter' value='twitter' />
					<input type='text' name='twitter' id='twitter' />
				</div>
				<div className='field-container'>
					<label htmlFor='email' value='email' />
					<input type='text' name='email' id='email' />
				</div>
				<div className='field-container'>
					<label htmlFor='followers' value='followers' />
					<input type='text' name='followers' id='followers' />
				</div>
				<div className='field-container'>
					<label htmlFor='following' value='following' />
					<input type='text' name='following' id='following' />
				</div>
                <div className='field-container'>
					<label htmlFor='link' value='link' />
					<input type='text'  name='link' id='link' />
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
