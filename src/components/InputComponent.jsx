import React, {useContext} from 'react';
import '../styles/InputComponent.scss'
import AppContext from '../contexts/AppContext';

const InputComponent = (props) => {

	const {setSearchValue} = useContext(AppContext);
	const handleChange = (event) => {
		setSearchValue(event.target.value)	}


	return (
		<div className='input-container'>
			<label htmlFor='username'>write your username</label>
			<input
				type='text'
				name='username'
				id='username'
				placeholder='Example: ahmedglez'
				onChange={handleChange}
			/>
		</div>
	);
};

export default InputComponent;
