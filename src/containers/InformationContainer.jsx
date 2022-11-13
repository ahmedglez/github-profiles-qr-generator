import React from 'react';
import FieldComponent from '../components/FieldComponent';
import '../styles/InformationContainer.scss';

const InformationContainer = ({ user }) => {
	return (
		<div className='information-container'>
			<FieldComponent name={'id'} value={user.name ? user.id : '" "'} />
			<FieldComponent name={'fullname'} value={user.name ? user.name : '" "'} />
			<FieldComponent
				name={'location'}
				value={user.location ? user.location : '" "'}
			/>
			<FieldComponent
				name={'twitter'}
				value={user.twitter_username ? user.twitter_username : 'no twitter'}
			/>
			<FieldComponent name={'email'} value={user.email ? user.email : 'no email'} />
			<FieldComponent
				name={'followers'}
				value={user.followers ? user.followers : '" "'}
			/>
			<FieldComponent
				name={'following'}
				value={user.following ? user.following : '" "'}
			/>
			<FieldComponent
				name={'link'}
				value={user.html_url ? user.html_url : '" "'}
			/>
		</div>
	);
};

export default InformationContainer;
