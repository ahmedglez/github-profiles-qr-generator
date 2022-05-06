import React, { useContext } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { GoChevronUp } from 'react-icons/go';

import AppContext from '../contexts/AppContext';
import useGetQR from '../hooks/useGetQR';
import '../styles/ShowQrComponent.scss';

const ShowQrComponent = (props) => {
	const {
		lookForUser,
		user,
		searchValue,
		code,
		valid,
		setValid,
		showInfo,
		setShowInfo,
	} = useContext(AppContext);

	const handleClick = () => {
		if (searchValue !== '') {
			lookForUser(searchValue);
		} else {
			setValid(false);
		}
	};

	return (
		<div className='main-container'>
			{valid === false && searchValue !== '' && (
				<p id='error-message'>Sorry, user not found</p>
			)}
			<div className='button-container'>
				<button onClick={handleClick}>Create Code</button>
			</div>
			<div className='qr-container'>{valid && <img src={code} alt='' />}</div>
			{valid && user !== undefined && (
				<div
					className='more-info'
					onClick={() => {
						setShowInfo(!showInfo);
						console.log(showInfo);
					}}>
					{!showInfo ? <p>see more info</p> : <p>see less</p>}
					{showInfo && <GoChevronUp className='down-arrow' />}
					{!showInfo && valid && <GoChevronDown className='down-arrow' />}
				</div>
			)}
		</div>
	);
};

export default ShowQrComponent;
