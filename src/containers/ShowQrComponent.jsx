import React, {useContext} from 'react';
import { GoChevronDown } from 'react-icons/go';
import AppContext from '../contexts/AppContext';
import useGetQR from '../hooks/useGetQR';
import '../styles/ShowQrComponent.scss';

const ShowQrComponent = (props) => {

	const {user, lookForUser,  searchValue, code, getCode} = useContext(AppContext)


	const handleClick = () =>{
		lookForUser(searchValue);
		
	}

	
	return (
		<div className='main-container'>
			<div className='button-container'>
				<button onClick={handleClick} >Create Code</button>
			</div>
			<div className='qr-container'>
				{user!==undefined &&  <img src={code} alt='' />}
			</div>
			<div className='more-info'>
				<p>see more info</p>
				<GoChevronDown className='down-arrow' />
			</div>
		</div>
	);
};

export default ShowQrComponent;
