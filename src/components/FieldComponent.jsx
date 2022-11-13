import React from 'react';
import '../styles/FieldComponent.scss'

const FieldComponent = ({ name, value }) => {
	return (
		<div className='field-container'>
			<label htmlFor={name}>{name}:</label>
			<input type='text' name={name} id={name} value={value} readOnly/>
		</div>
	);
};

export default FieldComponent;
