import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import '../styles/UserInfo.scss';
import TitleComponent from '../components/TitleComponent';
import AvatarPicture from '../components/AvatarPicture';
import InformationContainer from '../containers/InformationContainer';

const UserInfo = (props) => {
	const { user } = useContext(AppContext);

	return (
		<div className='user-info-container'>
			<TitleComponent text={'Aditional Information'} />
			<AvatarPicture url={user.avatar_url} />
			<InformationContainer user={user}/>
		</div>
	);
};

export default UserInfo;
