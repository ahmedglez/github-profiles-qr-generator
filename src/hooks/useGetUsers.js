import React, { useEffect, useState } from 'react';
import { github_users } from '../apis/apis';
import axios from 'axios';
import useGetQR from './useGetQR';

const useGetUsers = () => {
	const [user, setUser] = useState();
	const [valid, setValid] = useState(user === undefined);
	const [searchValue, setSearchValue] = useState();
	const [code, setCode] = useState();

	const getCode = () => {
		if (user !== undefined) {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			setCode(useGetQR(user.html_url));
		} else {
			setCode('');
		}
	};

	useEffect(getCode, [user]);
	const lookForUser = (username) => {
		console.log(username);
		const api = github_users + '/' + username;
		console.log(api);
		console.log(github_users);
		async function getUser(username) {
			const myUser = await axios(api);
			setUser(myUser.data);
		}
		getUser();
	};

	return {
		user,
		setUser,
		valid,
		lookForUser,
		searchValue,
		setSearchValue,
		code,
		getCode,
	};
};

export default useGetUsers;
