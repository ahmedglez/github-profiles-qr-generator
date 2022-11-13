import React from 'react';
import TitleComponent from '../components/TitleComponent';
import DescriptionComponent from '../components/DescriptionComponent';
import ShowQrComponent from '../containers/ShowQrComponent';
import InputComponent from '../components/InputComponent';
import '../styles/Home.scss';

const Home = (props) => {
	return (
		<div className='home-container'>
			<TitleComponent text={'QR Generator for Github Profiles'} />
			<DescriptionComponent />
			<InputComponent />
			<ShowQrComponent />
		</div>
	);
};

export default Home;
