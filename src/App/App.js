import React from 'react';
import '../styles/App.css';
import Home from '../pages/Home';
import AppContext from '../contexts/AppContext';
import useGetUsers from '../hooks/useGetUsers';
import UserInfo from '../pages/UserInfo';

const App = () => {
	const usersApi = useGetUsers();
	return (
		<AppContext.Provider value={usersApi}>
			<div className='App'>
				<Home />
				{usersApi.showInfo &&  usersApi.valid && usersApi.user!== undefined && <UserInfo />}
			</div>
		</AppContext.Provider>
	);
};
export default App;
